# REST API v0.0.1



- [Name](#name)
	- [Verify Name Query Parameter](#verify-name-query-parameter)
	


# Name

## Verify Name Query Parameter

<p>Verifies that name query param is not empty</p>

	GET /


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| name			| String			|  <p>Some name.</p>							|

### Success Response

Success-Response:

```
HTTP/1.1 200 OK
{
  "success": true
}
```
### Error Response

Error-Response:

```
HTTP/1.1 400 Bad Request
{
  "text": "Name cant be empty"
}
```

