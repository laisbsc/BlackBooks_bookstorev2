# BlackBooks_bookstorev2
Continuous Assessment 2 of the Interactive Web Applications module for sem 2 year 3 IT

This application is composed by A REST API fro creating, editing, listing and deleting a book on the BlackBooks bookstore inventory.

To accomplish such, a simple webserver was built, a backend daabase connection was configurd with MongoDB Atlas and finally buildng the model and the methods to handle the CRUD operations.

The application was deployed on Heroku and buolt using Node.js, plain Javascript ES6, Express and Mongoose. [explain what eah of those do.]

Post man was used to tet the application.

The program outputs the database records on a JSON filetype.



Ideally, you would want your front end to operate as a standalone application, requesting data from the back end, processing, and displaying it (you might hear this called “consuming an API”). The principle underpinning this is referred to as “separation of concerns”, and it states that each part of your program should operate independently, have a clear, singular purpose, and communicate via a well-defined interface. Although your front end doesn’t have to implement a framework to follow the separation of concerns principle, most frameworks encourage this architectural pattern. [from here](https://stackoverflow.blog/2020/02/03/is-it-time-for-a-front-end-framework/)


main differences between the 1st version of BB bookstre and v2.0
 - 1st version does not have a database storage application to store the data from the app, all the data is stored in XML on the actual Node file, which is quite dependent on the program itself and impedes the app from scaling at possible required times. To sort that out, version 2 has a backend connection stablished to MongoDB Atlas using a AWS cluster hosted in Ireland used a shared free tier.
 - One of Mongo's main characteristics is the fact that it's a non-relational database that stores data on a JSON format. Our old version of the program had it's data stored in XML-format (with and XSL schema) and converted into BSON (quite similar to JSON) on the run, by using the method 'xmlFileToJs' to then be shown on the HTML table. With the implementation of Mongo on V2.0, the xml conversion method will no longer be necessary, since the module called Mongoose will dictate the schema for the JSON Objects in the database. Mongoose also acts as a client for MongoDB.
 - V1.0 was built with JS ES5 and V2.0 was updated to ES6.

