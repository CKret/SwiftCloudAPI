# SwiftCloud API

A fabulous API to settle your cravings for Taylor Swift music statistics!

### Hosted API
SwiftCloud API is hosted by the author for your convenience.
You may access it through https://swiftcloud.ckret.net/swagger.

If you feel the urge to run your own **SwiftCloud API** then these are the necessary steps you must take:

### Prerequisits

 - MSSQL Server
 - Docker (if hosting in Docker Container)

### Instructions for running SwiftCloud API locally

 1. Clone the repo from https://github.com/CKret/SwiftCloudAPI.git
 2. Create a database on your MSSQL Server instance.
 3. Create a database user who has full access to the database.
 4. Modify the **/.env** file with the correct values:
    - PORT=6220
    - DBUSER=**[YOUR_DB_USER]**
    - DBPASSWORD=**[YOUR_DB_USER_PASSWORD]**
    - DBSERVER=**[YOUR_DB_SERVER_IP_OR_HOSTNAME]**
    - DBNAME=**[NAME_OF_THE_DATABASE]**
	- 
    - **note**: *if you change the **PORT** you need to change the exposed port in **Dockerfile** and host port in **swagger.json** as well. You need to run* **npm run swagger-autogen** *after to update the endpoints.*
 5. Install modules:
    - npm install
 6. Run the application (this will create the tables):
    - npm run dev
 7. Now you need to populate the database with relevant data. Import the .csv files from **/SwiftCloudAPI-Data.zip** into the database. I used the provided [Google Sheet](https://docs.google.com/spreadsheets/d/1iNGwJWu4ghwM_jP3U81SRU9oneYqN4DTjW7j9t3lMh8/edit) and wrote an importer but you can manually insert the data instead.
 8. If you want to run this in docker then build an image with the provided **Dockerfile** or use the provided **docker-compose.yml** file alternatively pull the image from **DockerHub** with **docker pull ckret/swiftcloudapi**.

Access Swagger http://localhost:6220/swagger and play around.

### Tests
The are some tests in the project which can be run using **jest**. You can run them in Visual Studio Code using Jest Test Explorer or manually by issuing the command:
 - npm run test

### Next exciting thing!
The most important step now is that we create a frontend to showcase the API and what fantastic things it can do.

Now when we have the basics of the API the next thing would be to expand this with even more user data.
Marketing needs to get the vibe of the community so we know what the users want.
Then we can create very precise and fun queries.
