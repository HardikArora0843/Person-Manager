# 🧾 Person API - RESTful Web Service

- List Of All Person

![ListOfAllPerson](https://github.com/user-attachments/assets/23020b0c-e9a3-427c-8400-b6cd6c832141)

---

- Person Data In MongoDB

![PersonDataInMongoDB](https://github.com/user-attachments/assets/4d63c77a-3c98-42e1-ac17-1902cbe2a6fd)

---

- Edit Person Age

![EditPersonAge](https://github.com/user-attachments/assets/60fbf3d4-f938-44c2-8f1a-9a8b3ff0b09d)

---

- Person Age Edited In MongoDB

![PersonAgeEditedInMongoDB](https://github.com/user-attachments/assets/ade95f49-40b8-417a-82ef-dd87e27d2196)

---

- Add New Person

![AddNewPerson](https://github.com/user-attachments/assets/9728019d-12d0-4137-8c62-a61d795182e9)

---

- Person Added In MongoDB

![PersonAddedInMongoDB](https://github.com/user-attachments/assets/27aad5a2-9a05-4a29-805d-57b65e0f4db0)

---

- Person Created Successfully

![PersonCreated](https://github.com/user-attachments/assets/381b6569-fa36-422f-b6ae-e6601400dc46)


---

- Delete Person 

![DeletePerson_1](https://github.com/user-attachments/assets/38a41911-63ba-4c36-8cbf-2ec7f126b9a7)



![DeletePerson_2](https://github.com/user-attachments/assets/dfd0009a-1402-46d4-9db8-44906169b7f3)


---

- Person Deleted In MongoDB

![PersonDeletedInMongoDB](https://github.com/user-attachments/assets/1e2f4435-023a-4191-b5ea-3c7330ddda2b)


---

- Person Deleted Successfully

![PersonDeleted](https://github.com/user-attachments/assets/05d5e931-88ad-4785-b140-011f8b27a893)

---

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

