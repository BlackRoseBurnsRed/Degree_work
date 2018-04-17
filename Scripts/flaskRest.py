from flask import Flask, jsonify, request, abort
import quandl
import datetime


quandl.ApiConfig.api_key = "1jJjn5RzWYyAHbS7_viP"

app = Flask(__name__)

tasks = [
    {
        'id': 1,
        'title': u'Buy groceries',
        'description': u'Milk, Cheese, Pizza, Fruit, Tylenol',
        'done': False
    },
    {
        'id': 2,
        'title': u'Learn Python',
        'description': u'Need to find a good Python tutorial on the web',
        'done': False
    }
]

@app.route('/')
def index():
    return "Hello, World!"

@app.route('/aapl', methods=['GET'])
def get_aapl():
    aapl = quandl.get("WIKI/AAPL", start_date="2006-10-01", end_date="2012-01-01")
    close_last_ten = (aapl['Close'][-10:]).to_dict()
    data = []
    for a in close_last_ten.items():
        print(a[0].to_datetime().date())
        data.append({a[0].to_datetime().date().strftime('%m/%d/%Y'): a[1]})

    print(data)
    return jsonify({'aapl_close': data})

@app.route('/todo/api/v1.0/tasks', methods=['GET'])
def get_tasks():
    return jsonify({'tasks': tasks})

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
    app.run(debug=True, port=int("8080"))