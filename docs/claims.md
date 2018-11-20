# /claims
A user can submit a claim in order to request the reward from a task.

### GET /claims
Get an array with all the claims.

```json
[
    {
        "_id": "5bf27b639013132040aeb718",
        "userId": "5bf27b639013132040aeb718",
        "taskId": "5bf27b639013132040aeb718",
        "message": "I gave the presentation \"How does Blockchain work?\"",
        "status": "pending"
    },
    {
        "_id": "5bf27b639013132040aeb718",
        "userId": "5bf27b639013132040aeb718",
        "taskId": "5bf27b639013132040aeb718",
        "message": "This is a description written by the user.",
        "status": "not-rewarded"
    },
    {
        "_id": "5bf27b639013132040aeb718",
        "userId": "5bf27b639013132040aeb718",
        "taskId": "5bf27b639013132040aeb718",
        "message": "GIVE ME CREDITS!",
        "status": "rewarded"
    }
]
```

### POST /claims
Create a new claim.

**request**
```json
{
    "taskId": "5bf27b639013132040aeb718",
    "message": "This is a description written by the user."
}
```
**response**
```json
{
    "_id": "5bf27b639013132040aeb718",
    "userId": "5bf27b639013132040aeb718",
    "taskId": "5bf27b639013132040aeb718",
    "message": "This is a description written by the user.",
    "status": "pending"
}
```

### GET /claims/{claimId}
Get a specific claim.

```json
{
    "_id": "5bf27b639013132040aeb718",
    "userId": "5bf27b639013132040aeb718",
    "taskId": "5bf27b639013132040aeb718",
    "message": "This is a description written by the user.",
    "status": "pending"
}
```

### PUT /claims/{claimId}
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
    "userId": "5bf27b639013132040aeb718",
    "taskId": "5bf27b639013132040aeb718",
    "message": "This is a description written by the user G1.",
    "status": "rewarded"
}
```

### DELETE /claims/{claimId}
Delete a specific task.

```json
{
    "message": "Task successfully deleted"
}
```