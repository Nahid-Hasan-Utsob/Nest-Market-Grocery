import React from 'react';
import img1 from '../assets/Icon-Images/icon.png';
import img2 from '../assets/Icon-Images/hand.png';
import img3 from '../assets/Icon-Images/man.png';
import img5 from '../assets/Icon-Images/tag.png';
import img4 from '../assets/Icon-Images/parcel.png';

export default function Footer_Best_card() {
  const bestCard = [
    {
      title: 'Best prices & offers',
      subtitle: 'Orders $50 or more',
      img: img1,
    },
    {
      title: 'Great daily deal',
      subtitle: 'When you sign up',
      img: img2,
    },
    {
      title: 'Free delivery',
      subtitle: '24/7 amazing services',
      img: img3,
    },
    {
      title: 'Wide assortment',
      subtitle: 'Mega Discounts',
      img: img4,
    },
    {
      title: 'Easy returns',
      subtitle: 'Within 30 days',
      img: img5,
    },
  ];

  return (
    <section className="grid grid-cols-5 justify-around items-center my-5">
      {bestCard.map((card, index) => (
        <div key={index} className="flex  gap-5 items-center justify-start bg-white p-4 rounded-lg shadow">
          <div>
            <img src={card.img} alt={card.title} className="h-16 w-16" />
          </div>
          <div className=" mt-2">
            <p className="menu-text-color font-semibold  text-[18px] quicksand-regular">{card.title}</p>
            <p className="text-gray-500 quicksand-regular text-sm">{card.subtitle}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
