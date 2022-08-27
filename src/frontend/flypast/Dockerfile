FROM node:16 as builder

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build -- --configuration=production

FROM nginx:alpine
COPY --from=builder /app/dist/flypast /usr/share/nginx/html
EXPOSE 80
