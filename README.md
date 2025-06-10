# 🚀 **exp-seq-auth-api**

## 🌟 **Project Description**

This project is an **API** developed using **Node.js**, **Express** and **Sequelize**. The API enables the management of **Courses** and **Review**, along with a user authentication system. Additionally, it includes filtering and pagination functionalities for more efficient queries.

## 🛠️ **Functional Requirements**

The project must fulfill the following requirements:

### **User Authentication**
- Users should be able to log in and obtain an access token.

### **Course Management**
- Create, read, update, and delete products..
- Associate products with the user who created them.

### **Comment Management**
- Create, read, update, and delete comments.
- Associate comments with a course  and a user.


## 📋 **API Structure**

### **Authentication**
- `POST /auth/login` - Authenticate a user and obtain an access token..  

### **Courses**
- `GET /courses` - List products with support for filters and pagination.
- `GET /courses/:id` - Retrieve a courses by its ID.
- `POST /courses` - Create a courses (authentication required).
- `PUT /courses/:id` - Update an existing courses (authentication required).
- `DELETE /courses/:id` - Delete a courses (authentication required).

### **Comments**
- `GET /comments` - List comments with support for filters and pagination.  
- `GET /comments/:id` - Retrieve a comment by its ID.  
- `POST /comments` - Create a new comment (authentication required).
- `PUT /comments/:id` - Update an existing comment (authentication required). 
- `DELETE /comments/:id` - Delete a comment (authentication required).  

## ⚙️ **Installation**

Follow these steps to install and run the project:
Clone this repository to your local machine.
   ```bash
   git clone <https://github.com/Ramen11001/edu-hlg-api.git>
cd <edu-hlg-api>
```
