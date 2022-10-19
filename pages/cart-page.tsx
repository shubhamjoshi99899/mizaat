import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
// Importing actions from  cart.slice.js
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../redux/cart.slice";

const CartPage = () => {
  // const cart = useSelector((state) => state.cart);
  // const dispatch = useDispatch();
  // const getTotalPrice = () => {
  //   // return cart.reduce(
  //   //   (accumulator: any, item: any) => accumulator + item.quantity * item.price,
  //   //   0
  //   // );
  // };
  // return (
  //   <div>
  //     {cart.length === 0 ? (
  //       <h1>Your Cart is Empty!</h1>
  //     ) : (
  //       <>
  //         <div>
  //           <div>Image</div>
  //           <div>Product</div>
  //           <div>Price</div>
  //           <div>Quantity</div>
  //           <div>Actions</div>
  //           <div>Total Price</div>
  //         </div>
  //         {cart.map((item: any) => (
  //           <div key={item}>
  //             <div>
  //               <Image src={item.image} height="90" width="65" />
  //             </div>
  //             <p>{item.product}</p>
  //             <p>$ {item.price}</p>
  //             <p>{item.quantity}</p>
  //             <div>
  //               <button onClick={() => dispatch(incrementQuantity(item.id))}>
  //                 +
  //               </button>
  //               <button onClick={() => dispatch(decrementQuantity(item.id))}>
  //                 -
  //               </button>
  //               <button onClick={() => dispatch(removeFromCart(item.id))}>
  //                 x
  //               </button>
  //             </div>
  //             <p>$ {item.quantity * item.price}</p>
  //           </div>
  //         ))}
  //         <h2>Grand Total: $ {getTotalPrice()}</h2>
  //       </>
  //     )}
  // </div>
};

export default CartPage;
