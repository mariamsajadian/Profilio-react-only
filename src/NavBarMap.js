import "./index.css";
import { useState, useEffect } from "react";
import JsonList from "./JsonList";

const NavBarMap = () => {
    const [data, setData] = useState(null)
    const [hidden, setHidden] = useState(true);
    // const file = "/home/user/dir/file.txt";
    // var filename = file.split('\\').pop().split('/').pop();
    // console.log(filename);
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                // console.log(res.status);
                if (!res.ok) {
                    throw Error("Check the name and path of json file.")
                }
                return res.json();
            })
            .then(data => {
                // console.log(data);
                setData(data);
            }).catch(err =>{
                console.log(err.message);
            }) 
    }, [])

    const handleClick = (e) => {
        e.preventDefault();
        setHidden(s => !s)
    }

    const handleSearch = (e) => {
        e.preventDefault();
    }
    return (

        <div className="nav-sidebar">
            <div className="searchBar">
                <form className="add">
                    <input className="form-control m-auto" type="file" accept="application/JSON" name="search" />
                    <button onClick={handleClick} className="form-control-submit m-auto"  >Add</button>
                </form>
            </div>
            <div className="inputs">
                <form className="search">
                    <input className="form-control-search m-auto" type="text" name="search" placeholder="search locations..." />
                    <button onClick={handleSearch} className="form-control-submit m-auto" type="submit" name="search" >Go</button>
                </form>
                {!hidden ?
                    <div className="resultList" >
                        {data && <JsonList data={data} />}
                    </div> : null}
            </div>
        </div>
    );
}
export default NavBarMap;