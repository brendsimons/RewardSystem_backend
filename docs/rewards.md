# /rewards
A reward is something that the user can buy with the credits that he earned.

### GET /rewards
Get an array with all the rewards.

```json
[
    {
        "_id": "5bf27b639013132040aeb718",
        "name": "Bak bier",
        "score": 10,
        "image": "https://domain/path/file.ext"
    },
    {
        "_id": "5bf27b639013132040aeb718",
        "name": "Bol.com bon (25 euro)",
        "score": 25,
        "image": "https://domain/path/file.ext"
    }
]
```

### POST /rewards
Create a new reward.

**request**
```json
{
    "name": "Bol.com bon (25 euro)",
    "score": 25,
    "image": "https://domain/path/file.ext"
}
```
**response**
```json
{
    "_id": "5bf27b639013132040aeb718",
    "name": "Bol.com bon (25 euro)",
    "score": 25,
    "image": "https://domain/path/file.ext"
}
```

### GET /rewards/{rewardId}
Get a specific reward.

```json
{
    "_id": "5bf27b639013132040aeb718",
    "name": "Bol.com bon (25 euro)",
    "score": 25,
    "image": "https://domain/path/file.ext"
}
```

### PUT /rewards/{rewardId}
Update a specific reward.  
*Only send the parameters that you would like to change.*

**request**
```json
{
    "name": "Nieuwe naam",
    "score": 30,
    "image": "https://domain/path/file.ext"
}
```
**response**
```json
{
    "_id": "5bf27b639013132040aeb718",
    "name": "Nieuwe naam",
    "score": 30,
    "image": "https://domain/path/file.ext"
}
```

### DELETE /rewards/{rewardId}
Delete a specific reward.

```json
{
    "message": "Task successfully deleted"
}
```