import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import oceanTransportImg from '../../Assets/Images/ship.jpg';
import airlineWayImg from '../../Assets/Images/air.jpg';
import roadwayImg from '../../Assets/Images/landdo.jpg';
import roadwayinImg from '../../Assets/Images/landin.jpg';
import warehouseImg from '../../Assets/Images/warehouse.jpg';
import specialcargo from '../../Assets/Images/special.jpg';
import Navbar from '../../Components/navbar';
import Footer from '../../Components/footer';
import '../../Assets/CSS/shipments.css';

const servicesData = [
  {
    title: 'Ocean Transport',
    image: oceanTransportImg,
    description: 'Reliable and cost-effective solution for shipping goods across seas and oceans.',
    cost: '$200',
    paymentOptions: ['Credit Card', 'UPI', 'Net Banking']
  },
  {
    title: 'Airline Way',
    image: airlineWayImg,
    description: 'Fast and efficient air cargo services for urgent and time-sensitive shipments.',
    cost: '$500',
    paymentOptions: ['Credit Card', 'UPI']
  },
  {
    title: 'Roadway(domestic)',
    image: roadwayImg,
    description: 'Flexible and convenient land transport for deliveries across cities and regions.',
    cost: '$150',
    paymentOptions: ['Credit Card', 'Net Banking']
  },
  {
    title: 'Roadway(international)',
    image: roadwayinImg,
    description: 'Flexible and convenient land transport for deliveries across cities and regions.',
    cost: '$250',
    paymentOptions: ['Credit Card', 'Net Banking']
  },
  {
    title: 'Warehouse Distribution',
    image: warehouseImg,
    description: 'Secure and organized storage solutions with effective distribution channels.',
    cost: '$100',
    paymentOptions: ['Credit Card', 'Net Banking']
  },
  {
    title: 'Special Cargo',
    image: specialcargo,
    description: 'Economical and environmentally friendly rail transport for bulk and large shipments.',
    cost: '$300',
    paymentOptions: ['Credit Card', 'UPI', 'Net Banking']
  },
];

const Shipments = () => {
  const [selectedService, setSelectedService] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [details, setDetails] = useState('');
  const [selectedPayment, setSelectedPayment] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [upiId, setUpiId] = useState('');
  const [barcode, setBarcode] = useState('');
  const [netBankingDetails, setNetBankingDetails] = useState('');
  const [warehouseItems, setWarehouseItems] = useState([{ item: '', quantity: 0 }]);
  const [containers, setContainers] = useState(0);
  const navigate = useNavigate();

  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
  };

  const handlePaymentChange = (event) => {
    setSelectedPayment(event.target.value);
  };

  const handleWarehouseItemChange = (index, field, value) => {
    const newWarehouseItems = [...warehouseItems];
    newWarehouseItems[index][field] = value;
    setWarehouseItems(newWarehouseItems);
  };

  const addWarehouseItem = () => {
    setWarehouseItems([...warehouseItems, { item: '', quantity: 0 }]);
  };

  const removeWarehouseItem = (index) => {
    const newWarehouseItems = warehouseItems.filter((_, i) => i !== index);
    setWarehouseItems(newWarehouseItems);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Booking Details:', {
      selectedService,
      customerName,
      contactInfo,
      details,
      selectedPayment,
      cardNumber,
      cvv,
      expiryDate,
      upiId,
      barcode,
      netBankingDetails,
      warehouseItems,
      containers
    });
    navigate('/confirmation', {
      state: {
        selectedService,
        customerName,
        contactInfo,
        details,
        selectedPayment,
        cardNumber,
        cvv,
        expiryDate,
        upiId,
        barcode,
        netBankingDetails,
        warehouseItems,
        containers
      }
    });
  };

  const serviceDetails = servicesData.find(service => service.title === selectedService);

  return (
    <div className='shipments'>
    <div className='shipments-navbar'>  <Navbar /> </div>
    <div className="shipments-page">
      <h1>Book Your Shipment</h1>
      
      <form className="booking-form" onSubmit={handleSubmit}>
        <label>
          Select Service:
          <select value={selectedService} onChange={handleServiceChange} required>
            <option value="" disabled>Select a service</option>
            {servicesData.map((service, index) => (
              <option key={index} value={service.title}>{service.title}</option>
            ))}
          </select>
        </label>

        {serviceDetails && (
          <div className="service-details">
            <h2>Service Details</h2>
            <img src={serviceDetails.image} alt={serviceDetails.title} />
            <p><strong>Description:</strong> {serviceDetails.description}</p>
            <p><strong>Cost:</strong> {serviceDetails.cost}</p>
            <label>
              Payment Option:
              <select value={selectedPayment} onChange={handlePaymentChange} required>
                <option value="" disabled>Select a payment method</option>
                {serviceDetails.paymentOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </label>
          </div>
        )}

        {selectedService === 'Warehouse Distribution' && (
          <div className="warehouse-items">
            <h3>Warehouse Items</h3>
            {warehouseItems.map((item, index) => (
              <div key={index} className="warehouse-item">
                <label>
                  Item:
                  <input
                    type="text"
                    value={item.item}
                    onChange={(e) => handleWarehouseItemChange(index, 'item', e.target.value)}
                    required
                  />
                </label>
                <label>
                  Quantity:
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleWarehouseItemChange(index, 'quantity', e.target.value)}
                    required
                  />
                </label>
                <button type="button" onClick={() => removeWarehouseItem(index)}>Remove Item</button>
              </div>
            ))}
            <button type="button" onClick={addWarehouseItem}>Add Item</button>
          </div>
        )}


        {selectedPayment === 'Credit Card' && (
          <div className="payment-details">
            <label>
              Card Number:
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
              />
            </label>
            <label>
              CVV:
              <input
                type="text"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                required
              />
            </label>
            <label>
              Expiry Date:
              <input
                type="text"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                required
              />
            </label>
          </div>
        )}

        {selectedPayment === 'UPI' && (
          <div className="payment-details">
            <label>
              UPI ID:
              <input
                type="text"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                required
              />
            </label>
            <label>
              Barcode:
              <input
                type="text"
                value={barcode}
                onChange={(e) => setBarcode(e.target.value)}
              />
            </label>
          </div>
        )}

        {selectedPayment === 'Net Banking' && (
          <div className="payment-details">
            <label>
              Net Banking Details:
              <textarea
                value={netBankingDetails}
                onChange={(e) => setNetBankingDetails(e.target.value)}
                required
              />
            </label>
          </div>
        )}
        <br/>
{selectedService !== 'Warehouse Distribution' && (
          <div className="container-input">
            <label>
              Number of Containers:
              <input
                type="number"
                value={containers}
                onChange={(e) => setContainers(e.target.value)}
                required
              />
            </label>
          </div>
        )}
        <br/>
        <label>
          Name:
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
        </label>
        <label>
          Contact Information:
          <input
            type="text"
            value={contactInfo}
            onChange={(e) => setContactInfo(e.target.value)}
            required
          />
        </label>
        <label>
          Additional Details:
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </label>
        <label>
          <input type="checkbox" required />
          I agree to the <Link to="/terms">terms and conditions</Link>
        </label>
        <button type="submit">Book Now</button>
      </form>
    </div>
    <Footer /> 
    </div>
  );
};

export default Shipments;
