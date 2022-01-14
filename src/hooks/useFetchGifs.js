import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { AddCategory } from "../components/AddCategory";
import { getGifs } from "../helpers/getGifs";

export const useFetcheGif = (category) => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then((Images) => {
      setstate({
        data: Images,
        loading: false,
      });
    });
  }, [category]);


  return state; //{data:[], loading: true}
};
