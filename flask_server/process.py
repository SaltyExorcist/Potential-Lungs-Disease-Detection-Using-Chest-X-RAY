import cv2
import numpy as np
import tensorflow as tf
from PIL import Image

def process_image(file):
    # read image file using OpenCV
    #img_data = file.read()
    #img_array = np.frombuffer(img_data, dtype=np.uint8)
    #img = cv2.imdecode(img_array, cv2.IMREAD_GRAYSCALE)
    #img = cv2.resize(img, (224, 224))
    #arr = np.asarray(img, dtype=np.float32)
    #img = tf.keras.preprocessing.image.load_img(file, target_size=(224, 224))
    #arr = tf.keras.preprocessing.image.img_to_array(img)
    img = Image.open(file)
    return img