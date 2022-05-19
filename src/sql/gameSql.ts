export function getAllGamesSQL(): string {
    return `SELECT * FROM sample_data.game`;
}

export function addGameSQL(gameName: string): string {
    return `INSERT INTO game (gameName) VALUES('${gameName}')`
}

export function deleteGameSQL(gameId: number): string {
    return `DELETE FROM game WHERE gameId = '${gameId}'`;
}

