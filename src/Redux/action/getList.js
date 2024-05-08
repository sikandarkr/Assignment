import axios from "axios";
const apiUrl = "http://universities.hipolabs.com/search?country=United%20Arab%20Emirates";
export const apiRequest = () => {
  return {
    type: "REQUESTLIST"
  };
};
export const fetchData = data => {
    console.log("Data......",data);
  return {
    type: "SUCCESSLIST",
    data:data
  };
};

export const filterData= data =>{
    return {
        type: "FILTERDATA",
        data:data
      };
}
export const clearDataData =() =>{
    return {
        type: "CLEARDATA",
      };
}
export const removeItem =(data)=>{
    return {
        type: "REMOVEDATA",
        data:data
      };
}

export const sortData=()=>{
    return {
        type: "SHORTDATA",
      };
}
export const fetchList = () => {
  const headers = {
    "Content-Type": "application/json"
  };
  return dispatch => {
    dispatch(apiRequest());
    return axios
      .get(apiUrl)
      .then(response => {
        dispatch(fetchData(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};


