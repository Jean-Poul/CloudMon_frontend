# CloudMon - Frontend
### Developed by:
**Alexander Pihl & Jean-Poul Wilhelm Luplau Leth-Møller**

*CloudMon er udviklet over en periode fra den 1.11.2021 til den 05.01.2022, som del af den afsluttende hovedopgave på Datamatikeruddannelsen på Copenhagen Business Academy Lyngby, og tager udgangspunkt i en problemstilling, der ønskes løst, i virksomheden GovCloud.*

--- 

## Guide for using this code
1. Clone the repo to a folder of your choosing
2. Open your favorite terminal
3. Type: "npm install"
4. Type: "npm run build"
5. Type: "code ." to view the code in visual studiocode
6. Locate the settings.js file and change the URL if you desire to run the project locally. Otherwise move on to step 7.
7. Type: "npm start"

### Codes and login for test users:
    Name:        Password:
    user         popcorn
    admin        popcorn
    user_admin   popcorn

---
## Repos
[CloudMon - Frontend](https://github.com/Jean-Poul/CloudMon_frontend)

[CloudMon - Backend](https://github.com/Jean-Poul/CloudMon_backend)

---

## Deployed frontend & backend:
[https://cloudmon.surge.sh/](https://cloudmon.surge.sh/)

[https://www.jplm.dk/cloudmon/](https://www.jplm.dk/cloudmon/)

---

## Setup Files:
[SetupTestUsers](https://gist.github.com/Jean-Poul/5809e72e97be979e29daaed60ef662d1)

[SetupTestData](https://gist.github.com/Jean-Poul/c7badf890de76f6a0738e3b358a47c5f)

---

## Postman documentation:
[Postman documentation](https://documenter.getpostman.com/view/12822718/UVR5s9RN)

---

## Frontend configuration
The frontend is a single page application (SPA) written in React.

---

## Backend configuration:
**The Database**
- MySQL Database using Java Persistence API (JPA) (With some JPQL) to achieve ORM.
  
**RESTFUL Web service**
- JAX-RS to handle REST operations

**Testing**
Consisting of unit and integration tests using:
- Grizzly webserver
- Hamcrest
- JUnit
- REST-Assured

**Security**
- BCrypt plus hash/salt configurations.

**CI/CD pipeline**
- Travis configuration with github hooks - Everytime you push, travis builds and deploys
