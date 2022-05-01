import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { checkAuth } from "../../Redux/thunk/userThunk";
import MyNavbar from "../MyNavbar/MyNavbar";
import HomePage from "../Pages/HomePage/HomePage";
import ListPage from "../Pages/ListPage/ListPage";
import LoginAuth from "../Pages/LoginAuth/LoginAuth";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      dispatch(checkAuth());
    }
  }, [dispatch]);
  return (
    <div className="App">
      <MyNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<LoginAuth />} />
        <Route path="/list" element={<ListPage />} />
      </Routes>
    </div>
  );
}

export default App;
