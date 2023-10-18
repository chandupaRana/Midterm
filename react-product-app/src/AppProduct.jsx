import React, { useState } from 'react';

function AddProduct() {
  const [productData, setProductData] = useState({
    productName: '',
    productPrice: '',
    productDescription: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(productData));
    console.log(productData);
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="productName"
            value={productData.productName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="text"
            name="productPrice"
            value={productData.productPrice}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="productDescription"
            value={productData.productDescription}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Quantity:
          <textarea
            name="productQuantity"
            value={productData.productDescription}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Price:
          <textarea
            name="productCategory"
            value={productData.productDescription}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddProduct;
