import { useSelector,useDispatch } from "react-redux";
import { filterData,clearDataData } from "../Redux/action/getList";
const SearchField = (props) => {
   const {inputType, placeholder} = props;
   const dispatch = useDispatch();
   const searchByKey = event => {
    let keyword = event.target.value;
    if(keyword==""){
        dispatch(clearDataData());
    }
    else{
        dispatch(filterData(keyword));
    }
  };
  return (
    <div className="input-field-container">
       <input type={inputType} placeholder={placeholder} className="input-field" onChange={e => searchByKey(e)}/>
    </div>
  );
};


export default SearchField;