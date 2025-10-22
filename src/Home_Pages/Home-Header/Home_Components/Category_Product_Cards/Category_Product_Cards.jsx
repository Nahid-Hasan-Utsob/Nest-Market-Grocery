import React, { useEffect, useState } from 'react'
import Category_Product_Card from '../Category_Product_Card/Category_Product_Card'
import img1 from '../../../../assets/Icon-Images/alt (1).png'
import img2 from '../../../../assets/Icon-Images/alt (2).png'
import img3 from '../../../../assets/Icon-Images/alt (3).png'
import img4 from '../../../../assets/Icon-Images/alt (4).png'
import img5 from '../../../../assets/Icon-Images/alt (5).png'
import img6 from '../../../../assets/Icon-Images/alt (6).png'
export default function Category_Product_Cards() {

const categorie = [
  {
    name: "Beauty",
    url: img1
  },
  {
    name: "Fragrances",
    url: img2
  },
  {
    name: "Furniture",
    url: img3
  },
  {
    name: "Groceries",
    url: img4
  },
  {
    name: " Decoration",
    url: img5
  },
  {
    name: "Accessories",
    url: img6
  }
];


  // console.log(categories);
  
  return (
    <section className='mt-4 flex items-center justify-around gap-7'>
      {categorie.slice(0, 6).map((cat, index) => (
        <Category_Product_Card key={index} category={cat} />
      ))}
    </section>
  )
}
