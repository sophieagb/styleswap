from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS to allow requests from your React frontend

# Temporary in-memory cart storage
cart = []

# Route to get cart items
@app.route('/cart', methods=['GET'])
def get_cart():
    return jsonify(cart)  # Return the array directly

# Route to add an item to the cart (with duplicate prevention)
@app.route('/cart', methods=['POST'])
def add_to_cart():
    data = request.json
    required_fields = ['id', 'name', 'price', 'image', 'size', 'color']
    
    # Ensure all fields are present
    if all(field in data for field in required_fields):
        # Prevent duplicate items
        if not any(item['id'] == data['id'] for item in cart):
            cart.append(data)
            return jsonify({'message': 'Item added to cart', 'cart': cart}), 201
        else:
            return jsonify({'message': 'Item already in cart', 'cart': cart}), 200
    return jsonify({'error': 'Invalid item data'}), 400

# Route to clear the cart
@app.route('/cart', methods=['DELETE'])
def clear_cart():
    cart.clear()
    return jsonify({'message': 'Cart cleared'}), 200

if __name__ == '__main__':
    app.run(debug=True)
