import React from "react";

export default function Home_Featured({ categories }) {


  return (
    <section>
      <div className="flex items-center gap-15">
        <p className="menu-text-color text-3xl font-bold quicksand-regular">
          Featured Categories ({categories.length})
        </p>
        <div className="flex gap-6">
          {categories.map((categoryName, idx) => (
            <p
              key={idx}
              className="text-base menu-text-color quicksand-regular font-bold"
            >
              {categoryName}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
