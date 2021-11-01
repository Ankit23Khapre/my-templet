import {Link} from "react-router-dom";
export default function Navbar() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "#273746"}}>
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">
            <img src="https://img.icons8.com/external-itim2101-lineal-color-itim2101/64/000000/external-blogger-blogger-and-influencer-itim2101-lineal-color-itim2101-1.png" alt="" width="35" height="35" className="d-inline-block align-text-top me-3 text-white"  />
              Travel Info
            </span>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                   {/* <a className="nav-link active" aria-current="page" href="#">Home</a>  */}
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link> 
                </li>

                <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/gallery">Gallery</Link> 
                   {/* <a className="nav-link active" aria-current="page" href="#">
                    Gallery
                  </a>  */}
                </li>
              
          
            
                <li className="nav-item">
                 <Link className="nav-link active" aria-current="page" to="/contact-us">Contact Us</Link> 
                  {/* <a className="nav-link active" aria-current="page" href="#">
                    Contact Us
                  </a>  */}
                </li>

                <li className="nav-item">
                 <Link className="nav-link active" aria-current="page" to="/about-us">About Us</Link> 
                   {/* <a className="nav-link active" aria-current="page" href="#">
                    About Us
                  </a>  */}
                </li>
              </ul>
            

          </div>
          </div>
        </nav>
      </>
    );
  }