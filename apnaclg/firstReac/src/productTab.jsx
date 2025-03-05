import Product from "./product.jsx";

function ProductTab(){
    let options= ["hi","gem","kol"];
    return(
        <>
        <Product title="phone" price={30000} features={options}/>
        <Product title="laptop" price={40000}/>
        <Product title="computer" price={2000}/>
        </>
    )
}
export default ProductTab;