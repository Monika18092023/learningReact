import Amazon from "./amazon.jsx";

function ProductTab(){
    let styles={marginBottom:"10px"};
 return(
    <>
    <h2 style={styles}>Blockbuster Deals on Computer Accesories | Shop Now</h2>
     <Amazon title="Longitech MX Master" idx={0}/>
     <Amazon title="ApplePencil (2nd Gen)" idx={1}/>
     <Amazon title="Zebronics" idx={2}/>
     <Amazon title="Petronics Toad" idx={3}/>
   </>
 )
}

export default ProductTab;