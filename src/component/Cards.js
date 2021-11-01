import gate from "../vendor/img/gate.jpg";
import fort from "../vendor/img/fort.jpg";
import beach from "../vendor/img/beach.jpg";
import lonavala from "../vendor/img/lonavala.jpg";
import kedarnath from "../vendor/img/kedarnath.jpg";
import haridwar from "../vendor/img/haridwar.jpg";
import rishikesh from "../vendor/img/rishikesh.jpg";
import badrinath from "../vendor/img/badrinath.jpg";
import ayodhya from "../vendor/img/ayodhya.jpg";
import agra from "../vendor/img/agra.jpg";
import varanasi from "../vendor/img/varanasi.jpg";
import mathura from "../vendor/img/mathura.jpg";


export default function Cards(){
    return(
        <>
            <div className="container">
                        
                        <div className="row mt-3 mb-3">
                        <h5><b>Maharashtra</b></h5>
                            <div className="col-md-3 ">
                                
                                <img src={gate} className="card-img-top spot-img"  alt="..."/>
                                <div className="card-body">
                                     <h5 className="card-title">Gate Way Of India</h5>
                                        <p className="card-text">The Gateway of India is an arch-monument built in the early 20th century in the city of Mumbai.</p>
                                         <a href="#" className="btn btn-primary">View More</a>
                                </div>

                            </div>
                            <div className="col-md-3 ">
                                <img src={fort} className="card-img-top spot-img"  alt="..."/>
                                <div className="card-body">
                                     <h5 className="card-title">Raigad Fort</h5>
                                        <p className="card-text">Raigad is a hill fort situated in Mahad, Raigad district of Maharashtra, India. </p>
                                         <a href="#" className="btn btn-primary">View More</a>
                                </div>

                            </div>
                            <div className="col-md-3 ">
                                <img src={beach} className="card-img-top spot-img" alt="..."/>
                                <div className="card-body ">
                                     <h5 className="card-title">Juhu Beach</h5>
                                        <p className="card-text">Juhu Beach is one of the most famous and most visited beaches in Mumbai.</p>
                                         <a href="#" className="btn btn-primary">View More</a>
                                </div>

                            </div>
                            <div className="col-md-3 ">
                                <img src={lonavala} className="card-img-top spot-img"  alt="..."/>
                                <div className="card-body ">
                                     <h5 className="card-title">Lonavala</h5>
                                        <p className="card-text">Lonavala is a hill station town and a Municipal Council in the Pune district in the Indian State of Maharashtra. </p>
                                         <a href="#" className="btn btn-primary">View More</a>
                                </div>

                            </div>
                        </div>

                        <div className="row mt-3">
                        <h5><b>Uttarakhand</b></h5>
                            <div className="col-3">
                                
                                <img src={kedarnath} className="card-img-top spot-img"  alt="..."/>
                                <div className="card-body">
                                     <h5 className="card-title">Kedarnath Temple</h5>
                                        <p className="card-text">Kedarnath is a town in the State of Uttarakhand in India and has gained importance because of the Kedarnath Temple.</p>
                                         <a href="#" className="btn btn-primary">View More</a>
                                </div>

                            </div>
                            <div className="col-3">
                                <img src={haridwar} className="card-img-top spot-img"  alt="..."/>
                                <div className="card-body">
                                     <h5 className="card-title">Haridwar</h5>
                                        <p className="card-text">Haridwar is a city and municipal corporation in the Haridwar district of Uttarakhand, India. </p>
                                         <a href="#" className="btn btn-primary">View More</a>
                                </div>

                            </div>
                            <div className="col-3">
                                <img src={rishikesh} className="card-img-top spot-img"  alt="..."/>
                                <div className="card-body">
                                     <h5 className="card-title">Rishikesh</h5>
                                        <p className="card-text">Rishikesh is a city governed by Rishikesh and a tehsil in Dehradun district of the Indian state Uttarakhand.</p>
                                         <a href="#" className="btn btn-primary">View More</a>
                                </div>

                            </div>
                            <div className="col-3">
                                <img src={badrinath} className="card-img-top spot-img"  alt="..."/>
                                <div className="card-body">
                                     <h5 className="card-title">Badrinath</h5>
                                        <p className="card-text">According to legend Shankar discovered a black stone image of Lord Badrinarayan made of Saligram stone in the Alaknanda River.</p>
                                         <a href="#" className="btn btn-primary">View More</a>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
                        <h5><b>Uttarpradesh</b></h5>
                            <div className="col-3">
                                
                                <img src={ayodhya} className="card-img-top spot-img" alt="..."/>
                                <div className="card-body">
                                     <h5 className="card-title">Ayodhya Ram Temple</h5>
                                        <p className="card-text">The Gateway of India is an arch-monument built in the early 20th century in the city of Mumbai.</p>
                                         <a href="#" className="btn btn-primary">View More</a>
                                </div>

                            </div>
                            <div className="col-3">
                                <img src={agra} className="card-img-top spot-img"  alt="..."/>
                                <div className="card-body">
                                     <h5 className="card-title">Agra</h5>
                                        <p className="card-text">Agra is a popular tourist destination as it is home to one of the 7 wonders of the world,the Taj Mahal. </p>
                                         <a href="#" className="btn btn-primary">View More</a>
                                </div>

                            </div>
                            <div className="col-3">
                                <img src={varanasi} className="card-img-top spot-img"  alt="..."/>
                                <div className="card-body">
                                     <h5 className="card-title">Varanasi</h5>
                                        <p className="card-text">World's oldest living city,Varanasi-also known as Kashi (City of Life) and Benaras,is the spiritual capital of India</p>
                                         <a href="#" className="btn btn-primary">View More</a>
                                </div>

                            </div>
                            <div className="col-3">
                                <img src={mathura} className="card-img-top spot-img"  alt="..."/>
                                <div className="card-body">
                                     <h5 className="card-title">Mathura</h5>
                                        <p className="card-text">One of Hinduism's seven sacred cities, Mathura is the birthplace of the very beloved Lord Krishna. </p>
                                         <a href="#" className="btn btn-primary">View More</a>
                                </div>
                            </div>
                        </div>
            </div>

        </>
    )
}