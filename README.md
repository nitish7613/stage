# Stage Project

## Tech Stack

1. NodeJs
2. NestJs
3. MongoDb
4. TypeScript

## Prerequisites

1. Your system should have Node.js (version 16) and MongoDB installed.
2. Your system should have the npm package manager.
3. Your system should have Postman to test the APIs.
4. Your system should have the NestJS CLI installed. If not, run:
   ```bash
   npm install -g @nestjs/cli
   ```

## Steps to Run This Project

1. Clone the project and navigate to the `stage` folder.
2. Run:
   ```bash
   npm install
   ```
3. Edit the `.env` file in the root directory and change the `MONGO_URI` to your local MongoDB URI.
4. Then run:
   ```bash
   npm start
   ```
## Asumptions

1. All the endpoints have proper token based authorization that will be written in middleware and from token we are identifying user and attaching userID(6643c709edc94f7295d94f9c) with request.
2. There should be some sample data of movies, tv_shows . User can only add already present movies or tv_shows in databse, otherwise it will throw error.

## API Documentation

Import the following API documentation URL in Postman to view all the API endpoints:

[API Documentation URL](https://api.postman.com/collections/11763701-58742bac-cbc6-45e7-8fe3-6603fa1530f1?access_key=PMAT-01HYEB6P3BZFDRHTSK71FSV8S4)

## Note

Caching is not used in the listing API because data is served with pagination. Caching each page would require managing too many keys in Redis, especially if records are numerous. Additionally, if there are any changes in the response, all keys would need to be purged. Implementing features such as searching and sorting in the listing would further complicate caching management, making it practically impossible.
