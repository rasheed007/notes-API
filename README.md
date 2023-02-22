# Note App
This is an api for a Note app

---

## Requirements
1. Users should be able to create, read, update and delete notes.
2. Users should be able to login.
3. The notes should be saved to a database.

---
## Setup
- Install NodeJS, express, body-parser, mongoose, jsonwebtoken, moment
- pull this repo
- update env with example.env

## Models
---

### User
| field  |  data_type | constraints  |
|---|---|---|
|  id |  string |  required |
|  username |  string |  required |
|  firstname | string  |  required|
|  lastname  |  string |  required  |
|  email     | string  |  required |
|  password |   string |  required  |


### Notes
| field  |  data_type | constraints  |
|---|---|---|
|  id |  string |  required |
|  created_at |  date |  required |
|  description | required 



## APIs
---

### Signup User

- Route: /signup
- Method: POST
- Body: 
```
{
  "email": "doe@example.com",
  "password": "Password1",
  "firstname": "jon",
  "lastname": "doe",
  "username": 'jon_doe",
}
```

- Responses

Success
```
{
    Status: 'True',
    user: {
        "email": "doe@example.com",
        "password": "Password1",
        "firstname": "jon",
        "lastname": "doe",
        "username": 'jon_doe",
    }
}
```
---
### Login User

- Route: /login
- Method: POST
- Body: 
```
{
  "password": "Password1",
  "username": 'jon_doe",
}
```

- Responses

Success
```
{
    Status: 'true',
    token: 'sjlkafjkldsfjsd'
}
```

---
### Create Notes

- Route: /notes
- Method: POST
- Header
    - Authorization: Bearer {token}
- Body: 
```
{
    description: {}
}
```

- Responses

```
---
### Get notes

- Route: /notes/:id
- Method: GET
- Header
    - Authorization: Bearer {token}
- Responses

```
---

### Get notes

- Route: /notes
- Method: GET
- Header:
    - Authorization: Bearer {token}
- Query params: 
    - page (default: 1)
    - per_page (default: 5)
    - note_by (default: created_at)
    - notes (options: asc | desc, default: desc)
    - created_at


## Contributor
- Rasheed Olayanju