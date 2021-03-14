FROM python:3

EXPOSE 7000

RUN apt-get update
RUN apt-get install -y vim lsof

WORKDIR /reactapp/server

COPY . .

RUN pip install -r requirements.txt

ENTRYPOINT python app.py & /bin/bash