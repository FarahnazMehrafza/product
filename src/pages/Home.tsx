import { useState, useEffect } from "react";
import { getAllProducts } from "../api/productApi"
import ProductCard from "../Components/ProductCard";
import { ProductType } from "../types/products";

const Home = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllProducts();
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
          category={product.category}
        />
      ))}

      
    </>
  );
};

export default Home;