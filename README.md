# 🧾 Person API - RESTful Web Service


A RESTful **Web Service built with Node.js, Express, and MongoDB** to manage people.  
The service supports basic CRUD operations with well-structured endpoints and schema validation.

---

## ✨ Features

- **GET /person:** List all people in the database
- **POST /person:** Create a new person
- **PUT /person/:id:** Update an existing person by ID
- **DELETE /person/:id:** Delete a person by ID

Each request is routed using **Express Router** and data is stored in **MongoDB**.

---

## 🛠️ Tech Stack


![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)


- **Backend Framework:** [Node.js](https://nodejs.org/)
- **Routing & Middleware:** [Express.js](https://expressjs.com/)
- **Database:** [MongoDB](https://www.mongodb.com/)
- **Language:** JavaScript (ES6)
- **API Tool:** Postman

---

## 📁 API Endpoints

### 🔍 GET /person

Returns a list of all people in JSON format.

```json
[
  {
    "_id": "abc123",
    "name": "John Doe",
    "age": 30,
    "gender": "Male",
    "mobile": "9876543210"
  },
  
]

```

### ➕ POST /person
Creates a new person. JSON body should include:

```json
{
  "name": "Jane Smith",
  "age": 25,
  "gender": "Female",
  "mobile": "1234567890"
}


```

### 🔄 PUT /person/:id
Updates the details of a specific person

``` json

{
  "name": "Updated Name",
  "age": 40,
  "gender": "Other",
  "mobile": "9999999999"
}


```

### ❌ DELETE /person/:id
Deletes the specified person from the database.

---

## 🧬 Data Model
The Person model contains the following fields:
- name (String, Required)
- age (Number, Required)
- gender (String: Male | Female | Other)
- mobile (String, Required, Unique)

---

## 📦 Project Structure

person-api/

├── models/

│   └── person.js         # Mongoose schema for Person

├── routes/

│   └── personRoutes.js   # All REST endpoints

├── app.js                # Entry point & middleware setup

├── package.json

└── README.md


## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/HardikArora0843/Person-Manager.git
cd Person-Manager

```

### 2. Install Dependencies

```bash
npm install

```

### 3. Start MongoDB Server

- Create a cluster on MongoDB Atlas
- Get your connection string
- Update the MONGODB_URI in .env file

---

### 4. Environment Variables

```bash


PORT=3000
MONGODB_URI=mongodb+srv://<db_username>:<db_password>@cluster0.qad17pa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster

```

---

### 5. Run the App locally

```bash

npm run dev

```

> API will be live at: http://localhost:3000

---



---

## 🙌 Acknowledgments

- Node.js
- Express
- MongoDB
- Mongoose
- Postman

---

> ✨ Thank you for exploring this project!

