# Library Core

This is the core of a virtual library, created with NodeJS.

## Technologies

1. NodeJS
2. ExpressJS
3. Sequelize
4. PostgreSQL

## Steps

1. Clone
2. Move to ``` cd library-core ```
3. Run ``` npm i && npm run watch ```
4. Make sure you have PostgreSQL running on your machine.
5. Create your library database with PgAdmin or as you wish.
6. Update the file that is ``` src/config/config.json ``` and enter your credentials.
7. Move to ``` cd src ```
8. To create the tables use the migrations.
9. Run ``` sequelize db:migrate ```
10. To add sample data use the seeders, run this command several times in your console:
11. Run ``` sequelize db:seed:all ```

## NOTE


If he came this far it is because we are ready.

You can consult the Documentation at this URL:

[Library Docs](https://documenter.getpostman.com/view/7831505/SVSNKnRq?version=latest#intro)
