# A2O Test Web

This project is the Test Web for the Selection Process A2O Dev - Web App Developer, built with Angular for the frontend and Django for the backend. Docker is used for containerization to make the deployment process easier and more consistent.

## Prerequisites

- Docker
- Docker Compose

## Getting Started

Follow these steps to set up and run the application.

### 1. Clone the Repository

```bash
git clone <repository-url>
cd <repository-folder>
```
### 2. Build and Start the Containers
Run the following command to build and start the containers:

```bash
docker-compose up --build
```
This command will:

-Build the Docker images for both the frontend and backend services.
-Start the containers.

### 3. Access the Application
Frontend: Open your browser and go to http://localhost/8080. This should display your Angular application.
Backend API: The API can be accessed at http://localhost:8000.

### 4. Stopping the Application
To stop the running containers, press CTRL + C in the terminal where the containers are running or run:

```bash
docker-compose down
```

This command stops and removes all containers defined in the docker-compose.yml file.


### Copyright
© Gustavo Alejandro Sanchez Cabrera 2024. All rights reserved.