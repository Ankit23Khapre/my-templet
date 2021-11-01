import Slide1 from "../vendor/img/banner-1.jpg";
import Slide2 from "../vendor/img/banner-2.jpg";
import Slide3 from "../vendor/img/banner-3.jpg";
import Slide4 from "../vendor/img/banner-4.jpg";

import Slide from "./Slide";

export default function Slider() {
  return (
    <>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          </div>
         
            

          <div class="carousel-inner" style={{height:"85vh"}}>
             <div class="carousel-item active">
                <img src={Slide1} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
                <img src={Slide2} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
                 <img src={Slide3} class="d-block w-100" alt="..."/>
           </div>
           <div class="carousel-item">
                 <img src={Slide4} class="d-block w-100" alt="..."/>
           </div>
        </div>

        
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
           <span className="visually-hidden">Previous</span>
        </button>
         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
             <span className="carousel-control-next-icon" aria-hidden="true"></span>
             <span className="visually-hidden">Next</span>
          </button>
        </div>
    </>    
  );
}
