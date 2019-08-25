sequelize model:create --name users --attributes username:string,password:string

sequelize model:create --name users --attributes username:string,password:string

sequelize model:create --name emojis --attributes emoji:integer,comment:string

npx sequelize-cli seed:generate --name demo-users

npx sequelize-cli seed:generate --name demo-emojis

npx sequelize-cli seed:generate --name demo-user-emojis

-- db migrate
npx sequelize-cli db:migrate

-- db drop migration
npx sequelize-cli db:migrate:undo:all

-- Seed db
npx sequelize-cli db:seed:all
npx sequelize-cli db:seed --seed 20190818165255-demo-user-emojis.js

-- undo seeding
npx sequelize-cli db:seed:undo:all