import "./product.css";

function User({userName, textColor}){
let styles= {color: textColor};
 return(
    <div className="product" style={styles}>
    <h2 style={styles}>Hello, {userName}</h2>
    </div>
 );
}

export default User;