import React,{useState,useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import Item from './Item';
import Loader from './Loader';
import { fetchList } from "../Redux/action/getList";
const List = () => {
const state = useSelector((state) => state.list);
console.log("your state...",state);
const dispatch = useDispatch();
  return (
    <div className="listContainer">
           {state.data?state.data.map((item,index)=> <Item name={item.name} country={item.country} index={index} item={item} key={index}/> ):<Loader/>}
    </div>
  );
};


export default List;