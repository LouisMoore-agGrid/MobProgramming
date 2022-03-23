# MobProgramming

To do:
Create Three Tables in MySQL:
These are the definitions for the tables. PK = Primary Key, FK = Foreign Key
- GAME (gameId (PK), gameName)
- USER (userId (PK), userName)
- USER_TO_GAME (id (PK), gameId(FK), userId(K)F )


// CREATED THE TABLES BELOW

CREATE TABLE game ( 
    gameId int NOT NULL AUTO_INCREMENT, 
    gameName varchar(255),
    PRIMARY KEY (gameId)
    );

CREATE TABLE user ( 
    userId int NOT NULL AUTO_INCREMENT, 
    userName varchar(255) NOT NULL,
    PRIMARY KEY (userId)
    );

CREATE TABLE user_to_game ( 
    gameId int NOT NULL,
    userId int NOT NULL,
    FOREIGN KEY (gameId) REFERENCES game (gameId),
    FOREIGN KEY (userId) REFERENCES user (userId)
    );