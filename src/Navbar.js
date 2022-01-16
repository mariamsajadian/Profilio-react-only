import { Link } from "react-router-dom";
import logo from './img/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="linksDiv">
        <Link to="/" className="links" style={{ textDecoration: 'none',  padding: '14px 16px'}}>Home</Link>
        <Link to="/map" className="links" style={{ textDecoration: 'none',  padding: '14px 16px' }}>Map</Link>
        <Link to="/create" className="links" style={{ textDecoration: 'none',  padding: '14px 16px' }}>About</Link>
        <Link to="/blog" className="links" style={{ textDecoration: 'none',  padding: '14px 16px' }}>Blog</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;