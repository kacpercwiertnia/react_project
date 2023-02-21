import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/forms.css';

const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

const validationSchema = Yup.object().shape({
    email: Yup.string()
    .email("Adres Email musi być poprawny, np: nazwa@domena.pl.")
    .max(100, "Adres Email nie może być dłuższy niz 100 znaków.")
    .required("Adres Email jest wymagany."),
    password: Yup.string()
    .required("Hasło jest wymagane.")
    .matches(passwordRegExp, "Hasło musi mieć co najmniej 8 znaków, w tym jedną wielką literę, jedną małą literę, jeden znak specjalny i jedną cyfrę."),
  });

const LoginComponent = () => {
    return (
        <Container className='mt-3'>
            <Row>
                <Col></Col>
                <Col xs={10} sm={10} md={8} lg={6}>
                    <Formik
                    initialValues={{email: "", password: ""}}
                    validationSchema={validationSchema}
                    onSubmit={(values, {setSubmitting, resetForm}) => {
                        setSubmitting(true);
                        resetForm();
                        setSubmitting(false);
                    }}>
                    {( {values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting }) => (
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formEmail">
                            <Form.Label>Adres Email</Form.Label>
                            <Form.Control
                                type="text"
                                name="email"
                                placeholder="Adres Email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                className={touched.email && errors.email ? "error" : null}
                            />
                            {touched.email && errors.email ? (
                            <div className="error-message">{errors.email}</div>
                            ): null}
                            </Form.Group>
                            <Form.Group controlId="formPassword">
                            <Form.Label>Hasło</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                placeholder="Hasło"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                className={touched.password && errors.password ? "error" : null}
                            />
                            {touched.password && errors.password ? (
                            <div className="error-message">{errors.password}</div>
                            ): null}
                            </Form.Group>
                        <Button variant="primary" type="submit" disabled={isSubmitting}>Zaloguj się</Button>
                        </Form>
                    )}
                    </Formik>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
};

export default LoginComponent;