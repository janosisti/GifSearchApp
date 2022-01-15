
import { useState, useEffect } from "react";
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
