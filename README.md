# SwiftCloud API

A fabulous API to settle your cravings for Taylor Swift music statistics!

### Prerequisits

 - MSSQL Server
 - Docker (if hosting in Docker Container)

### Instructions

 1. Clone the repo from https://github.com/CKret/SwiftCloudAPI.git
 2. Create a database on MSSQL Server.
 3. Create a user who have full access to the database.
 4. Create an **.env** file in the root of the application with the content:
PORT=6220
DBUSER=[YOUR_DB_USER]
DBPASSWORD=[YOUR_DB_USER_PASSWORD]
DBSERVER=[YOUR_DB_SERVRE_IP_OR_HOSTNAME]
DBNAME=[NAME_OF_THE_DATABASE]
 5. Install all modules:
npm install
 6. Run the application (this will create the tables):
npm run dev
 7. Now you need to populate the database with relevant data. I used the provided [Google Sheet](https://docs.google.com/spreadsheets/d/1iNGwJWu4ghwM_jP3U81SRU9oneYqN4DTjW7j9t3lMh8/edit) and wrote an importer but you can manually insert some data so you don't have emtpy tables.
 8. If you want to run this in docker then build an image with the provided Dockerfile or use the provided docker-compose.yml file.
