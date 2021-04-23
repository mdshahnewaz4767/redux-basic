import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/cartAction';
import Product from '../Product/Product';


const Shop = (props) => {
    const {products, addToCart} = props;
    return (
        <div>
            <h4>This is Shop</h4>
            {
                products.map(pd => <Product product={pd} key={pd.id} addToCart={addToCart}></Product>)
            }
        </div>
    );
};


const mapStateToShop = state => {
    return {
        cart: state.cart, 
        products: state.products
    }
}
const mapDispatchToProps = {
    addToCart: addToCart
}

// const connectToStore = connect(mapStateToShop, mapDispatchToProps);
// connectToStore(Shop);

//another way
connect(mapStateToShop, mapDispatchToProps)(Shop);


export default connect(mapStateToShop, mapDispatchToProps)(Shop);