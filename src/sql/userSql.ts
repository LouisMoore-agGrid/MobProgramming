export function addUserSql(name: string): string {
    return `INSERT INTO user (userName) VALUES('${name}')`
};

export function getAllUsersSql(): string {
    return `SELECT * FROM user`;
}