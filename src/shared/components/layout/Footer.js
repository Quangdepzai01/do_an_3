import React from "react";

const Footer = () => {
    return (
        <>
            <div id="footer-top">
                <div className="container">
                    <div className="row">
                        <div id="logo-2" className="col-lg-3 col-md-6 col-sm-12">
                            <h2><a href="#"><img src="images/logo.png" /></a></h2>
                            <p>
                            Lầu 5, 387-389 Hai Bà Trưng Quận 3 TP HCMCông Ty Cổ Phần Phát Hành Sách TP HCM - FAHASA60 - 62 Lê Lợi, Quận 1, TP. HCM, Việt NamFahasa.com nhận đặt hàng trực tuyến và giao hàng tận nơi. KHÔNG hỗ trợ đặt mua và nhận hàng trực tiếp tại văn phòng cũng như tất cả Hệ Thống Fahasa trên toàn quốc.
                            </p>
                        </div>
                        <div id="address" className="col-lg-3 col-md-6 col-sm-12">
                            <h3>Địa chỉ</h3>
                            <p> 60-62 Lê Lợi, Q.1, TP. HCM</p>
                            <p>Số 25 Ngõ 178/71 - Tây Sơn Đống Đa - Hà Nội</p>
                        </div>
                        <div id="service" className="col-lg-3 col-md-6 col-sm-12">
                            <h3>Dịch vụ</h3>
                            <p>Bảo hành rơi vỡ, ngấm nước Care Diamond</p>
                            <p>Bảo hành Care X60 rơi vỡ ngấm nước vẫn Đổi mới</p>
                        </div>
                        <div id="hotline" className="col-lg-3 col-md-6 col-sm-12">
                            <h3>Hotline</h3>
                            <p>Phone Sale: 1900636467</p>
                            <p>Email: cskh@fahasa.com.vn</p>
                        </div>
                    </div>
                </div>
            </div>
            {/*	Footer	*/}
            <div id="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <p>
                                2018 © Vietpro Academy. All rights reserved. Developed by Vietpro Software.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/*	End Footer	*/}
        </>
    )
}
export default Footer;