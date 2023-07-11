import React, { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const [cartItems, setCartItems] = useState(cart);


    const calculateTotal = () => {
        // Calculate the total amount based on cart items
        return cartItems.reduce((total, item) => total + item[1], 0);
    };

    const removeItem = (index) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems.splice(index, 1);
        setCartItems(updatedCartItems);
        localStorage.setItem('cart', JSON.stringify(updatedCartItems));

        toast.error('Item removed from cart');
    };
    return (
        <>
            <div className="flex-center" style={{ marginTop: '40px' }}>

                <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar newestOnTop closeOnClick pauseOnFocusLoss />
                <table>
                    <thead>
                        <tr>
                            <td>Sr.No</td>
                            <td>Name</td>
                            <td>Image</td>
                            <td>Price</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((price, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td> Item {index + 1}</td>
                                <td> <img src={price[0]} alt={`Dog image ${index + 1}`} style={{ width: '100px', height: '80px' }} /></td>
                                <td> ${price[1]}</td>
                                <td><button onClick={() => removeItem(index)}>Delete</button></td>
                            </tr>
                        ))}
                        <tr>
                            <td colSpan={3}>Total</td>
                            <td colSpan={2}>${calculateTotal()}</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </>
    )
}

export default Cart
