# Weather App - Kubernetes Deployment

## Overview

This project is a weather application deployed on AWS using Amazon EKS (Elastic Kubernetes Service). The backend is built with Node.js, and the frontend uses React. The application fetches weather details from the OpenWeather API and stores relevant data in a MongoDB Atlas database.

## Architecture

The project follows a 3-tier architecture:
1. **Frontend (React)**: Provides a user interface for interacting with the weather data.
2. **Backend (Node.js)**: Handles API requests, fetches weather data from OpenWeather API, and interacts with the MongoDB Atlas database.
3. **Database (MongoDB Atlas)**: Stores weather data and other relevant information.

Deployment is done via AWS infrastructure using EKS, with Docker and Kubernetes managing the containerized services.

## Prerequisites

- AWS account with access to EKS
- Docker
- kubectl
- Helm (if required)
- MongoDB Atlas cluster
- OpenWeather API key

## Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/sahajshukla/weather-app.git
cd weather-app
