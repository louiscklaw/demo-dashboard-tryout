# demo-dashboard-tryout

school-management-system-tryout

## WITH-FRONTEND-BACKEND-TRYOUT

### LINKS

- [http://localhost:3001/authentication/login](http://localhost:3001/authentication/login)

### REFERENCES

### CODE

### TEST

```bash
# for backend, goto backend container
$ docker compose exec -it node-app bash

$ npm run test:watch
```

```bash
# for frontend,
TBA
```

### DOCS

- [http://localhost:3000/v1/docs/](http://localhost:3000/v1/docs/)

### Directory Structure

- frontend
  - source code for frontend
- backend
  - source code for backend
- volumes
  - persistent storage for docker accordingly

### To start development

```bash
$ npm run docker:dev

# NOTE: if you want to see the status of frontend
$ docker compose logs -f frontend

# NOTE: if you want to seed database
# run on host
$ cd backend
$ npm run seed

# browse http://localhost:3000/v1/docs/ for swagger
# browse http://localhost:3001 for client side
# browse http://localhost:3001/browse/ for ui documentations
# browse http://localhost:8081 for ui mongo-express
```

### to start production

```bash
$ npm run docker:prod
```

### frontend

# development

```bash
$ ./up.sh

# inside docker
$ ./entry.sh

```

format

```bash
$ cd app

$ npm run watch:format

```

### parking information

所有订单|待付款|待发货 2|待收货 2|待评价|分阶段

### docker-api

to handle docker containers provisioning

### COLOR PALETTE

https://flatuicolors.com/palette/defo

### Waiting to be categorized

- to prepare frontend image

```bash
# scripts/build_frontend.sh
# on dev machine,

$ cd frontend/app
$ docker build . -t logickee/dashboard-demo-frontend
$ docker push logickee/dashboard-demo-frontend

# docker push logickee/dashboard-demo-frontend

```

### Repository

git@github.com:louiscklaw/demo-dashboard-tryout.git
