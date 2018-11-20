# /tasks
A task is something that the user can do in order to earn credits.

### GET /tasks
Get an array with all the tasks.

```json
[
    {
        "_id": "5bf27b639013132040aeb718",
        "name": "Blogpost schrijven",
        "score": 1,
    },
    {
        "_id": "5bf27b639013132040aeb718",
        "name": "Presentatie geven",
        "score": 10,
    }
]
```

### POST /tasks
Create a new task.

**request**
```json
{
    "name": "Presentatie geven",
    "score": 10,
}
```
**response**
```json
{
    "_id": "5bf27b639013132040aeb718",
    "name": "Presentatie geven",
    "score": 10,
}
```

### GET /tasks/{taskId}
Get a specific task.

```json
{
    "_id": "5bf27b639013132040aeb718",
    "name": "Groepsproject maken",
    "score": 1,
}
```

### PUT /tasks/{taskId}
Update a specific task.  
*Only send the parameters that you would like to change.*

**request**
```json
{
    "name": "Nieuwe naam",
    "score": 15,
}
```
**response**
```json
{
    "_id": "5bf27b639013132040aeb718",
    "name": "Nieuwe naam",
    "score": 15,
}
```

### DELETE /tasks/{taskId}
Delete a specific task.

```json
{
    "message": "Task successfully deleted"
}
```