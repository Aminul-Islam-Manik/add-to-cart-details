import React, { useEffect, useState } from 'react';

const Products = () => {
    const [products, setProducts]= useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    }, [])


    return (
        <div>
            <h4>Total:{products.length}</h4>
            {
                products.map(product=><p>Total products:{products.length}</p>)
            }
        </div>
    );
};

export default Products;