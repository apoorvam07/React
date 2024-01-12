import React,{ createContext ,useState,useEffect} from "react";

import {fetchDataFromApi} from "../utils/api"

export const Context= createContext();

export const AppContext=(props)=>{
  const [loading, setLoading]=useState(false);
  const [searchResults,setSearchResults]=useState(false);
  const [selectCategories,setselectCategories]=useState(false);
  const [MobileMenu,setMobileMenu]=useState(false);



  useEffect(()=>{

  },[]);

  const fetchSelectedCtegory

  return(
    <Context.Provider value={{
      loading,
      setLoading,
      searchResults,
      setSearchResults,
      selectCategories,
      setselectCategories,
      MobileMenu,
      setMobileMenu,
    }}>

      {props.children}
    </Context.Provider>
  )
}
