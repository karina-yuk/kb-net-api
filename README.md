# kb-net-api

[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

Kb-net-api is a social meadia API. This application so far is a backend system designed to power a social networking webpage. Its functionality includes facilitating user interactions such as sharing thoughts, reacting to friends' posts, and managing connections within a friend list. It was developed using Express.js for routing, MongoDB for data storage, and Mongoose as the Object Data Modeling (ODM) tool, this API is specifically designed to handle substantial volumes of unstructured data with efficiency.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Application Sample](#application-sample)
- [Reference](#reference)
- [License](#license)
- [Questions](#questions)

## Installation

To use this application locally, please follow the steps below:

- Clone the repository to your local machine.
- Then run this command to seed and start the system.

```
npm run seed
```

- Once seeded, please go ahead and run this command to use the application:

```
node server.js
```

- Now you should be able to test out the functionality on Insomnia.

## Usage

This application is designed to be used as a backend system for a social media web. The API is built using Express.js for routing, MongoDB for data storage, and Mongoose as the Object Data Modeling (ODM) tool. It allows users to create, read, update, and delete users and thoughts from a database.

## Application Sample

Sample image of the application shown :

1. GET all users.

<img src="assets/images/GET all users.JPG" >

2. GET a single user by its `id`.

<img src="assets/images/GET users by id.JPG" >

3. POST create a new user.

<img src="assets/images/POST create user.JPG" >

4. PUT to update a user by its `id`.

<img src="assets/images/PUT update user by id.JPG">

5. DELETE a user by its `id`.

<img src="assets/images/DELETE user by id.JPG" >

6. Post to add a friend to user

<img src="assets/images/POST add a friend.JPG" >

7. DELETE to remove a friend from user

<img src="assets/images/Remove a friend.JPG" >

Click on the link to view a video demonstration of the application:

## Reference

## License

MIT license was used for this application.

## Questions

For any questions, please contact me at <karina.yukting.li@gmail.com>.
GitHub Profile: https://github.com/karina-yuk
