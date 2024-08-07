import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Assets/CSS/confirmation.css';

const ConfirmationPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to home page after 15 seconds
    const timer = setTimeout(() => {
      navigate('/');
    }, 15000);

    // Cleanup timer
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="confirmation-page">
      <h1>Order Confirmed!</h1>
      <p>Thank you for your order. Your order has been successfully placed.</p>
      <h2>Bill Details:</h2>
      <div className="bill-details">
        <p><strong>Order Number:</strong> #123456</p>
        <p><strong>Order Date:</strong> 2024-07-27</p>
        <p><strong>Total Amount:</strong> $123.45</p>
      </div>
      <p>You will be redirected to the home page in 15 seconds.</p>
    </div>
  );
}

export default ConfirmationPage;
