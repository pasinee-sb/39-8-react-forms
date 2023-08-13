import React, { useState } from "react";

const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = {
    color: "",
    width: "",
    height: "",
  };

  const [formData, setFormData] = useState(INITIAL_STATE);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ ...formData });
    setFormData(INITIAL_STATE);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="color">color</label>
      <input
        id="color"
        type="text"
        name="color"
        placeholder="color"
        value={formData.color}
        onChange={handleChange}
      />
      <label htmlFor="width">width</label>
      <input
        id="width"
        type="text"
        name="width"
        placeholder="width in px"
        value={formData.width}
        onChange={handleChange}
      />
      <label htmlFor="height">height</label>
      <input
        id="height"
        type="text"
        name="height"
        placeholder="height in px"
        value={formData.height}
        onChange={handleChange}
      />
      <button>Add Item</button>
    </form>
  );
};

export default NewBoxForm;
