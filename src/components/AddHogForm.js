import React, { useState } from 'react';

function AddHogForm({ onAddHog }) {
  const [formData, setFormData] = useState({
    name: '',
    specialty: '',
    greased: false,
    weight: '',
    'highest medal achieved': '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddHog(formData);
    setFormData({
      name: '',
      specialty: '',
      greased: false,
      weight: '',
      'highest medal achieved': '',
      image: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <input name="specialty" value={formData.specialty} onChange={handleChange} placeholder="Specialty" />
      <label>
        Greased
        <input type="checkbox" name="greased" checked={formData.greased} onChange={handleChange} />
      </label>
      <input name="weight" value={formData.weight} onChange={handleChange} placeholder="Weight" />
      <input name="highest medal achieved" value={formData['highest medal achieved']} onChange={handleChange} placeholder="Medal" />
      <input name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" />
      <button type="submit">Add Hog</button>
    </form>
  );
}

export default AddHogForm;
