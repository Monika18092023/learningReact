import "./Product.css";

function Product({title,price=1,features=[]}){
const list= features.map((feature)=><li>{feature}</li>);
let styles= {backgroundColor: price>30000 ? "yellow" :""};
console.log(features)
 return(
    <div className="product" style={styles}>
    <h2>{title}</h2>
    <h5>Price:{price}</h5>
    <ul>{list}</ul>
    {price>30000 && <p>Discount of 5%</p>}
    </div>
 );
}

export default Product;