# MNIST_Neural_Network

A simple web app that lets you draw a digit (0–9) in your browser and uses a Convolutional Neural Network (CNN) trained on the MNIST dataset to predict what you drew.

## Features
- Trained using TensorFlow/Keras
- CNN with Conv2D, MaxPooling, Dropout, and Dense layers
- Frontend canvas for drawing digits
- Flask backend to serve predictions

## How to Run
1. Clone the repo
2. Install dependencies: `pip install -r requirements.txt`
3. Run the app: `python app.py`
4. Open your browser at the link displayed in the terminal

## Model
- Input: 28x28 grayscale image
- Output: Probabilities for digits 0–9

---

*Made by Sam Hagen*
