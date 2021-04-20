import React, { useState } from 'react';
import './App.css';

const initialProductList = [
  { id: 1, name: 'Luca', price: 50, quantity: 1 },
  { id: 2, name: 'Okan', price: 75, quantity: 2 },
  { id: 3, name: 'Johanna', price: 20, quantity: 5 },
  { id: 4, name: 'Feras', price: 20, quantity: 5 },
  { id: 5, name: 'Eugeniu', price: 20, quantity: 5 },
];

function App() {
  const [products, setProducts] = useState(initialProductList);
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [quantity, setQuantity] = useState(
    products.map((product) => product.quantity)
  );
  const addProduct = (e) => {
    e.preventDefault();
    const newProducts = [...products];

    const newProduct = {
      id: products.length + 1,
      name: inputValue1,
      price: inputValue2,
      quantity: 1,
    };
    newProducts.push(newProduct);
    console.log(newProduct);
    setProducts(newProducts);
    setInputValue1('');
    setInputValue2('');
  };
  return (
    <div className="App">
      <h1>Group nr 3</h1>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Price total</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              product.quantity > 0 && (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>
                    <input
                      type="number"
                      onChange={(e) => {
                        setQuantity([
                          ...quantity,
                          (product.quantity = e.target.value),
                        ]);
                        return product.quantity <= 0 &&
                          window.confirm(
                            'Are you sure you want to remove this product?'
                          )
                          ? setQuantity([
                              ...quantity,
                              (product.quantity = e.target.value),
                            ])
                          : setQuantity([
                              ...quantity,
                              (product.quantity =
                                e.target.value <= 0 ? 1 : e.target.value),
                            ]);
                      }}
                      value={product.quantity}
                    />
                  </td>
                  <td>{product.price * product.quantity}</td>
                </tr>
              )
            );
          })}
        </tbody>
      </table>
      <p>
        The total is: {''}
        {products.reduce((acc, val) => (acc += val.price * val.quantity), 0)}
      </p>
      <form onSubmit={addProduct}>
        <h2>Add a product</h2>
        <label>Name </label>
        <input
          className="field"
          type="text"
          placeholder="Name"
          value={inputValue1}
          onChange={(e) => setInputValue1(e.target.value)}
        />
        <br />
        <br />
        <label>Price </label>
        <input
          className="field"
          type="text"
          placeholder="Price"
          value={inputValue2}
          onChange={(e) => setInputValue2(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default App;
