# landy

### yarn seed
Insert some data into a few tables by default.
http://docs.sequelizejs.com/manual/tutorial/migrations.html#running-migrations


### Sequelize commands
- Create a model
node_modules/.bin/sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string

- Create a seed
node_modules/.bin/sequelize seed:generate --name demo-user