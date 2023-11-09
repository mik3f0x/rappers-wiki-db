# Rappers Wiki API

## Introduction

Rappers Wiki API is a RESTful API that uses a database pulled from Wikipedia's [List of Rappers](https://en.wikipedia.org/wiki/List_of_hip_hop_musicians). There are approximately 3,500 rappers on this list. The data was created using a Python script that pulls fields from each rapper’s Wikipedia bio infobox, and outputs to a CSV. Translating that CSV into JSON forms the database of this API.

## Data Model

Each rapper has a bio snippet which may or may not include the fields in this example:

![Jay-Z bio entry](/README_images/rapper_jayz.png?raw=true "Jay-Z bio entry")

### Special Concerns

Wikipedia is highly inconsistent with formatting and standards---many biographies have ambiguous, poorly formatted, or incomplete entries for dates and locations:

![Pepa bio with poorly formatted Date of Birth](/README_images/rapper_pepa_crappy_dob.png?raw=true "Pepa bio with poorly formatted Date of Birth")

### Date of Birth

To preserve this kind of non-user-friendly data while ensuring good functionality for the user-friendly data, I separated unusable dates into their own field

```
Date_of_Birth_incomplete
```

### Locations (Place of Birth & Origin)

Locations are searchable by an exact partial text string, but unfortunately, Wikipedia’s lack of standards for placenames means the same location might fall under a different name in different bios, e.g. “United States” vs. “U.S.” Searching by location is case-insensitive, which should help a little.

### Genre

All genres are converted to all-lowercase during seeding. Searching by genre is case-insensitive.

## Usage

- https://rapper-wiki-api-6c25ffa72432.herokuapp.com/

## API Endpoints

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

## Resources

- [Wikipedia](https://www.wikipedia.org/): [List of Rappers](https://en.wikipedia.org/wiki/List_of_hip_hop_musicians)

## Technologies Used

- [NodeJS](https://nodejs.org/) This is a cross-platform runtime environment built on Chrome's V8 JavaScript engine used in running JavaScript codes on the server. It allows for installation and managing of dependencies and communication with databases.
- [ExpressJS](https://www.expresjs.org/) This is a NodeJS web application framework.
- [MongoDB](https://www.mongodb.com/) This is a free open source NOSQL document database with scalability and flexibility. Data are stored in flexible JSON-like documents.
- [Mongoose ODM](https://mongoosejs.com/) This makes it easy to write MongoDB validation by providing a straight-forward, schema-based solution to model to application data.

## Author

- [Mike Fox](https://github.com/mik3f0x)
- [mikefox.ai](https://mikefox.ai)
