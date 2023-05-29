import React, { useEffect } from "react";
import { getProducts } from "../../sevices/Api";
import ProductItem from "../../shared/components/product-item";

const Home = () => {
    const[latestProduct,setLatestProduct]= React.useState([]);
    useEffect(()=>{
        getProducts({
            params:{
                limit:6,
            }
        }).then(({data})=>{
            setLatestProduct(data.data.docs);
        });

    },[]);
    return (
        <>
            {/*	Feature Product	*/}
            <div className="products">
                <h3>Sản phẩm nổi bật</h3>
                <div className="product-list card-deck">
                    <div className="product-item card text-center">
                        <a href="#"><img src="images/product-1.png" /></a>
                        <h4><a href="#">iPhone Xs Max 2 Sim - 256GB</a></h4>
                        <p>Giá Bán: <span>32.990.000đ</span></p>
                    </div>
                    <div className="product-item card text-center">
                        <a href="#"><img src="images/product-2.png" /></a>
                        <h4><a href="#">iPhone Xs Max 2 Sim - 256GB</a></h4>
                        <p>Giá Bán: <span>32.990.000đ</span></p>
                    </div>
                    <div className="product-item card text-center">
                        <a href="#"><img src="images/product-3.png" /></a>
                        <h4><a href="#">iPhone Xs Max 2 Sim - 256GB</a></h4>
                        <p>Giá Bán: <span>32.990.000đ</span></p>
                    </div>
                </div>
                <div className="product-list card-deck">
                    <div className="product-item card text-center">
                        <a href="#"><img src="images/product-4.png" /></a>
                        <h4><a href="#">iPhone Xs Max 2 Sim - 256GB</a></h4>
                        <p>Giá Bán: <span>32.990.000đ</span></p>
                    </div>
                    <div className="product-item card text-center">
                        <a href="#"><img src="images/product-5.png" /></a>
                        <h4><a href="#">iPhone Xs Max 2 Sim - 256GB</a></h4>
                        <p>Giá Bán: <span>32.990.000đ</span></p>
                    </div>
                    <div className="product-item card text-center">
                        <a href="#"><img src="images/product-6.png" /></a>
                        <h4><a href="#">iPhone Xs Max 2 Sim - 256GB</a></h4>
                        <p>Giá Bán: <span>32.990.000đ</span></p>
                    </div>
                </div>
            </div>
            {/*	End Feature Product	*/}
            {/*	Latest Product	*/}
            <div className="products">
                <h3>Sản phẩm mới</h3>
                <div className="product-list card-deck">
                    {
                        latestProduct.map((value)=>
                         <ProductItem item={value}/>
                        )
                    }
                </div>
            </div>
            {/*	End Latest Product	*/}
        </>
    )
}
export default Home;