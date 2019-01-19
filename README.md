# BELATIKA

Project : belatika.com website refactoring

## INSTALL

Recommended php version : 7.2 

- clone from github
- run composer install
- set your database informations in .env file : line 34
- run php bin/console doctrine:database:create
- run php bin/console doctrine:schema:update --force

Load dataset for your database :

- run php bin/console doctrine:fixtures:load
- contribute :)

Regards, Asura64