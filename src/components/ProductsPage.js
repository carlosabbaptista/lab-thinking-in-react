import { useState } from 'react';
import jsonData from './data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
    // Initialize state with product data and filter text
    const [products, setProducts] = useState(jsonData);
    const [filterText, setFilterText] = useState('');

    // Function to handle filter text changes
    const handleFilterTextChange = (text) => {
        setFilterText(text);
    };

    // Filter products based on the filter text
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
        <div>
            <h1>IronStore</h1>
            {/* Pass filterText and onFilterTextChange to the SearchBar component */}
            <SearchBar filterText={filterText} onFilterTextChange={handleFilterTextChange} />
            <ProductTable products={filteredProducts} />
        </div>
    );
}

export default ProductsPage;