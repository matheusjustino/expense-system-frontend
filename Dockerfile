# Stage 1 - the build process
FROM node:16.13.0-alpine3.14 as builder

# Create app directory
WORKDIR /app

COPY yarn.lock ./
COPY package*.json ./

# Install app dependencies
RUN yarn install --production --frozen-lockfile

COPY . .

RUN yarn build


# Stage 2 - the production environment
FROM nginx:1.21.3-alpine

COPY ./etc/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
