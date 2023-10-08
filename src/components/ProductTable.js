import React from 'react';
import ProductRow from './ProductRow';

function ProductTable({ products }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {/* Map through products and render a ProductRow for each one */}
                {products.map((product) => (
                <ProductRow key={product.id} product={product} />
                ))}
            </tbody>
        </table>
    );
}

export default ProductTable;