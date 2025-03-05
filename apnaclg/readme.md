babel is javascript complier.
### jsx --->Babel ----> js
### steps to set react
- npm create vite@latest
- cd folder
- npm folder
- npm run dev

# import-export

- import Title from "./Title.jsx";
  export default Title;

- import {Title} from "./Title.jsx";
  export {Title};  // named export

- webpack make it possible in react for import export functionality


 # React Fragment
  
  <></> write this so that no extra node to the dom create.

# curly bracket
 
 {2*2}, {variable} curly braces allow writing pure js

# structuring

 component in App --> component repeatation --> that single component  
 to increase reusability

# style components

 - made css file as name of jsx file 
 - made a css file for every component

# react props

 - props are the info. that pass to a jsx tag.
 - make it dynamic 
 - give the different arguments for different products  // <product title="abbme">
 - destructure the parameters in function // function ({title})

# arrays and objects

 - pass on the spot objects= {{a:"g",b:"v"}}, arrays= {["a,"n","l"]}  use key={index} so that no error show in console
 - define in somewhere then use in <product features={objects}>

# conditionals
 
 - <p>{price >3000 ? "Discount of 5" : ""}</p> is creating extra DOM element
 - {price>3000 ? <p>"Discount of 5%"</p>: null} use this
 - {price > 3000 && <p>"Discount of 5%"</p>} use this is optimum

# Dynamic component styling

 - let styles= {backgroundColor: price>30000 ? "yellow" :""};
   <div className="product" style={styles}>



### useEffect 

useEffect hook allow you to perform side effect task in component.
 
 useEffect - 2 parameters accept karta hai, 

1.
 useEffect(()=>{
   
 }) 

 // inf

2.
 useEffect(()=>{
   // page render one 
  
 },[])

3
 useEffect(()=>{

 },[count])









