import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifCollection } from "./components/GifCollection";

export const GifApp = () => {
  const [categories, setCategories] = useState([]);

  //   const handleApp = ()=>{
  //       setCategories(["power ranger",...categories,]);
  //   }

  return (
    <>
      <h2>GifApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      {/* <button onClick={handleApp}>Agregar</button> */}
      <ol>
        {categories.map((category) => (
          <GifCollection category={category} key={category}/>
        ))}
      </ol>
    </>
  );
};
