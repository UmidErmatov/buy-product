import { Button } from '..'
import './Cart.css'

type Props = { cartItems: any, onCheckout: any }

function Cart({ cartItems, onCheckout }: Props) {
    const totalPrice = cartItems.reduce((a: any, c: any) => a + c.price * c.quantity, 0);

    return (<div className="cart__container">
        {cartItems.length === 0 ? "No items in cart" : ""}
        <br /> <span className="">Total Price: ${totalPrice.toFixed(2)}</span>
        <Button
            title={`${cartItems.length === 0 ? "Order !" : "Checkout"} `}
            type={"checkout"}
            disable={cartItems.length === 0 ? true : false}
            onClick={onCheckout}
        />
    </div>)
}

export default Cart