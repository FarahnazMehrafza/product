
import { useFormik } from "formik";
import * as Yup from "yup";
import { createProduct } from "../api/productApi";

const productSchema = Yup.object().shape({
  title: Yup.string().required("Product name is required"),
  price: Yup.string()
    .matches(
      /^\d+(\.\d{1,2})?$/,
      "Price must be a positive number, with up to two decimal places"
    )
    .required("Price is required"),
  category: Yup.string().required("Category is required"),
  description: Yup.string().required("Description is required"),
  image: Yup.string().url("Must be a valid URL").required("Image is required"),
});

const AddProduct = () => {
  const formik = useFormik({
    initialValues: {
 
      title: "",
      price: "",
      category: "",
      description: "",
      image: "",
    },
    validationSchema: productSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await createProduct(values);
        console.log("Product added successfully", response.data);
        resetForm({});
      } catch (error) {
        console.error("Failed to add product", error);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        name="title"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.title}
        onBlur={formik.handleBlur}
      />
      {formik.touched.title && formik.errors.title && (
        <div>{formik.errors.title}</div>
      )}

      <label htmlFor="price">Price</label>
      <input
        id="price"
        name="price"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.price}
        onBlur={formik.handleBlur}
      />
      {formik.touched.price && formik.errors.price && (
        <div>{formik.errors.price}</div>
      )}

      <label htmlFor="category">Category</label>
      <input
        id="category"
        name="category"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.category}
        onBlur={formik.handleBlur}
      />
      {formik.touched.category && formik.errors.category && (
        <div>{formik.errors.category}</div>
      )}

      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        name="description"
        onChange={formik.handleChange}
        value={formik.values.description}
        onBlur={formik.handleBlur}
      />
      {formik.touched.description && formik.errors.description && (
        <div>{formik.errors.description}</div>
      )}

      <label htmlFor="image">Image URL</label>
      <input
        id="image"
        name="image"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.image}
        onBlur={formik.handleBlur}
      />
      {formik.touched.image && formik.errors.image && (
        <div>{formik.errors.image}</div>
      )}

      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;
