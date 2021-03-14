from flask import Flask, jsonify, request, Response
from bson.json_util import dumps
from flask_cors import CORS, cross_origin
from pymongo import MongoClient
import os, threading, random, time


##### INITIALIZATION #####

app = Flask(__name__)
CORS(app)
client = MongoClient("mongodb://{}:{}@{}".format(os.getenv("DB_USERNAME"), os.getenv("DB_PASSWORD"), os.getenv("DB_HOSTNAME")))
db = client.reactapp_database
jobs = db.jobs

def job_lifecycle(jobs, id):
    filter = { "id": id }
    jobs.update_one(filter, { "$set": {"state": "Pending"} })
    time.sleep(3)
    jobs.update_one(filter, { "$set": {"state": "Running"} })
    time.sleep(3)
    if random.random() < 0.7:
        jobs.update_one(filter, { "$set": {"state": "Done"} })
    else:
        jobs.update_one(filter, { "$set": {"state": "Terminated"} })


##### CREATE #####

@app.route('/jobs', methods=['POST'])
@cross_origin()
def submit_job():
    request_data = request.get_json()
    jobs.insert_one(request_data)
    threading.Thread(target=job_lifecycle, args=(jobs, request_data["id"])).start()
    return Response("Job submitted", 201, mimetype='application/json')


##### READ #####

@app.route('/jobs', methods=['GET'])
@cross_origin()
def get_jobs():
    cursor = jobs.find()
    return dumps(cursor)


##### UPDATE #####

@app.route('/jobs/<int:id>', methods=['PUT'])
def update_job(id):
    request_data = request.get_json()
    filter = { "id": id }
    new_state = { "$set": {"state": request_data['state']} }
    jobs.update_one(filter, new_state)
    return Response("Job updated", status=200, mimetype='application/json')


##### DELETE #####

@app.route('/jobs/<int:id>', methods=['DELETE'])
def delete_job(id):
    filter = { "id": id }
    jobs.delete_one(filter)
    return Response("Job deleted", status=200, mimetype='application/json')


##### MAIN #####

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=os.getenv("FLASK_PORT"), debug=True)