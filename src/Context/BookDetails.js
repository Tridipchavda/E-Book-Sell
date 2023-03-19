import axios from "axios";
import { useEffect, useState } from "react";
import { BookCard } from "../Components/BookCard";
import bookContext from "./BookContext"

const BookState = (props)=>{
    const [bookData,setData] = useState([]);
    const [user,setUser] = useState("");

    const setUserTrue = (val) =>{
      window.localStorage.setItem("username",val);
      setUser(val);
    }

    useEffect(()=>{

        if(window.localStorage.getItem("username")==undefined || window.localStorage.getItem("username")==""){
          setUser("");
        }else{
          setUser(window.localStorage.getItem("username"));
        }
        axios.get("https://ebooksell-9b422-default-rtdb.asia-southeast1.firebasedatabase.app/books.json").then((res)=>{
          var ans=[];
          res.data.forEach(element => {
            ans.push(element);
          });
          
          setData(ans);
        });
       
      },[])

    return <bookContext.Provider value={{bookData,user,setUserTrue}}>{props.children}</bookContext.Provider>
}

export default BookState;