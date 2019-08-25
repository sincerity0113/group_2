-- Drops the emotions if it exists currently --
DROP DATABASE IF EXISTS db_emotions;
-- Creates the "emotions" database --
CREATE DATABASE db_emotions;


npx sequelize-cli model:generate --name user_emojis --attributes user_id:integer,emoji_id:integer