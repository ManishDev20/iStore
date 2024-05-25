import React, { createContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const MainContext = createContext();
// context provider

const Main = (props) => {
  const [category, setCategory] = useState([]);
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
  const categroyBaseUrl = process.env.REACT_APP_CATEGORY_BASE_URL;

  function fetchCategory() {
    axios
      .get(apiBaseUrl + categroyBaseUrl + "/find/:id")
      .then((success) => {
        if (success.data.status === 1) {
          console.log(success.data);
          setCategory(success.data.CategoryData);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const notify = (msg, status) => {
    toast(msg, status);
  };

  //

  return (
    <MainContext.Provider
      value={{
        notify,
        fetchCategory,
        category,
        apiBaseUrl,
        categroyBaseUrl,
      }}
    >
      <ToastContainer />
      {props.children}
    </MainContext.Provider>
  );
};

export default Main;
export { MainContext };
