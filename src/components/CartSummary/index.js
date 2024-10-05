import './index.css'
import CartContext from '../../context/CartContext'
const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(eachItem => {
        total += eachItem.price * eachItem.quantity
      })

      return (
        <div className="totalContainer">
          <h5>
            Order Total: <span className="totals">Rs {total} /-</span>
          </h5>
          <p>{cartList.length} Items in cart</p>
          <button>Checkout</button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
