import React, { useState } from 'react';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    price: 0,
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = () => {
    alert(JSON.stringify(product, null, 2));
    console.log(product);
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" name="name" onChange={handleChange} />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" name="price" onChange={handleChange} />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" onChange={handleChange} />
        </div>
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
