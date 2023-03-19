import { useContext } from "react";
import bookCover from "../bookCover.jpg";
import bookContext from "../Context/BookContext";


export const BookCard = () => {

    const {bookData,user,setUserTrue} = useContext(bookContext);

    console.log("====", bookData);
    return (
        <center>
        <div style={{width:"90%",display:"flex",flexWrap:"wrap",marginTop:"20px"}}>
        {bookData.map((ele) => {

            return (
                <div className="card " style={{ width: "11rem",margin:"10px" }}>
                    <img src={ele.image} className="card-img-top" alt="..." height="200px"/>
                    <div className="card-body text-start" style={{ marginTop: "-5px" }}>
                        <h7 className="card-title">{ele.book_name}</h7>
                        <h6 className="card-text">{ele.book_price}Rs</h6>
                    </div>
                    <div className="my-1" style={{ marginTop: "-20px" }}>
                        <button type="button" class="btn btn-warning btn-sm" style={{ fontSize: "11px" }}>Buy Now</button>
                        <button type="button" class="btn btn-info btn-sm mx-1" style={{ fontSize: "11px" }}>Add To Cart</button>
                    </div>
                </div>
            )
        })}
        </div>
        </center>

    )
}