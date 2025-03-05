


import "./product.css";

function ProductCard({product}){
    return(<div className="card">
      <img src={product.image}/>
     <h1>{product.title}</h1>
     <p>{product.description}</p>
     <p><span>Price:</span> <i>{product.price}</i></p>
     </div>
    )
}
export default ProductCard;
