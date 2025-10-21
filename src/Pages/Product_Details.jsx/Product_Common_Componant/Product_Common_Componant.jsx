import React from 'react'
import productImg from '../../../assets/Icon-Images/Gorton’s Beer Battered Fish Fillets.png'

export default function Product_Common_Componant({ product }) {
  const {thumbnail} =product;
  return (
    <section >
                  <div className='w-full min-w-1/3  p-3'> 
                        <img className='w-[560px]  flex justify-center items-center' src={thumbnail} alt="" />
                  </div>
    </section>
  )
}
