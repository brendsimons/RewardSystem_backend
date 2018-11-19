# /users

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
        "email": "email@email.com"
    },
    {
        "_id": "5bf27b639013132040aeb718",
        "firstName": "Jan",
        "lastName": "",
        "score": 1250,
        "credits": 250,
        "email": "email@email.com"
    }
]
```

### POST /users
Create a new user.

**request**
```json
{
    "firstName": "Jan",
    "lastName": "",
    "email": "email@email.com"
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
    "email": "email@email.com"
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
    "email": "email@email.com"
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
    "email": "email@email.com"
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
    "email": "email@email.com"
}
```

### DELETE /users/{userId}
Delete a specific user.

```json
{
    "message": "Task successfully deleted"
}
```