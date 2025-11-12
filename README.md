# Run Backend 

To build (needs to be on Dockerfile path): 

`docker build -t backend-proj .`

To instantiate the first time: 

`docker run --name webserver-backend --network db-webserver-network -p 3000:3000 backend-proj:latest`

To start and stop said image:

`docker stop webserver-backend` && `docker start webserver-backend`

# Run Frontend

To build (needs to be on Dockerfile path): 

`docker build -t frontend-proj .`

To instantiate the first time: 

 `docker run --name webserver-frontend -d -p 8080:80 frontend-proj:latest`  

 To start and stop said image:

`docker stop webserver-frontend` && `docker start webserver-frontend`

# Run Database

To build (needs to be on Dockerfile path):

`docker build -t database-proj .`

To instantiate the first time: 

`docker run --name webserver-db --network db-webserver-network -d webserver-db:latest`

To start and stop said image:

`docker stop webserver-db` && `docker start webserver-db`