import React from 'react';
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

export default Shop;