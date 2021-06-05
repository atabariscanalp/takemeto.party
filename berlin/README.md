# **Prisma / TypeGraphql Backend**

## **Get Started**

### **1.Install Dependencies**

```
npm install
```

### **2.Setup Postgresql**

- A docker-compose.yml is included for a quick start so that you do not need any prior setup. Just run `docker-compose up -d` and Postgres will be up and running on PORT 5432 with username **postgres**.

- Connect the database from bash

```
psql -U postgres
```

Create database named **takemeto_party**

```
CREATE DATABASE takemeto_party;
```

quit from psql shell

```
\q
```

- You can also connect from docker container

Get docker images which use postgres

```
docker ps -f "name=postgres"
```

Get the **CONTAINER ID** of the image and connect

```
docker exec -it <CONTAINER ID> /bin/bash
```

Repeat the steps of connecting to postgresql and creating a database

- After creating the database rename the `.env.example` file to `.env`

### **3.Setup Google Oauth Client**

- Go to [google developer console](https://console.developers.google.com) and create a oauth2 client, then replace `GOOGLE_CLIENT_ID`
  and `GOOGLE_CLIENT_SECRET` in .env with your oauth2 app credentials.

### **4.Create Database Tables**

- The last step is creating the database tables. Just run

```
npx prisma migrate dev --name init
```

- Start the server

```
npm run dev
```
