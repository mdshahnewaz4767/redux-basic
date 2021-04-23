import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/cartAction';
import Product from '../Product/Product';


const Shop = () => {
    const products = [
        {name: 'Asus Laptop', id: 1},
        {name: 'Apple Laptop', id: 2},
        {name: 'Lenovo Laptop', id: 3},
        {name: 'Dell Laptop', id: 4},
        {name: 'HP Laptop', id: 5}
    ]
    return (
        <div>
            <h4>This is Shop</h4>
            {
                products.map(pd => <Product pd={pd} key={pd.id}></Product>)
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