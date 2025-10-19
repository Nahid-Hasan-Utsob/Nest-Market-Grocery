import React, { useEffect, useState } from "react";
import Random_tending_cards from "./Random_tending_cards/Random_tending_cards";
import Card_Button from "../../../../Components/Card_Button";

export default function Random_Tending_section({ products }) {
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
      // প্রতি 10 সেকেন্ডে seed পরিবর্তন হবে
      const intervalSeed = Math.floor(now.getTime() / 10000); // প্রতি 10s এ নতুন seed
      const shuffled = seededShuffle(products, intervalSeed);
      setDailyProducts(shuffled.slice(0, 4));
    };

    updateProducts(); // প্রথমবার load হলে
    const interval = setInterval(updateProducts, 5000); // প্রতি 10 সেকেন্ডে update হবে

    return () => clearInterval(interval);
  }, [products]);

  return (
    <section>
      <div className="">
        {dailyProducts.map((product) => (
          <Random_tending_cards key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
