import React, { useContext, useState } from "react";
import CartContext from "./Createcontext";

function Item({ product }) {
  //   const { products } = useContext(CartContext);
  const [qty, setQty] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const { total, setTotal } = useContext(CartContext);

  const handleQtyIncremnt = () => {
    qty < product.stock && [
      setQty(qty + 1),
      setSubTotal(subTotal + product.price),
      setTotal(total + product.price),
    ];
  };

  const handleQtyDecmnt = () => {
    qty > 0 && [
      setQty(qty - 1),
      setSubTotal(subTotal - product.price),
      setTotal(total - product.price),
    ];
  };
  return (
    <tr>
      <td>
        <img
          className="img-fluid"
          src={product.thumbnail}
          alt=""
          style={{ width: 100 }}
        />
        <h6>{product.title}</h6>
      </td>
      <td>&#8377;{product.price}.00</td>
      <td>
        <div className=" border border-2 rounded">
          <button
            type="button"
            className="border-0  bg-white me-2 fs-3 "
            onClick={handleQtyDecmnt}
          >
            -
          </button>
          {qty}
          <button
            type="button"
            className="border-0  bg-white ms-2  fs-3"
            onClick={handleQtyIncremnt}
          >
            +
          </button>
        </div>
      </td>
      <td>&#8377;{subTotal}.00</td>
    </tr>
  );
}

export default Item;
