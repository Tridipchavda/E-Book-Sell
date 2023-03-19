
export const SearchBar = () => {
    return (
        <center>
        <div style={{width:"500px",marginTop:"20px"}}>
        <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-info" type="submit"><i class="fa fa-search"></i></button>
        </form>
        </div>
        </center>
    )
}