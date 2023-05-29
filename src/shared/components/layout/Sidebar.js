import React from "react";

const Sidebar = () => {
    return (
        <>
            <div id="sidebar" className="col-lg-4 col-md-12 col-sm-12">
                <div id="banner">
                    <div className="banner-item">
                        <a href="#"><img className="img-fluid" src="images/banner1.png" /></a>
                    </div>
                    <div className="banner-item">
                        <a href="#"><img className="img-fluid" src="images/banner2.png" /></a>
                    </div>
                    <div className="banner-item">
                        <a href="#"><img className="img-fluid" src="images/banner3.png" /></a>
                    </div>
                    <div className="banner-item">
                        <a href="#"><img className="img-fluid" src="images/banner4.png" /></a>
                    </div>
                    <div className="banner-item">
                        <a href="#"><img className="img-fluid" src="images/banner5.png" /></a>
                    </div>
                    <div className="banner-item">
                        <a href="#"><img className="img-fluid" src="images/banner6.png" /></a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Sidebar;