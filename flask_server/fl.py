from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from model import predict_disease
from process import process_image
import os
import numpy as np
import cv2
from PIL import Image

app = Flask(__name__)
CORS(app,origins=["http://localhost:5173"])
app.config['UPLOAD_FOLDER'] = 'F:\CODING\React\project-app\models'

@app.route('/predict_disease', methods=['POST'])

def pred():
    file = request.files['file']
    img=Image.open(file)
    #img = process_image(file)
    #img_data = file.read()
    # decode image data into NumPy array
    #img = cv2.imdecode(np.frombuffer(img_data, np.uint8), cv2.IMREAD_COLOR)
    #img=cv2.imread(img_data)
    #img=cv2.resize(224,224)
    #file_path = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
    #file.save(file_path)
    result = predict_disease(img)
    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(debug=True)
