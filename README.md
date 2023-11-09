# Rappers Wiki API

### Introduction

Rappers Wiki API is a RESTful API, that pulls from Wikipedia's [List of Rappers](https://en.wikipedia.org/wiki/List_of_hip_hop_musicians). There are approximately 3500 rappers on this list. The data was created using a Python script that pulls fields from each rapper’s bio infobox, and outputs a CSV. Translating that CSV into JSON forms the database of this API.

### Usage

- Run npm start to start the application.
- Connect to the API using Postman on port 3000.

### API Endpoints

| HTTP Verbs | Endpoints            | Action                                                                                                               |
| ---------- | -------------------- | -------------------------------------------------------------------------------------------------------------------- |
| GET        | /                    | To retrieve all rappers                                                                                              |
| GET        | /:id                 | To retrieve a single rapper by id                                                                                    |
| GET        | /name/:name          | To retrieve a single rapper by name                                                                                  |
| GET        | /genre/:genre        | To retrieve all rappers in a particular genre                                                                        |
| GET        | /location/:location  | To retrieve all rappers associated with a particular location, either by birth or origin                             |
| GET        | /year/:lower/:upper? | To retrieve all rappers born within a range of years. Entering only one year will return results for just that year. |
| POST       | /                    | To create a new rapper                                                                                               |
| PUT        | /name/:name          | To edit any info about a rapper                                                                                      |
| DELETE     | /name/:name          | To delete a single rapper                                                                                            |

### Technologies Used

- [NodeJS](https://nodejs.org/) This is a cross-platform runtime environment built on Chrome's V8 JavaScript engine used in running JavaScript codes on the server. It allows for installation and managing of dependencies and communication with databases.
- [ExpressJS](https://www.expresjs.org/) This is a NodeJS web application framework.
- [MongoDB](https://www.mongodb.com/) This is a free open source NOSQL document database with scalability and flexibility. Data are stored in flexible JSON-like documents.
- [Mongoose ODM](https://mongoosejs.com/) This makes it easy to write MongoDB validation by providing a straight-forward, schema-based solution to model to application data.

### Author

- [Mike Fox](https://github.com/mik3f0x)
- ![alt text](https://avatars.githubusercontent.com/u/143910078?v=4)
