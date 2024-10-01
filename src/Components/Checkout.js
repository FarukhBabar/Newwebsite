import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Fixed imports
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './checkout.css';

const stripePromise = loadStripe('pk_test_51PYLCyRrKUSfNnmkEnMx3BB1lHJc1V9qAiXFMjFsha5jbN8rSKOFd1YJFb6wj88zPxY5VpZKzz4Re6rubztuSeCh00O0C7585R'); // Replace with your Stripe publishable key

const CheckoutForm = ({ cartItems, quantities, calculateTotal }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate(); // Ensure navigate is defined

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
          // Create PaymentIntent
          const paymentIntentResponse = await axios.post('https://api.homeessentialshive.co.uk/api/payment_intents', {
            amount: totalAmount
          });
          const { clientSecret } = paymentIntentResponse.data;

          // Confirm Payment
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
          } else if (paymentResult.paymentIntent.status === 'succeeded') {
            // Save the order in the database
            const orderResponse = await axios.post('https://api.homeessentialshive.co.uk/api/orders', {
              ...values,
              cartItems,
              quantities,
              totalAmount,
              paymentStatus: paymentResult.paymentIntent.status
            });
            alert('Order placed successfully');
            navigate("/thank-you"); // Ensure navigate is used correctly
            console.log(orderResponse.data);
          }
        } else {
          // Handle Cash on Delivery
          const orderResponse = await axios.post('https://api.homeessentialshive.co.uk/api/orders', {
            ...values,
            cartItems,
            quantities,
            totalAmount,
            paymentMethod,
            
          });
        //   alert('Order placed successfully');
          navigate("/thank-you"); // Ensure navigate is used correctly
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
        <div className="col-12">
          {/* Form Fields */}
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              {...formik.getFieldProps('name')}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-danger">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-danger">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input
              type="text"
              className="form-control"
              name="phone"
              {...formik.getFieldProps('phone')}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div className="text-danger">{formik.errors.phone}</div>
            ) : null}
          </div>
          <div className="mb-3">
            <label className="form-label">Address</label>
            <input
              type="text"
              className="form-control"
              name="address"
              {...formik.getFieldProps('address')}
            />
            {formik.touched.address && formik.errors.address ? (
              <div className="text-danger">{formik.errors.address}</div>
            ) : null}
          </div>
          <div className="mb-3">
            <label className="form-label">City</label>
            <input
              type="text"
              className="form-control"
              name="city"
              {...formik.getFieldProps('city')}
            />
            {formik.touched.city && formik.errors.city ? (
              <div className="text-danger">{formik.errors.city}</div>
            ) : null}
          </div>
          <div className="mb-3">
            <label className="form-label">ZIP Code</label>
            <input
              type="text"
              className="form-control"
              name="zip"
              {...formik.getFieldProps('zip')}
            />
            {formik.touched.zip && formik.errors.zip ? (
              <div className="text-danger">{formik.errors.zip}</div>
            ) : null}
          </div>
          <div className="mb-3">
            <label className="form-label">Country</label>
            <input
              type="text"
              className="form-control"
              name="country"
              {...formik.getFieldProps('country')}
            />
            {formik.touched.country && formik.errors.country ? (
              <div className="text-danger">{formik.errors.country}</div>
            ) : null}
          </div>
        </div>
      </div>

      <div className="mb-3">
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
        <div className="my-4">
          <label className="form-label">Card Details</label>
          <CardElement className="form-control card-element" />
        </div>
      )}

      <div className="text-end mt-4">
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Processing...' : 'Place Order'}
        </button>
      </div>
    </form>
  );
};

const Checkout = () => {
  const location = useLocation(); // Ensure useLocation is used correctly
  const navigate = useNavigate(); // Ensure navigate is defined
  const { cartItems, quantities } = location.state;

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + (parseFloat(item.price) || 0) * (quantities[item.id] || item.qty),
      0
    ).toFixed(2);
  };

  return (
    <Elements stripe={stripePromise}>
      <div className="checkout">
        <div className="row">
          <div className="col-xl-8">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Billing Information</h4>
                <CheckoutForm cartItems={cartItems} quantities={quantities} calculateTotal={calculateTotal} />
              </div>
            </div>
            <div className="row my-4">
              <div className="col">
                <Link to="/" className="btn btn-link text-muted">
                  <i className="mdi mdi-arrow-left"></i> Continue Shopping
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Order Summary</h4>
                <ul className="list-group list-group-flush">
                  {cartItems.map(item => (
                    <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                      <div>
                        <img
                          src={`https://api.homeessentialshive.co.uk/${item.image.replace(/\\/g, '/')}`}
                          alt={item.name}
                          className="singleimg"
                          style={{ width: '80px', height: '80px' }}
                        />
                        <span>{item.name}</span>
                      </div>
                      <span>${parseFloat(item.price).toFixed(2)}</span>
                    </li>
                  ))}
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span>Shipping</span>
                    <span>$25.00</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span>Tax</span>
                    <span>$18.20</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center fw-bold">
                    <span>Total</span>
                    <span>${(parseFloat(calculateTotal()) + 25 + 18.20).toFixed(2)}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Elements>
  );
};

export default Checkout;
