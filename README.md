# Expense Management Application
## Overview

This is a full-stack application for managing expenses. The backend is built with Java Spring Boot, and the frontend is developed using Angular. The application allows users to log in, view, add, and manage their expenses.

## Features

- User Authentication
- Add, Edit, and Delete Expenses
- View Expense Reports
- Secure session management with HttpSession
- Integration with Chart.js for data visualization
## Technologies Used
### Backend

- Java Spring Boot
- Spring Data JPA
- H2 Database (for development)
- Maven

### Frontend

- Angular
- Angular Material
- HttpClientModule
- Chart.js

## Getting Started

### Prerequisites

- Java 11+
- Node.js 14+
- Angular CLI

### Installation

#### Backend Setup

1. Clone the repository:
    git clone https://github.com/yourusername/expense-management-app.git
    cd expense-management-app/backend

2. Build the project using Maven:

    mvn clean install

3. Run the Spring Boot application:

    mvn spring-boot:run

   The backend server will start on `http://localhost:8080`.

#### Frontend Setup

1. Navigate to the frontend directory:

    cd ../frontend

2. Install the dependencies:
    npm install


3. Run the Angular application:
    ng serve

   The frontend server will start on `http://localhost:4200`.

### Configuration

#### CORS Configuration

The backend has been configured to allow CORS requests from `http://localhost:4200`. You can find this configuration in `src/main/java/com/example/config/WebConfig.java`.

### Usage

1. Open a browser and navigate to `http://localhost:4200`.
2. Register a new user or log in with existing credentials.
3. Add, view, edit, or delete your expenses.

### Code Overview

#### Backend

- **Controller**: Handles incoming HTTP requests and routes them to appropriate services.
- **Service**: Contains business logic.
- **Repository**: Handles data persistence using Spring Data JPA.

#### Frontend

- **Components**: Handles the UI and user interactions.
- **Services**: Handles HTTP requests to the backend API.
- **Models**: Defines the data structures.
