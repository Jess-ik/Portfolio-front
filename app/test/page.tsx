// pages/items.js
"use client"
import React, { useState } from 'react';
import Filtertest from '../components/Filter';

const items = [
  { id: 1, name: 'Item 1', category: 'Category A' },
  { id: 2, name: 'Item 2', category: 'Category B' },
  // Add more items here
];

const ItemsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Filter items based on the selected category
  const filteredItems = selectedCategory === 'all' ? items : items.filter((item) => item.category === selectedCategory);

  // Get unique categories for the filter dropdown
  const categories = ['all', ...new Set(items.map((item) => item.category))];

  return (
    <div>
      <h1>Items</h1>
      <Filtertest categories={categories} selectedCategory={selectedCategory} onChange={handleCategoryChange} />
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemsPage;
