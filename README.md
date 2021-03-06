# HPC Reloaded
A mocked single-page-application for HPC job submission, using React, Flask and MongoDB. Styled with React-Bootstrap, deployed with Docker Compose.


### Setup

```
docker-compose up
```

Otherwise you can run each layer separately, for instance:

```
cd frontend
npm start
```

and

```
cd server
python app.py
```

for the frontend and the backend respectively. If you run each component seperately, be sure to change the endpoints properly, since in the default docker-compose configuretion they rely on enviroment variables in `config` folder.


### How it works

<p align="center">
  <img width="100%" src="https://github.com/tmscarla/hpc-reloaded/blob/main/img/screen.png">
</p>


### Other contributors
* [Giacomo Marciani](https://github.com/mgiacomo)
