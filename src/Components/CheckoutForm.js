// src/components/CheckoutForm.js

import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({ cartItems, quantities, calculateTotal }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      zip: '',
      country: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      phone: Yup.string().required('Required'),
      address: Yup.string().required('Required'),
      city: Yup.string().required('Required'),
      zip: Yup.string().required('Required'),
      country: Yup.string().required('Required'),
    }),
    onSubmit: async values => {
      setLoading(true);
      const totalAmount = parseFloat(calculateTotal()) + 25 + 18.20;
      try {
        if (paymentMethod === 'card') {
          // Create payment intent on the server
          const paymentIntentResponse = await axios.post('https://api.homeessentialshive.co.uk/api/payment_intents', {
            amount: totalAmount
          });
          const { clientSecret } = paymentIntentResponse.data;

          // Confirm the payment on the client
          const cardElement = elements.getElement(CardElement);
          const paymentResult = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
              card: cardElement,
              billing_details: {
                name: values.name,
                email: values.email,
                phone: values.phone,
                address: {
                  line1: values.address,
                  city: values.city,
                  postal_code: values.zip,
                  country: values.country,
                },
              },
            },
          });

          if (paymentResult.error) {
            alert(`Payment failed: ${paymentResult.error.message}`);
            setLoading(false);
          } else if (paymentResult.paymentIntent.status === 'succeeded') {
            // Save the order in the database
            const orderResponse = await axios.post('https://api.homeessentialshive.co.uk/api/orders', {
              ...values,
              cartItems,
              quantities,
              totalAmount
            });
            // alert('Order placed successfully');
            navigate("/thank-you");
            console.log(orderResponse.data);
          }
        } else {
          // Handle Cash on Delivery
          const orderResponse = await axios.post('https://api.homeessentialshive.co.uk/api/orders', {
            ...values,
            cartItems,
            quantities,
            totalAmount,
            paymentMethod
          });
          alert('Order placed successfully');
          navigate("/thank-you");
        }
      } catch (error) {
        console.error('Error placing order:', error);
        alert('There was an error placing your order.');
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="checkout-form">
      <div className="row">
        <div className="col-lg-6 mb-3">
          <label className="form-label" htmlFor="billing-name">Name</label>
          <input
            type="text"
            className="form-control"
            id="billing-name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter name"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="col-lg-6 mb-3">
          <label className="form-label" htmlFor="billing-email-address">Email Address</label>
          <input
            type="email"
            className="form-control"
            id="billing-email-address"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter email"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 mb-3">
          <label className="form-label" htmlFor="billing-phone">Phone</label>
          <input
            type="text"
            className="form-control"
            id="billing-phone"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter Phone no."
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className="error">{formik.errors.phone}</div>
          ) : null}
        </div>
        <div className="col-lg-6 mb-3">
          <label className="form-label" htmlFor="billing-address">Address</label>
          <input
            type="text"
            className="form-control"
            id="billing-address"
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter full address"
          />
          {formik.touched.address && formik.errors.address ? (
            <div className="error">{formik.errors.address}</div>
          ) : null}
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 mb-3">
          <label className="form-label">Country</label>
          <input
            type='text'
            className="form-control"
            placeholder='Enter Country'
            name='country'
            value={formik.values.country}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.country && formik.errors.country ? (
            <div className="error">{formik.errors.country}</div>
          ) : null}
        </div>
        <div className="col-lg-6 mb-3">
          <label className="form-label" htmlFor="billing-city">City</label>
          <input
            type="text"
            className="form-control"
            id="billing-city"
            name="city"
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter City"
          />
          {formik.touched.city && formik.errors.city ? (
            <div className="error">{formik.errors.city}</div>
          ) : null}
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 mb-3">
          <label className="form-label" htmlFor="zip-code">Postal code</label>
          <input
            type="text"
            className="form-control"
            id="zip-code"
            name="zip"
            value={formik.values.zip}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter Postal code"
          />
          {formik.touched.zip && formik.errors.zip ? (
            <div className="error">{formik.errors.zip}</div>
          ) : null}
        </div>
        <div className="col-lg-6 mb-3">
          <label className="form-label">Payment Method</label>
          <div>
            <input
              type="radio"
              id="card"
              name="paymentMethod"
              value="card"
              checked={paymentMethod === 'card'}
              onChange={() => setPaymentMethod('card')}
            />
            <label htmlFor="card">Card</label>
            <input
              type="radio"
              id="cod"
              name="paymentMethod"
              value="cod"
              checked={paymentMethod === 'cod'}
              onChange={() => setPaymentMethod('cod')}
            />
            <label htmlFor="cod">Cash on Delivery</label>
          </div>
        </div>
        {paymentMethod === 'card' && (
          <div className="col-lg-6 mb-3">
            <label className="form-label">Card Details</label>
            <CardElement className="form-control card-element" />
          </div>
        )}
      </div>

      <div className="text-end mt-4">
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Processing...' : 'Place Order'}
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
