import { Link } from 'react-router-dom';

 
 const JsonList = ({ data }) => {
    return (
        // style={{display :"none"}}
      <div className="blog-list" >
        {data.map(b => (
          <div className="blog-preview" key={b.id} >
              <Link to={`${b.Link}`}></Link>
            <h5 href={b.link} target = "_blank">{ b.title }</h5>
            <h6>Written by { b.author }</h6>
          </div>
        ))}
      </div>
    );
  }
   
  export default JsonList;