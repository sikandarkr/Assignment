import React,{useState,useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import Item from './Item';
import { fetchList } from "../Redux/action/getList";
import Sort from './Sort';
import SearchField from './Search';
const PageHeader = () => {
const state = useSelector((state) => state.list);
const dispatch = useDispatch();
  return (
    <div className="pageHeaderContainer">
       <SearchField placeholder=" Search key" inputType="text"/>
       <Sort/>
    </div>
  );
};


export default PageHeader;