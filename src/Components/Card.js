import React from "react";
import { useCart } from "react-use-cart";

const Card = (props) => {
    const { addItem } = useCart();
  return (
    <div className="card" style={{width:"18rem", margin: 2, display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between"}}>
      <div className="card p-0 overflow-hidden h-100 shadow">
        <img src={props.img} className="card-img-top" alt="" />
        <div className="card-body text-center">
          <h5 className="card-title">{props.title}</h5>
          <h5 className="card-text">${props.price}</h5>
          <p className="card-text">{props.desc}</p>
          <button className="btn btn-success" 
          onClick={() => addItem(props.item)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
