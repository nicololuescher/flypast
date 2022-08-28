FROM ubuntu:latest

WORKDIR /seed
COPY . .
RUN apt update && apt install -y curl
CMD ["/bin/bash", "-c", "./seed.sh"]