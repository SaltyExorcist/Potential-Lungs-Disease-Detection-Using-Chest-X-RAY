from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from model import predict_disease
import os
import cv2

app = Flask(__name__)
CORS(app,origins=["http://localhost:5173"])
app.config['UPLOAD_FOLDER'] = r'static\files'

@app.route('/predict_disease', methods=['GET'])

def pred():
    file = request.files['file']
    file_path = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
    file.save(file_path)
    img_data=cv2.imread(file_path)      
    result = predict_disease(img_data)
    os.remove(file_path)
    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(debug=True)



