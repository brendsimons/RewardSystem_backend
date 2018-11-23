# /taskclaims
A user can submit a claim in order to request the reward from a task.

### GET /taskclaims
Get an array with all the claims.

```json
[
    {
        "_id": "5bf27b639013132040aeb718",
        "message": "I gave the presentation \"How does Blockchain work?\"",
        "status": "pending",
        "user": {
            "_id": "5bf27b639013132040aeb718",
            "firstName": "Jan",
            "lastName": "",
            "email": "email@email.com",
            "credits": 0,
            "score": 0
        },
        "task": {
            "_id": "5bf27b639013132040aeb718",
            "name": "Nieuwe naam",
            "score": 15
        }
    },
    {
        "_id": "5bf27b639013132040aeb718",
        "message": "This is a description written by the user.",
        "status": "not-rewarded",
        "user": {
            "_id": "5bf27b639013132040aeb718",
            "firstName": "Jan",
            "lastName": "",
            "email": "email@email.com",  
            "credits": 0,
            "score": 0
        },
        "task": {
            "_id": "5bf27b639013132040aeb718",
            "name": "Nieuwe naam",
            "score": 15
        }
    },
    {
        "_id": "5bf27b639013132040aeb718",
        "message": "GIVE ME CREDITS!",
        "status": "rewarded",
        "user": {
            "_id": "5bf27b639013132040aeb718",
            "firstName": "Jan",
            "lastName": "",
            "email": "email@email.com",  
            "credits": 0,
            "score": 0
        },
        "task": {
            "_id": "5bf27b639013132040aeb718",
            "name": "Nieuwe naam",
            "score": 15
        }
    }
]
```

### GET /taskclaims/myown
Get an array with all the claims that the user you made.

```json
[
    {
        "_id": "5bf27b639013132040aeb718",
        "message": "I gave the presentation \"How does Blockchain work?\"",
        "status": "pending",
        "user": {
            "_id": "5bf27b639013132040aeb718",
            "firstName": "Jan",
            "lastName": "",
            "email": "email@email.com",
            "credits": 0,
            "score": 0
        },
        "task": {
            "_id": "5bf27b639013132040aeb718",
            "name": "Nieuwe naam",
            "score": 15
        }
    },
    {
        "_id": "5bf27b639013132040aeb718",
        "message": "This is a description written by the user.",
        "status": "not-rewarded",
        "user": {
            "_id": "5bf27b639013132040aeb718",
            "firstName": "Jan",
            "lastName": "",
            "email": "email@email.com",  
            "credits": 0,
            "score": 0
        },
        "task": {
            "_id": "5bf27b639013132040aeb718",
            "name": "Nieuwe naam",
            "score": 15
        }
    }
]
```

### POST /taskclaims
Create a new claim.

**request**
```json
{
    "task": "5bf27b639013132040aeb718",
    "message": "This is a description written by the user."
}
```
**response**
```json
{
    "_id": "5bf27b639013132040aeb718",
    "message": "This is a description written by the user.",
    "status": "pending",
    "user": {
        "_id": "5bf27b639013132040aeb718",
        "firstName": "Jan",
        "lastName": "",
        "email": "email@email.com",
        "credits": 0,
        "score": 0
    },
    "task": {
        "_id": "5bf27b639013132040aeb718",
        "name": "Nieuwe naam",
        "score": 15
    }
}
```

### GET /taskclaims/{claimId}
Get a specific claim.

```json
{
    "_id": "5bf27b639013132040aeb718",
    "message": "This is a description written by the user.",
    "status": "pending",
    "user": {
        "_id": "5bf27b639013132040aeb718",
        "firstName": "Jan",
        "lastName": "",
        "email": "email@email.com",
        "credits": 0,
        "score": 0
    },
    "task": {
        "_id": "5bf27b639013132040aeb718",
        "name": "Nieuwe naam",
        "score": 15
    }
}
```

### PUT /taskclaims/{claimId}
Update a specific claims.  
*Only send the parameters that you would like to change.*  
**Changing the status to rewarded, will automatically add the credits to the user account!**

**request**
```json
{
    "message": "This is a description written by the user.",
    "status": "rewarded"
}
```
**response**
```json
{
    "_id": "5bf27b639013132040aeb718",
    "message": "This is a description written by the user G1.",
    "status": "rewarded",
    "user": {
        "_id": "5bf27b639013132040aeb718",
        "firstName": "Jan",
        "lastName": "",
        "email": "email@email.com",
        "credits": 0,
        "score": 0
    },
    "task": {
        "_id": "5bf27b639013132040aeb718",
        "name": "Nieuwe naam",
        "score": 15
    }
}
```

### DELETE /taskclaims/{claimId}
Delete a specific task.

```json
{
    "message": "Task successfully deleted"
}
```