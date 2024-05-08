import React,{useState,useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { fetchList } from "../Redux/action/getList";
import PageHeader from "../Component/PageHeader";
import List from '../Component/List'

const ListPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchList());
 }, [])
  return (
    <div>
       <PageHeader/>
       <List/>
    </div>
  );
};


export default ListPage;