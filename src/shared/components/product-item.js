const ProductItem=({item})=>{
    <div className="product-item card text-center">
    <a href="#"><img src="images/product-2.png" /></a>
    <h4><a href="#">{item.name}</a></h4>
    <p>Giá Bán: <span>{item.price}</span></p>
</div>
}
export default ProductItem;