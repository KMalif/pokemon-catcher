# Basic Express

Pokemon project:

- Express
- Joi
- Fs

---

## URL

_Server_

```
http://localhost:3000
```

---

## Global Response

_Response (500 - Internal Server Error)_

```
{
  "message": "Internal Server Error"
}
```

---

## RESTful endpoints

### GET /pokemon

> Get all pokemon

_Request Header_

```
not needed
```

_Request Body_

```
not needed
```

_Response (200)_

```
{

    "data": [
        {
            "name":"<name_pokemon>",
            "url":"<pokemon_url>:
        },
    ],

    "status": "Success"

}
```

---

### GET /pokemon/:id

> Get pokemon by ID

_Request Params_

```
/<id>
```

_Request Header_

```
not needed
```

_Request Body_

```
not needed
```

_Response (200)_

```
{

    "data": {
        <pokemon_data>
        },

    "status": "Success"

}
```

---

### GET /my-pokemon

> Get pokemon my pokemon

_Request Header_

```
not needed
```

_Request Body_

```
not needed
```

_Response (200)_

```
{

    "data": {
        "MyPokemon":[
                {
                <pokemon_data>
                },
            ]
        },

    "status": "Success"

}
```

---

### POST /catch-pokemon/:name

> Catch and save pokemon to my pokemon

_Request Params_

```
/<name>
```

_Request Header_

```
not needed
```

_Request Body_

```
not needed

```

_Response (200 - Pokemon save to your db)_

```
{
    "message": "Pokemon Catch"
}
```

_Response (200 - Pokemon not saved to your db)_

```
{
    "message": "Pokemon Run...."
}
```

_Response (404 - Data Not Found)_

```
{
    "message": "Pokemon Not Found"
}
```

---

### PUT /rename-pokemon/:id

> Update pokemon name by id

_Request Params_

```
/<id>
```

_Request Header_

```
not needed
```

_Request Body_

```
{
  "name": "<name>",
}
```

_Response (200)_

```
{
    "data": {
        <data_updatedPokemon>
    },
    "message": "Pokemon Renamed.."
}
```

_Response (400 - Validation Error)_

```
{
    "status": "Validation Failed",
    "message": "\"name\" length must be at least 3 characters long"
}
```

_Response (403 - Renamed more than 15)_

```
{
    "message": "Be a premium member to rename your Pokemon again.."
}
```

_Response (404 - Error Not Found)_

```
{
    "message": "You do not have a Pokemon with that ID."
}
```

---

### DELETE /release-pokemon/:id

> Release pokemon by id

_Request Params_

```
/<id>
```

_Request Header_

```
not needed
```

_Request Body_

```
not needed
```

_Response (200)_

```
{
    "message": "Pokemon Released.."
}
```

_Response (200)_

```
{
    "message": "Pokemon Failed to Be Released..."
}
```

_Response (404 - Error Not Found)_

```
{
    "message": "You do not have a Pokemon with that ID."
}
```

---
