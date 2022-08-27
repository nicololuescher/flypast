## Dev Environment

Postgresql Docker Container:

```bash
docker run -it -p 5432:5432 -d -e POSTGRES_HOST_AUTH_METHOD=trust postgres
go run flypast.go
```

or you can docker build it

```bash
docker build -t flypast:local .
docker run -p 8000:8000 -d flypast:local
```