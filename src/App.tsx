import { Form, Container, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
//.....
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      gitHubUsername: '',
      blogUrl: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .matches(
          /^[a-zA-Z0-9 ]+$/,
          'Name must be letters, dashes, numbers, or spaces'
        )
        .required('Required'),
      email: Yup.string().email('farahmehr1@gmail.com').required('Required'),
      gitHubUsername: Yup.string()
        .min(5, 'Must be at least 5 characters')
        .max(15, 'Must be at most 15 characters')
        .required(),
      blogUrl: Yup.string().url('Must be a valid URL'),
    }),
    onSubmit: (values) => {
      // Here, you handle what you want to do with the form data when the form is submitted.
      // For instance, sending the data to a server.
      console.log(values);
    },
  });

  return (
    <Container fluid className="signup-form">
      <Form method="post" action="#" onSubmit={formik.handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <Form.Text className="text-muted">{formik.errors.name}</Form.Text>
          ) : null}
        </Form.Group>

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <Form.Text className="text-muted">{formik.errors.email}</Form.Text>
          ) : null}
        </Form.Group>

        <Form.Group>
          <Form.Label>GitHub Username</Form.Label>
          <Form.Control
            id="gitHubUsername"
            name="gitHubUsername"
            type="text"
            placeholder="Enter your GitHub Username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.gitHubUsername}
          />
          {formik.touched.gitHubUsername && formik.errors.gitHubUsername ? (
            <Form.Text className="text-muted">
              {formik.errors.gitHubUsername}
            </Form.Text>
          ) : null}
        </Form.Group>

        <Form.Group>
          <Form.Label>Blog URL</Form.Label>
          <Form.Control
            id="blogUrl"
            name="blogUrl"
            type="url"
            placeholder="Enter your Blog URL"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.blogUrl}
          />
          {formik.touched.blogUrl && formik.errors.blogUrl ? (
            <Form.Text className="text-muted">
              {formik.errors.blogUrl}
            </Form.Text>
          ) : null}
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default App;
