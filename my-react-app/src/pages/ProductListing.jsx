import React, { useState } from 'react';
import './ProductList.css';

const ProductListing = () => {
  // Sample filters
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);

  const sizes = ['S', 'M', 'L', 'XL'];
  const materials = ['Cotton', 'Polyester', 'Leather', 'Wool'];

  const handleSizeChange = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const handleMaterialChange = (material) => {
    setSelectedMaterials((prev) =>
      prev.includes(material) ? prev.filter((m) => m !== material) : [...prev, material]
    );
  };

  return (
    <div className="product-listing">
      {/* Filters Sidebar */}
      <aside className="filters">
        <h3>Filters</h3>

        {/* Price Range */}
        <div className="filter-group">
          <label>Price Range: ${priceRange[0]} - ${priceRange[1]}</label>
          <input
            type="range"
            min="0"
            max="2000"
            step="50"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
          />
        </div>

        {/* Size Filters */}
        <div className="filter-group">
          <h4>Sizes</h4>
          {sizes.map((size) => (
            <label key={size}>
              <input
                type="checkbox"
                checked={selectedSizes.includes(size)}
                onChange={() => handleSizeChange(size)}
              />
              {size}
              <br />
            </label>
          ))}
        </div>

        {/* Material Filters */}
        <div className="filter-group">
          <h4>Materials</h4>
          {materials.map((material) => (
            <label key={material}>
              <input
                type="checkbox"
                checked={selectedMaterials.includes(material)}
                onChange={() => handleMaterialChange(material)}
              />
              {material}
              <br />
            </label>
          ))}
        </div>
      </aside>

      {/* Product Grid */}
      <section className="products">
        <h2>Showing Products</h2>
        {/* TODO: Render filtered products here */}
        <div className="product-grid">
          {/* Dummy content */}
          <div className="product-card">Product 1</div>
          <div className="product-card">Product 2</div>
          <div className="product-card">Product 3</div>
        </div>
      </section>
    </div>
  );
};

export default ProductListing;



// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// import axios from 'axios';
// import './ProductList.css';

// const ProductListing = () => {
//   const [priceRange, setPriceRange] = useState([0, 1000]);
//   const [selectedSizes, setSelectedSizes] = useState([]);
//   const [selectedMaterials, setSelectedMaterials] = useState([]);
//   const [products, setProducts] = useState([]);

//   const { gender, subcategory } = useParams();

//   const sizes = ['S', 'M', 'L', 'XL'];
//   const materials = ['Cotton', 'Polyester', 'Leather', 'Wool'];

//   // Handlers for filters
//   const handleSizeChange = (size) => {
//     setSelectedSizes((prev) =>
//       prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
//     );
//   };

//   const handleMaterialChange = (material) => {
//     setSelectedMaterials((prev) =>
//       prev.includes(material) ? prev.filter((m) => m !== material) : [...prev, material]
//     );
//   };

//   // Fetch products when filters change
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await axios.get('http://localhost:5000/api/products', {
//           withCredentials: true, 
//           params: {
//             gender,
//             subcategory,
//             minPrice: priceRange[0],
//             maxPrice: priceRange[1],
//             size: selectedSizes.join(','),
//             material: selectedMaterials.join(',')
//           }
//         });
//         setProducts(response.data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, [priceRange, selectedSizes, selectedMaterials]);

//   return (
//     <div className="product-listing">
//       {/* Filters Sidebar */}
//       <aside className="filters">
//         <h3>Filters</h3>

//         {/* Price Range */}
//         <div className="filter-group">
//           <label>Price Range: ${priceRange[0]} - ${priceRange[1]}</label>
//           <input
//             type="range"
//             min="0"
//             max="2000"
//             step="50"
//             value={priceRange[1]}
//             onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
//           />
//         </div>

//         {/* Size Filters */}
//         <div className="filter-group">
//           <h4>Sizes</h4>
//           {sizes.map((size) => (
//             <label key={size}>
//               <input
//                 type="checkbox"
//                 checked={selectedSizes.includes(size)}
//                 onChange={() => handleSizeChange(size)}
//               />
//               {size}
//             </label>
//           ))}
//         </div>

//         {/* Material Filters */}
//         <div className="filter-group">
//           <h4>Materials</h4>
//           {materials.map((material) => (
//             <label key={material}>
//               <input
//                 type="checkbox"
//                 checked={selectedMaterials.includes(material)}
//                 onChange={() => handleMaterialChange(material)}
//               />
//               {material}
//             </label>
//           ))}
//         </div>
//       </aside>

//       {/* Product Grid */}
//       <section className="products">
//         <h2>Showing {products.length} Products</h2>
//         <div className="product-grid">
//           {products.map((product) => (
//             <div key={product._id} className="product-card">
//               <img src={product.image} alt={product.name} className="product-img" />
//               <h4>{product.name}</h4>
//               <p>${product.price}</p>
//               <p>{product.material}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ProductListing;
