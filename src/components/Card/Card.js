import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/actions/cartAction';

const Card = (props) => {
    console.log(props);
    const {cart, removeFromCart} = props;
    return (
        <div>
            <h2>This is Card</h2>
            <ul>
                {
                    cart.map(id => <li key={id}>{id} <button onClick={() => removeFromCart(id)}>X</button></li>)
                }
            </ul>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}
const mapDispatchToProps = {
    removeFromCart: removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);