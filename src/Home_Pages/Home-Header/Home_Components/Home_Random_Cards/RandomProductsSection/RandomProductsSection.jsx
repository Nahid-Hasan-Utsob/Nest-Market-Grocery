import React, { useEffect, useState } from "react";
import Home_Random_Cards from "../Home_Random_Cards";
import Card_Button from "../../../../../Components/Card_Button";
export default function RandomProductsSection({ products }) {
  const [dailyProducts, setDailyProducts] = useState([]);

  
  useEffect(() => {
    if (!products || products.length === 0) return;

    // Shuffle function
    function seededShuffle(array, seed) {
      const result = [...array];
      let random = seed;
      for (let i = result.length - 1; i > 0; i--) {
        random = (random * 9301 + 49297) % 233280;
        const j = Math.floor((random / 233280) * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
      }
      return result;
    }

    const updateProducts = () => {
      const now = new Date();
      // প্রতি 10 মিনিটকে interval হিসাব করি
      const intervalSeed = Math.floor(
        (now.getHours() * 60 + now.getMinutes()) / 10
      );
      const shuffled = seededShuffle(products, intervalSeed);
      setDailyProducts(shuffled.slice(0, 3));
    };

    updateProducts(); // প্রথমবার load হলে
    const interval = setInterval(updateProducts, 1000 * 60 * 5); // প্রতি 10 মিনিটে update

    return () => clearInterval(interval);
  }, [products]);

  const banners = [
    {
      img: `https://cdn.pixabay.com/photo/2023/12/15/18/07/bean-8451254_1280.jpg`,
      title: `Bring nature into your home`,
      button: "Shop Now",
    },
  ];

  return (
    <section>
      <div className="lg:py-4">
        <p className="menu-text-color lg:text-3xl text-xl font-bold quicksand-regular">
          Today Best Selling Products
        </p>
      </div>
      <div className="flex justify-around items-center gap-7 h-full">
        <div className="h-[400px] mr-2 hidden lg:block">
          {banners.map((item, index) => (
            <div
              key={index}
              className="relative h-full rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0  group-hover:bg-black/20 transition-all duration-300"></div>

              {/* Text + Button */}
              <div className="quicksand-regular text-2xl  w-2/3 font-bold absolute inset-0 flex flex-col justify-center items-start  px-8 z-10">
                <h2 className="text-5xl font-bold mb-3 leading-snug menu-text-color">
                  {item.title}
                </h2>
                <Card_Button text="Shop Now" className={"mt-3"}></Card_Button>
              </div>
            </div>
          ))}
        </div>
        <div className="grid  grid-cols-3 gap-2 lg:gap-5 items-center lg:justify-center justify-between w-full">
          {dailyProducts.map((product) => (
            <Home_Random_Cards key={product.id} product={product} />
          ))}
        </div>

          


      </div>
    </section>
  );
}
