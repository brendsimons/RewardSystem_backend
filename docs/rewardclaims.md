# /rewardclaims
Buying a reward in the shop will create a *reward claim*.

### GET /rewardclaims
Get an array with all the reward claims.

```json
[
    {
        "_id": "5bf27b639013132040aeb718",
        "userId": "5bf27b639013132040aeb718",
        "rewardId": "5bf27b639013132040aeb718",
        "status": "pending"
    },
    {
        "_id": "5bf27b639013132040aeb718",
        "userId": "5bf27b639013132040aeb718",
        "rewardId": "5bf27b639013132040aeb718",
        "status": "bought"
    },
    {
        "_id": "5bf27b639013132040aeb718",
        "userId": "5bf27b639013132040aeb718",
        "rewardId": "5bf27b639013132040aeb718",
        "status": "done"
    }
]
```

### POST /rewardclaims
Create a new claim.

**request**
```json
{
    "rewardId": "5bf27b639013132040aeb718"
}
```
**response**
```json
{
    "_id": "5bf27b639013132040aeb718",
    "userId": "5bf27b639013132040aeb718",
    "rewardId": "5bf27b639013132040aeb718",
    "status": "pending"
}
```

### GET /rewardclaims/{claimId}
Get a specific claim.

```json
{
    "_id": "5bf27b639013132040aeb718",
    "userId": "5bf27b639013132040aeb718",
    "rewardId": "5bf27b639013132040aeb718",
    "status": "pending"
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
    "userId": "5bf27b639013132040aeb718",
    "taskId": "5bf27b639013132000G10018",
    "status": "rewarded"
}
```

### DELETE /rewardclaims/{claimId}
Delete a specific task.

```json
{
    "message": "Task successfully deleted"
}
```