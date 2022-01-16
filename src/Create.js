// input youtube = https://www.youtube.com/watch?v=Px4Lm8NixtE
// modern javascript the react course for useeffect
//throw error for fetch: hooks and context course
//throw Error with red box: https://www.youtube.com/watch?v=AcbFs7Vp2-Q
import { useState, useEffect} from "react";//, useReducer 

import JsonList from "./JsonList";

const Create = () => {

    const [data, setData] = useState(null);
    const [api, setApi] = useState("http://localhost:8000/blogs");
    const [nothidden, setNotHidden] = useState(false);

    useEffect(() => {   
        fetch(api)
            .then(res => { 
                console.log(res.ok);
                if (!res.ok){
                    throw Error("can not fetch data from this resource");
                }
                return res.json();
             })
            .then(data => {
                setData(data); 
            })
            .catch(err =>{
                console.log(err.message);
            })            
}, [api])

const handleClick = (e) => {
    e.preventDefault ();
    setApi(e.target.value);
    setNotHidden(false);
    console.warn(e.target.value)
}
    return (
        <div>
            <span>API Address</span>
            <input className="form-control-search" type="text" onChange={handleClick} placeholder={api}></input>
            <button onClick={() => setNotHidden(true)} className="form-control-submit m-auto" type="submit" name="search" >Go</button>
            {
            nothidden ?
                <div className="resultList" >
                {data && <JsonList data={data} />}
                </div>
            : null
            }

        </div>
    );
}

export default Create;