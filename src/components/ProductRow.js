import React from 'react';

function ProductRow({ product }) {
    // Determine the text color based on the inStock property
    const textColor = product.inStock ? 'black' : 'red';

    return (
        <tr>
            <td style={{ color: textColor }}>{product.name}</td>
            <td>{product.category}</td>
            <td>{product.price}</td>
        </tr>
    );
}

export default ProductRow;