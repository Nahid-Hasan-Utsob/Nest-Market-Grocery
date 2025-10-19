import React, { useEffect, useState } from "react";
import Home_Random_Cards from "../Home_Random_Cards";


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

  return (
    <section className=" mx-auto ">
      <h2 className="text-2xl font-semibold mb-6">Random Picks</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 items-center justify-center">
        {dailyProducts.map((product) => (
          <Home_Random_Cards key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
