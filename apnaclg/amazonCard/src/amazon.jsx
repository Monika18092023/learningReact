import "./amazon.css";

function Amazon({title, idx}){ 
    let oldPrice= [12495,11900,1599,600];
    let description= [["8,000 DPI","5 Programmable buttons"],["intuitive surface","iPad for"],["designed for iPad Pro","Primitive Style"],["wireless","expensive"]];
 return(
    <div className="card">
        <p className="productname">{title}</p>
        <p>{description[idx][0]}</p>
        <p>{description[idx][1]}</p>
        <p className="price"><span>{oldPrice[idx]}</span>&nbsp;{oldPrice[idx]-Math.round(oldPrice[idx]*0.20)}</p>    
    </div>
 )
}

export default Amazon;