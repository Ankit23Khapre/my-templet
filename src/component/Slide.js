
export default function Slide({photo,active,title,text}){
    return(
        <>
            <div className={`caousel-item sliderImg ${active}`}>
                <img src={photo} className="d-block w-100 slideImg" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>{title}</h5>
                    <p>{text}</p>
                </div>
            </div>
        </>
    )
}