import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


interface ProductFormProps {
  initialValues: {
    name: string;
    price: number;
    description: string;
    image?: string;
  };
  onSubmit: (values: any) => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ initialValues, onSubmit }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    price: Yup.number().required('Price is required').min(0, 'Price must be greater than or equal to 0'),
    description: Yup.string().required('Description is required'),
    image: Yup.string().url('Image must be a valid URL')
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      <Form>
        <div>
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <Field type="number" id="price" name="price" />
          <ErrorMessage name="price" component="div" />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <Field as="textarea" id="description" name="description" />
          <ErrorMessage name="description" component="div" />
        </div>
        <div>
          <label htmlFor="image">Image URL</label>
          <Field type="text" id="image" name="image" />
          <ErrorMessage name="image" component="div" />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default ProductForm;
