
import { Formik, Form, Field } from "formik";
import { updateProduct } from "../api/productApi";
import { ProductType } from "../types/products";

interface UpdateProductModalProps {
  product: ProductType;
  onClose: () => void;
}

const UpdateProductModal = ({ product, onClose }: UpdateProductModalProps) => {
  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <Formik
        initialValues={{
          id: product.id,
          title: product.title,
          price: product.price,
          description: product.description,
          category: product.category,
          image: product.image,
        }}
        onSubmit={async (values) => {
          try {
            await updateProduct(product.id ?? "1", values);
            onClose();
          } catch (error) {
            console.error("Failed to update product", error);
          }
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Field name="title" type="text" />
            <Field name="price" type="text" />
            <Field name="description" type="text" />
            <Field name="category" type="text" />
            <Field name="image" type="text" />
            <button type="submit">Update Product</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UpdateProductModal;
