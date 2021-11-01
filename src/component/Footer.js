
export  default function Footer(){
    return(
        <>
        <div className="main-footer">
            <div className="container">
                <div className="row mb-3">
                    <div className="col">
                        <h4>SOCIAL LINKS</h4>
                            <ul className="unstyled" >
                                <li>Home</li>
                                <li>About Us</li>
                                <li>Contact Us</li>
                            </ul>
                    </div>
                    <div className="col">
                    <h4>CONNECT WITH US</h4>
                            <ul className="unstyled" >
                                <li>Instagram</li>
                                <li>Facebook</li>
                                <li>GitHub</li>
                            </ul>
                    </div>
                    <div className="col">
                        <h4>INTRESTS</h4>
                            <ul className="unstyled" >
                                <li>Adventure Travel</li>
                                <li>Art And Culture</li>
                                <li>Family Holidays</li>
                                <li>Road Trips</li>
                            </ul>
                    </div>
                </div>
                <hr/>
                <div className="row mb-4">
                    <div className="col-sm">
                        &copy;{new Date().getFullYear}THIS TRAVEL WEBSITES | All right reserved | Terms of services | Privacy
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}