from flask import Flask, render_template, request, jsonify
from tensorflow.keras.models import load_model
import numpy as np
from PIL import Image
import base64
import io
from PIL import ImageOps
import matplotlib.pyplot as plt

app = Flask(__name__)

model = load_model("model/mnist_model.keras")

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json['image']
    image_data = base64.b64decode(data.split(',')[1])
    
    image = Image.open(io.BytesIO(image_data)).convert('L')
    
    image = ImageOps.invert(image)
    
    image = image.resize((28, 28))
    image = ImageOps.autocontrast(image)

    img_array = np.array(image).astype("float32") / 255.0
    img_array = img_array.reshape(1, 28, 28, 1)

    prediction = model.predict(img_array)
    for i, p in enumerate(prediction[0]):
      print(f"{i}: {p:.3f}")


    prediction = model.predict(img_array)
    predicted_class = int(np.argmax(prediction))

    return jsonify({'digit': predicted_class})

if __name__ == '__main__':
    app.run(debug=True)