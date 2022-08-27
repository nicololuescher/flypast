## Dev Environment

Postgresql Docker Container:

```bash
docker run -it -p 5432:5432 -d -e POSTGRES_HOST_AUTH_METHOD=trust postgres
```