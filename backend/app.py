from flask import Flask, request, session, jsonify

app = Flask(__name__)
app.config['SECRET_KEY'] = 'supersecretkey'  # Used for Flask session storage

# Sample Products (could be replaced with a real database)
products = [
    {"id": 1, "name": "Pink Lace Top", "price": 25.50, "image": "images/image1pg1.png"},
    {"id": 2, "name": "Black Top", "price": 35.00, "image": "images/image3pg1.png"},
    {"id": 3, "name": "Silk Maxi Skirt", "price": 48.54, "image": "images/image4pg1.png"},
    {"id": 4, "name": "Black Top", "price": 35.00, "image": "images/image2pg2.png"},
    {"id": 5, "name": "Button-Up Top", "price": 32.99, "image": "images/imagepg6.png"}
]

# Route to add an item to the cart
@app.route('/add_to_cart', methods=['POST'])
def add_to_cart():
    item_data = request.json.get('item')
    if 'cart' not in session:
        session['cart'] = []
    
    session['cart'].append(item_data)
    return jsonify({'message': f'Item {item_data["name"]} added to cart successfully!'})

# Route to view cart contents
@app.route('/cart', methods=['GET'])
def view_cart():
    cart = session.get('cart', [])
    return jsonify({'cart': cart})

# Route to clear the cart (optional)
@app.route('/clear_cart', methods=['POST'])
def clear_cart():
    session['cart'] = []
    return jsonify({'message': 'Cart cleared successfully!'})

if __name__ == '__main__':
    app.run(debug=True)
