# Reward System Backend

This project is the backend for the [Reward System Frontend](https://github.com/brendsimons/RewardSystem_frontend) project.

### The API
#### GET /users

```json
[
    {
        "userId": 1,
        "firstName": "Jan",
        "lastName": "",
        "score": 1250,
        "credits": 250,
        "email": "email@email.com"
    },
    {
        "userId": 2,
        "firstName": "Jan",
        "lastName": "",
        "score": 1250,
        "credits": 250,
        "email": "email@email.com"
    }
]
```

#### POST /users
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
    "userId": 1,
    "firstName": "Jan",
    "lastName": "",
    "score": 0,
    "credits": 0,
    "email": "email@email.com"
}
```