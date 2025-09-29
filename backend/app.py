from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # allow requests from your React frontend

# Example project data
projects = [
    {
        "title": "Calculator App",
        "description": "A GUI calculator built with Python and Tkinter",
        "link": "https://github.com/veronicafuentesunt/portfolio"
    },
    {
        "title": "Hundi Puzzle Solver",
        "description": "Algorithmic puzzle solver in Python",
        "link": "https://github.com/veronicafuentesunt/portfolio"
    },
    {
        "title": "Portfolio Website",
        "description": "Personal site built with React and Flask",
        "link": "https://github.com/veronicafuentesunt/portfolio"
    }
]

@app.route("/projects", methods=["GET"])
def get_projects():
    return jsonify(projects)

if __name__ == "__main__":
    app.run(debug=True)