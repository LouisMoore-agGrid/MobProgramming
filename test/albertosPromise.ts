import { expect } from "chai";

class MyPromise<T> {
    private status = "PENDING";
    private subscribers: ((result: T) => void)[] = [];
    private result: T;

    constructor(
        resolveCb: (resolver: (result: T) => void) => void
    ) {
        resolveCb((result) => this.onDone(result))
    }

    onDone(result: T): void {
        this.status = "RESOLVED";
        this.result = result;
        this.subscribers.forEach(subscriber => {
            subscriber(result);
        })
    }

    getCurrentStatus(): string {
        return this.status
    }

    then(thenCb: (result: T) => void) {
        if (this.status === 'RESOLVED') {
            thenCb(this.result);
            return;
        }

        this.subscribers.push(thenCb)
    }
}

it.skip('should resolve a promise with a number', () => {
    const myPromise = new MyPromise((resolve) => {
        setTimeout(() => {
            resolve(5);
        }, 500)
    })

    expect(myPromise.getCurrentStatus()).to.equal("PENDING")



    myPromise.then((result) => {
        expect(myPromise.getCurrentStatus()).to.equal("RESOLVED")
        expect(result).to.equal(5)
    });
})

it.skip('should resolve a promise with a string', () => {
    const myPromise = new MyPromise((resolve) => {
        setTimeout(() => {
            resolve('a');
        }, 500)
    })

    expect(myPromise.getCurrentStatus()).to.equal("PENDING")

    myPromise.then((result) => {
        expect(myPromise.getCurrentStatus()).to.equal("RESOLVED")
        expect(result).to.equal('a')
    });
})

it.skip('should resolve a promise with a string sync', () => {
    const myPromise = new MyPromise((resolve) => {
        resolve('a');
    });

    expect(myPromise.getCurrentStatus()).to.equal("RESOLVED")

    let itResolved = false;
    myPromise.then((result) => {
        itResolved = true;
        expect(myPromise.getCurrentStatus()).to.equal("RESOLVED")
        expect(result).to.equal('a')
    });

    expect(itResolved).to.be.true;
})