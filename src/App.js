import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import ListPage from './Pages/ListPage';
import ListDetails from './Pages/ListDetails';
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<ListPage/>} />
          <Route path="details" element={<ListDetails />} />
      </Routes>
    </BrowserRouter>
    // <div>
    //   <ListPage/>
    // </div>
  );
}

export default App;
