const initialState = {
  loading: false,
  data: [],
  list: [],
};

export default function listReducer(state = initialState, action) {
  switch (action.type) {
    case "REQUESTLIST":
      return { ...action.data, loading: true };
    case "SUCCESSLIST":
      return {
        // returning a copy of orignal state
        ...state, //copying the original state
        data: action.data, //new todos array ,
        list: action.data,
        loading: false,
      };
    // return { items: action.data, loading: false };
    case "FILTERDATA":
      var filter = "name";

      var filteredData = state.data.filter(function (obj) {
        return obj[filter].includes(action.data);
      });
      return {
        ...state,
        data: filteredData,
        loading: false,
      };
    case "CLEARDATA":
      return {
        ...state,
        data: state.list,
      };
      case "REMOVEDATA":
        var filter = "name";
        var filteredData = state.data.filter(function (obj) {
            return obj[filter]!=action.data.name;
          });
          return {
            ...state,
            data: filteredData,
          };
      case "SHORTDATA":
        const sortedArray = [...state.data].sort(
            (a, b) => a.name.localeCompare(b.name)
          );
        return {
            ...state,
            data: sortedArray,
          };
    default:
      return state;
  }
}
