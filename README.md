<b>PROJECT OVERVIEW</b>
This API provides basic user management functionality with the following features:
- Create new user records
- Retrieve user data (single or multiple users)
- Update existing user information
- Delete users

<b>SETUP INSTRUCTIONS</b>
Prerequisites
-Node JS
-XAMPP

Installation
1. Clone the repository url
2. In the terminal, enter "npm install"
3. Create a database in the mysql using XAMPP
   -Open XAMPP
   -Start APACHE and MYSQL
   -Click Admin on the MYSQL
   -Create database named "user_management_db"\
6. Update the credentials in the data-source.ts file
5. Start the express server by typing "npm run dev"

<b>API DOCUMENTATION</b>
base URL = http://localhost:3000
GET /users        = GET ALL
GET /users/:id    = GET ONE BY ID
POST /users       = CREATE ONE
DELETE /users/:id = DELETE ONE BY ID

<b>TESTING</b>
1. Open Thunder Client or PostMan
2. Create new http request
   
FOR GET ALL USERS API
1. Input "http://localhost:3000/users" in the bar
2. ENSURE the request type is GET
3. Send Request

FOR GET ONE BY ID API
1. Input "http://localhost:3000/users/{id}" in the bar
2. Change the {id} to the preferred ID
3. ENSURE the request type is GET
4. Send Request

FOR CREATE ONE
1. Input "http://localhost:3000/users" in the bar
2. In the body tab, pick JSON format, this might differ depending on the HTTP Request App
3. Add an object with name,email,password (e.g {"name" : "marlou", "email" : "marlou@gmail.com", "password" : "123"})
4. ENSURE the request type is POST
5. Send Request

FOR DELETE ONE
1. Input "http://localhost:3000/users/{id}" in the bar
2. Change the {id} to the preferred ID
3. ENSURE the request type is DELETE
4. Send Request
