import React, { useEffect, useState } from 'react'
import Category_Product_Card from '../Category_Product_Card/Category_Product_Card'

export default function Category_Product_Cards() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then(categoryData => setCategories(categoryData))
      .catch(err => console.error(err));
  }, []);

  console.log(categories);
  
  return (
    <section className='mt-4 flex items-center justify-around gap-7'>
      {categories.slice(0, 8).map((cat, index) => (
        <Category_Product_Card key={index} category={cat} />
      ))}
    </section>
  )
}
