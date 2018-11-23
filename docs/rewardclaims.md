# /rewardclaims
Buying a reward in the shop will create a *reward claim*.

### GET /rewardclaims
Get an array with all the reward claims.

```json
[
    {
        "_id": "5bf27b639013132040aeb718",
        "status": "pending",
        "user": {
            "_id": "5bf27b639013132040aeb718",
            "firstName": "Jan",
            "lastName": "",
            "email": "email@email.com",
            "credits": 0,
            "score": 0
        },
        "reward": {
            "_id": "5bf27b639013132040aeb718",
            "name": "Bol.com bon (25 euro)",
            "score": 25,
            "image": "https://domain/path/G1.ext"
        }
    },
    {
        "_id": "5bf27b639013132040aeb718",
        "status": "bought",
        "user": {
            "_id": "5bf27b639013132040aeb718",
            "firstName": "Jan",
            "lastName": "",
            "email": "email@email.com",
            "credits": 0,
            "score": 0
        },
        "reward": {
            "_id": "5bf27b639013132040aeb718",
            "name": "Bol.com bon (25 euro)",
            "score": 25,
            "image": "https://domain/path/G1.ext"
        }
    },
    {
        "_id": "5bf27b639013132040aeb718",
        "status": "done",
        "user": {
            "_id": "5bf27b639013132040aeb718",
            "firstName": "Jan",
            "lastName": "",
            "email": "email@email.com",
            "credits": 0,
            "score": 0
        },
        "reward": {
            "_id": "5bf27b639013132040aeb718",
            "name": "Bol.com bon (25 euro)",
            "score": 25,
            "image": "https://domain/path/G1.ext"
        }
    }
]
```

### GET /rewardclaims/myown
Get an array with all the reward claims that the user made.

```json
[
    {
        "_id": "5bf27b639013132040aeb718",
        "status": "pending",
        "user": {
            "_id": "5bf27b639013132040aeb718",
            "firstName": "Jan",
            "lastName": "",
            "email": "email@email.com",
            "credits": 0,
            "score": 0
        },
        "reward": {
            "_id": "5bf27b639013132040aeb718",
            "name": "Bol.com bon (25 euro)",
            "score": 25,
            "image": "https://domain/path/G1.ext"
        }
    },
    {
        "_id": "5bf27b639013132040aeb718",
        "status": "bought",
        "user": {
            "_id": "5bf27b639013132040aeb718",
            "firstName": "Jan",
            "lastName": "",
            "email": "email@email.com",
            "credits": 0,
            "score": 0
        },
        "reward": {
            "_id": "5bf27b639013132040aeb718",
            "name": "Bol.com bon (25 euro)",
            "score": 25,
            "image": "https://domain/path/G1.ext"
        }
    }
]
```

### POST /rewardclaims
Create a new claim.

**request**
```json
{
    "reward": "5bf27b639013132040aeb718"
}
```
**response**
```json
{
    "_id": "5bf27b639013132040aeb718",
    "status": "pending",
    "user": {
        "_id": "5bf27b639013132040aeb718",
        "firstName": "Jan",
        "lastName": "",
        "email": "email@email.com",
        "credits": 0,
        "score": 0
    },
    "reward": {
        "_id": "5bf27b639013132040aeb718",
        "name": "Bol.com bon (25 euro)",
        "score": 25,
        "image": "https://domain/path/G1.ext"
    }
}
```

### GET /rewardclaims/{claimId}
Get a specific claim.

```json
{
    "_id": "5bf27b639013132040aeb718",
    "status": "pending",
    "user": {
        "_id": "5bf27b639013132040aeb718",
        "firstName": "Jan",
        "lastName": "",
        "email": "email@email.com",
        "credits": 0,
        "score": 0
    },
    "reward": {
        "_id": "5bf27b639013132040aeb718",
        "name": "Bol.com bon (25 euro)",
        "score": 25,
        "image": "https://domain/path/G1.ext"
    }
}
```

### PUT /rewardclaims/{claimId}
Update a specific claims.  
*Only send the parameters that you would like to change.*  
**Changing the status to rewarded, will automatically remove the credits from the user account!**

**request**
```json
{
    "status": "rewarded"
}
```
**response**
```json
{
    "_id": "5bf27b639013132040aeb718",
    "status": "rewarded",
    "user": {
        "_id": "5bf27b639013132040aeb718",
        "firstName": "Jan",
        "lastName": "",
        "email": "email@email.com",
        "credits": 0,
        "score": 0
    },
    "reward": {
        "_id": "5bf27b639013132040aeb718",
        "name": "Bol.com bon (25 euro)",
        "score": 25,
        "image": "https://domain/path/G1.ext"
    }
}
```

### DELETE /rewardclaims/{claimId}
Delete a specific task.

```json
{
    "message": "Task successfully deleted"
}
```