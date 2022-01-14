import React from "react";
import { useFetcheGif } from "../hooks/useFetchGifs";

import { GifCollectionItem } from "./GifCollectionItem";

export const GifCollection = ({ category }) => {
  const { data:img, loading } = useFetcheGif(category); 
  return (
    <>
      <h4>{category}</h4>
      {loading && <p className="animate__animated animate__flash">loading..</p>}
      <div className="card-collec ">
        {img.map((img  ) => (
          <GifCollectionItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
