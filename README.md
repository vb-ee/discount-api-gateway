# Discounting Platform API Gateway

This is the API Gateway microservice for the Discounting Platform project. It acts as a single entry point for all incoming requests and routes them to the appropriate microservices.

## Launching

### Build an image

Dev:

`docker build -t api-gateway -f Dockerfile.dev`

Prod:

`docker build -t api-gateway Dockerfile`

### Run the container

`docker run -d -p 8080:80 api-gateway`

If you want to run the entire project, please go to the [parent repository](https://github.com/vb-ee/discount-platform).
