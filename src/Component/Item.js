import React, { useState, useEffect,useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useClickAnimation } from "./useClickAnimation";
import { fetchList ,removeItem} from "../Redux/action/getList";
const Item = (props) => {
  const {name, country,item,key} = props;
  const cardRef = useRef();
  const state = useSelector((state) => state.list);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Redirecthandler =(data)=>{
    navigate('/details', { state: data, replace: true });
  }
const removeHandler =() =>{
    setTimeout(()=>{
        dispatch(removeItem(item));
    },1000)
}
  useClickAnimation(cardRef, {
    color: "#007e9e"
  });

  return (
    <div className="itemCard"  key={key}>
     <div className="listitemContainer">
        <p>{name}</p>
        <small className="item-name-country">{country}</small>
        <small className="detail-link"  onClick={()=>Redirecthandler(item)}>Go to details</small>
    </div>
     <button class="close-button" data-close  onClick={()=>removeHandler(item)}  ref={cardRef}>X</button>
  </div>
  );
};

export default Item;
