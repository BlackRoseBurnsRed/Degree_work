import os
from flask import Flask, jsonify, request, abort
import quandl

quandl.ApiConfig.api_key = "1jJjn5RzWYyAHbS7_viP"

app = Flask(__name__)

@app.route('/')
def index():
    return "Hello, World!"

@app.route('/models', methods=['GET'])
def get_models():
    files = os.listdir('models')
    resp = jsonify({'models': files})
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp

@app.route('/getShareValues', methods=['GET'])
def get_share_values():
    share_values = quandl.get(request.args['companyCode'], start_date="2011-10-01", end_date="2012-01-01")[-1:].to_dict()
    print(share_values['Open'][list(share_values['Open'].keys())[0]])
    resp = jsonify({'companyCode': request.args['companyCode'], 'shareValues': "123"})
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp

@app.route('/todo/api/v1.0/tasks/<int:task_id>', methods=['GET'])
def get_task(task_id):
    task = tasks[task_id]
    return jsonify({'task': task})

@app.route('/todo/api/v1.0/tasks', methods=['POST'])
def create_task():
    if not request.json or not 'title' in request.json:
        abort(400)
        print(request)
    task = {
        'id': tasks[-1]['id'] + 1,
        'title': request.json['title'],
        'description': request.json.get('description', ""),
        'done': False
    }
    tasks.append(task)
    return jsonify({'task': task}), 201

if __name__ == '__main__':
    app.run(debug=True, port=8080)