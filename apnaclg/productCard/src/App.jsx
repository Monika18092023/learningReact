import "./App.css";

import ProductCard from "./product.jsx";

import { arr } from "./assets/asset.js";

function App() {
  return (
    <div>
      {arr.map((ele) => (
        <ProductCard product={ele} />
      ))}
    </div>
  );
}
export default App;
