import React from "react";

const Slider = () => {
    return (
        <>
            {/*	Slider	*/}
            <div id="slide" className="carousel slide" data-ride="carousel">
                {/* Indicators */}
                <ul className="carousel-indicators">
                    <li data-target="#slide" data-slide-to={0} className="active" />
                    <li data-target="#slide" data-slide-to={1} />
                    <li data-target="#slide" data-slide-to={2} />
                    <li data-target="#slide" data-slide-to={3} />
                    <li data-target="#slide" data-slide-to={4} />
                    <li data-target="#slide" data-slide-to={5} />
                </ul>
                {/* The slideshow */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="images/slider1.png" alt="Vietpro Academy" />
                    </div>
                    <div className="carousel-item">
                        <img src="images/slider2.png" alt="Vietpro Academy" />
                    </div>
                    <div className="carousel-item">
                        <img src="images/slider5.png" alt="Vietpro Academy" />
                    </div>
                    <div className="carousel-item">
                        <img src="images/slider4.png" alt="Vietpro Academy" />
                    </div>
                    <div className="carousel-item">
                        <img src="images/slider5.png" alt="Vietpro Academy" />
                    </div>
                    <div className="carousel-item">
                        <img src="images/slide-6.png" alt="Vietpro Academy" />
                    </div>
                </div>
                {/* Left and right controls */}
                <a className="carousel-control-prev" href="#slide" data-slide="prev">
                    <span className="carousel-control-prev-icon" />
                </a>
                <a className="carousel-control-next" href="#slide" data-slide="next">
                    <span className="carousel-control-next-icon" />
                </a>
            </div>
            {/*	End Slider	*/}
        </>
    )
}
export default Slider;