// import React from 'react';
// import { useSearchParams } from 'react-router-dom';
// import './ProductList.css';

// const ProductList = () => {
//   const [searchParams] = useSearchParams();
//   const subcategory = searchParams.get('subcategory') || 'all';

//   return (
//     <div className="men-page">
//       <div className="men-header">
//         <h1>Men's Collection</h1>
//         <input
//           type="text"
//           value={subcategory.replace(/-/g, ' ')}
//           readOnly
//           className="subcategory-input"
//         />
//       </div>

//       <div className="product-display">
//         <p>Showing results for: <strong>{subcategory.replace(/-/g, ' ')}</strong></p>
//         {/* Placeholder for product grid */}
//         <div className="product-grid">
//           <div className="product-card">Sample Product 1</div>
//           <div className="product-card">Sample Product 2</div>
//           <div className="product-card">Sample Product 3</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductList;



// import React, { useEffect, useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import './ProductList.css';

// const ProductList = () => {
//   const [searchParams] = useSearchParams();
//   const subcategory = searchParams.get('subcategory') || 'all';

//   const [products, setProducts] = useState([]);
//   const [minPrice, setMinPrice] = useState(0);
//   const [maxPrice, setMaxPrice] = useState(500);
//   const [selectedSize, setSelectedSize] = useState('');
//   const [materials, setMaterials] = useState([]);
//   const [availableMaterials, setAvailableMaterials] = useState([
//     'Cotton', 'Polyester', 'Nylon', 'Rayon', 'Denim'
//   ]);

//   const fetchProducts = async () => {
//     const queryParams = new URLSearchParams({
//       subcategory,
//       minPrice,
//       maxPrice,
//       ...(selectedSize && { size: selectedSize }),
//       ...(materials.length > 0 && { material: materials.join(',') })
//     });

//     const res = await fetch(`http://localhost:5000/api/products?${queryParams}`);
//     const data = await res.json();
//     setProducts(data);
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, [subcategory, minPrice, maxPrice, selectedSize, materials]);

//   const handleMaterialChange = (material) => {
//     setMaterials(prev =>
//       prev.includes(material)
//         ? prev.filter(m => m !== material)
//         : [...prev, material]
//     );
//   };

//   return (
//     <div className="product-page">
//       <div className="filters">
//         <h3>Filters</h3>

//         <div className="filter-group">
//           <label>Price Range: ${minPrice} - ${maxPrice}</label>
//           <input type="range" min="0" max="500" value={minPrice} onChange={e => setMinPrice(e.target.value)} />
//           <input type="range" min="0" max="500" value={maxPrice} onChange={e => setMaxPrice(e.target.value)} />
//         </div>

//         <div className="filter-group">
//           <label>Size:</label>
//           {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(size => (
//             <button
//               key={size}
//               className={selectedSize === size ? 'selected' : ''}
//               onClick={() => setSelectedSize(selectedSize === size ? '' : size)}
//             >
//               {size}
//             </button>
//           ))}
//         </div>

//         <div className="filter-group">
//           <label>Material:</label>
//           {availableMaterials.map(mat => (
//             <label key={mat}>
//               <input
//                 type="checkbox"
//                 value={mat}
//                 checked={materials.includes(mat)}
//                 onChange={() => handleMaterialChange(mat)}
//               />
//               {mat}
//             </label>
//           ))}
//         </div>
//       </div>

//       <div className="product-display">
//         <p>Showing results for: <strong>{subcategory.replace(/-/g, ' ')}</strong></p>
//         <div className="product-grid">
//           {products.map(product => (
//             <div className="product-card" key={product._id}>
//               <img src={product.link} alt={product.productDisplayName} />
//               <h4>{product.productDisplayName}</h4>
//               <p>${product.price}</p>
//               <p>{product.material}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductList;






import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './ProductList.css';

const ProductList = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/products?search=${query}`);
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error('Error fetching products:', err);
      }
    };

    if (query) {
      fetchProducts();
    }
  }, [query]);

  return (
    <div className="product-display">
      <h2>Search Results for: <em>{query}</em></h2>
      <div className="product-grid">
        {products.length > 0 ? (
          products.map(product => (
            <div className="product-card" key={product._id}>
              <img src={product.link} alt={product.productDisplayName} />
              <h4>{product.productDisplayName}</h4>
              <p>Material: {product.material}</p>
              <p>Price: ${product.price}</p>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
