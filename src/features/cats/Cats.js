import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCats } from "./catsSlice";

function Cats() {
const catPics= useSelector(state=>state.entities);
const dispatch= useDispatch();

console.log(catPics)

useEffect(()=>{
  dispatch(fetchCats());
}, []);


  return (
    <div>
      <h1>CatBook</h1>
      {/* add CatList component here */}
    </div>
  );
}

export default Cats;
