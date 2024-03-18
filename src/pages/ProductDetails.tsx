import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById, deleteProduct } from "../api/productApi";
import UpdateProductModal from "../Components/UpdateProductModal";
import { ProductType } from "../types/products.d";
//import { BeatLoader } from "react-spinners";

const ProductDetails = () => {
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<ProductType>();
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProductById(id);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleDelete = async () => {
    try {
      await deleteProduct(id);
      navigate("/");
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div>
      {product ? (
        <>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <button onClick={() => setModalOpen(true)}>Update Product</button>
          <button onClick={handleDelete}>Delete Product</button>
        </>
      ) : (
        <BeatLoader color="#36d7b7" />
      )}

      {isModalOpen && product && (
        <UpdateProductModal
          product={product}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
};

export default ProductDetails;