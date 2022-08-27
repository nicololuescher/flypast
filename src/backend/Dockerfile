# syntax=docker/dockerfile:1
FROM golang:1.17 as build
WORKDIR /go/src/github.com/natrongmbh/flypast
RUN go get -d -v golang.org/x/net/html  
COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o flypast .

FROM alpine:latest  
RUN apk --no-cache add ca-certificates
WORKDIR /root/
COPY --from=build /go/src/github.com/natrongmbh/flypast/flypast ./
EXPOSE 8000
CMD ["./flypast"]