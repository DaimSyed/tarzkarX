# Tarzkar

### Pre-requisite

* Python 3.7 (https://www.python.org/downloads/)
* Pipenv (pip install pipenv)
### API Documentation
* Please import \tarzkarX\backend\store\tarzkar.postman_collection.json into Postman
* With the server running send login request. after that you will be able to use API
* You might have set domain name variable in postman environment

### CDN
* Copy store/cdn folder to the same directory where git repo is cloned, cdn folder location must be similar to following dir structure
```angular2html
...
│
└───tarzkarX
│     │
│     └───backend
│     └───frontend
│     └───README.md
│
└───cdn
      │
      └───product
             └───media 
```

### Setting Up Backend

Follow below steps to setup project from scratch.

* Run following command inside `<project directory>/backend`. This would create a virtualenv for project and install all dependencies.
```pipenv install --ignore-pipfile```

* Run following command to activate virtualenv created in above step. This virtualenv can be exited by ```exit``` command, once activated.
```pipenv shell```

* Run following command to apply any pending migrations (database changes).
```python manage.py migrate```

* Run following command to start server and deploy project.
```python manage.py runserver```

### Setting Up Frontend

Follow steps below to setup project from scratch.


### Credentials

#### Admin Account:
email: admin@tarzkar.com
password: Test@1

email: Test@one.com
password: Test@1

#### Client Account
email: user@tarzkar.com
password: Test@1