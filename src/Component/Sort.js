import { useSelector,useDispatch } from "react-redux";
import { sortData } from "../Redux/action/getList";
const Sort = () => {
const state = useSelector((state) => state.list);
const dispatch = useDispatch();
const sortHandler = ()=>{
    dispatch(sortData());
}
  return (
    <div className="sort">
       <i className="fa fa-sort" aria-hidden="true" onClick={sortHandler}></i> Sort
    </div>
  );
};


export default Sort;