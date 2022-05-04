

export function getAllGamesSQL(): string {
    return `SELECT * FROM sample_data.game`;
}

export function addGameSQL(gameName: string): string {
    return `insert into game (gameName) values('${gameName}')`
}

export function deleteGameSQL(gameName: number): string {
    return `delete from game where gameID = ${gameName}`
}

