import {useDispatch } from "react-redux";
import { sortData } from "../Redux/action/getList";
const Sort = () => {
const dispatch = useDispatch();
const sortHandler = ()=>{
    dispatch(sortData());
}
  return (
     <div className="sort">
     {/* Adding data-testid attribute to the sort icon */}
     <i className="fa fa-sort" aria-hidden="true" onClick={sortHandler} data-testid="sort-icon"></i> Sort
   </div>
  );
};


export default Sort;