# /users
A user is someone who will user the application.

### GET /users
Get an array with all the users.

```json
[
    {
        "_id": "5bf27b639013132040aeb718",
        "firstName": "Jan",
        "lastName": "",
        "score": 1250,
        "credits": 250,
        "email": "email@email.com",
        "image": "https://domain/path/G1.ext"
    },
    {
        "_id": "5bf27b639013132040aeb718",
        "firstName": "Jan",
        "lastName": "",
        "score": 1250,
        "credits": 250,
        "email": "email@email.com",
        "image": "https://domain/path/G1.ext"
    }
]
```

### POST ~~/users~~ or /users/register
Create a new user.  
`/users` is for creating a new user as `admin`, `/users/register` is for creating a new account yourself.

**request**
```json
{
    "firstName": "Jan",
    "lastName": "",
    "email": "email@email.com",
    "image": "https://domain/path/G1.ext"
}
```
**response**
```json
{
    "_id": "5bf27b639013132040aeb718",
    "firstName": "Jan",
    "lastName": "",
    "score": 0,
    "credits": 0,
    "email": "email@email.com",
    "image": "https://domain/path/G1.ext"
}
```

### POST /users/login
Login a user.  
*You can use `test@test.be` as email and `test` as password for testing.*

**request**
```json
{
    "email": "email@email.com",
    "password": "abc123"
}
```
**response**
```json
{
    "_id": "5bf27b639013132040aeb718",
    "firstName": "Jan",
    "lastName": "",
    "score": 0,
    "credits": 0,
    "email": "email@email.com",
    "image": "https://domain/path/G1.ext",
    "token": "ThisIsA_SECRET_Token"
}
```

### GET /users/{userId}
Get a specific user.

```json
{
    "_id": "5bf27b639013132040aeb718",
    "firstName": "Jan",
    "lastName": "",
    "score": 1250,
    "credits": 250,
    "email": "email@email.com",
    "image": "https://domain/path/G1.ext"
}
```

### PUT /users/{userId}
Update a specific user.  
*Only send the parameters that you would like to change.*

**request**
```json
{
    "firstName": "Jan",
    "lastName": "",
    "score": 1250,
    "credits": 250,
    "email": "email@email.com",
    "image": "https://domain/path/G1.ext"
}
```
**response**
```json
{
    "_id": "5bf27b639013132040aeb718",
    "firstName": "Jan",
    "lastName": "",
    "score": 1250,
    "credits": 250,
    "email": "email@email.com",
    "image": "https://domain/path/G1.ext"
}
```

### DELETE /users/{userId}
Delete a specific user.

```json
{
    "message": "Task successfully deleted"
}
```