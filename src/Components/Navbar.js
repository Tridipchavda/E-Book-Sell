import { useCallback, useContext, useEffect, useState } from "react";
import bookContext from "../Context/BookContext";

export const Navbar = () => {

    const {bookData,user,setUserTrue} = useContext(bookContext);


    const [margin,setMargin] = useState();
    
    useEffect(()=>{
        setMargin((user=="" ? 950:700));
        console.log(margin);
    })
    

    return (
        <nav className="navbar navbar-expand-lg navbar-light "style={{backgroundColor:'#fddc4a'}}>
            <div className="container-fluid">
                <a className="navbar-brand mx-3" href="#">E Book Sell</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" style={{marginLeft:margin+"px"}} id="navbarNavAltMarkup">
                    <div className="navbar-nav mx-5">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        <a className="nav-link" href="#">About</a>
                        <a className="nav-link" href="#">Terms</a>
                        {user=="" ? "":<button className="btn mx-2 border border-dark" >{user}</button>}
                        
                    </div>
                </div>
            </div>
        </nav>
    )
}