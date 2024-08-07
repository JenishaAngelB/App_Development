import React from 'react';
import { Link } from 'react-router-dom';
import '../../Assets/CSS/inventory.css';
import Navbar from '../../Components/navbar';
import oak from '../../Assets/Images/oak.jpg';
import pine from '../../Assets/Images/pine.jpg';
import maple from '../../Assets/Images/maple.jpg';
import teak from '../../Assets/Images/teak.webp';
import mahogany from '../../Assets/Images/mahogany.jpg';
import bamboo from '../../Assets/Images/bamboo.jpg';
import Footer from '../../Components/footer';

const items = [
  { name: 'Oak Wood', quantity: 100, image: oak, description: 'High-quality oak wood suitable for furniture and flooring.' },
  { name: 'Pine Wood', quantity: 150, image: pine, description: 'Versatile pine wood ideal for construction and crafts.' },
  { name: 'Maple Wood', quantity: 75, image: maple, description: 'Durable maple wood perfect for cabinets and countertops.' },
  { name: 'Teak Wood', quantity: 200, image: teak, description: 'Premium teak wood great for outdoor furniture and decking.' },
  { name: 'Mahogany Wood', quantity: 50, image: mahogany, description: 'Elegant mahogany wood for high-end furniture and interior design.' },
  { name: 'Bamboo', quantity: 300, image: bamboo, description: 'Eco-friendly bamboo for various uses including flooring and decoration.' },
];

const Inventory = () => {
  return (
    <div><Navbar />
    <div className='inventory'>
      <div className="inventory-container">
        <h1 className="inventory-title">Current Warehouse Inventory</h1>
        <div className="inventory-items">
          {items.map((item, index) => (
            <div key={index} className="inventory-item">
              <img src={item.image} alt={item.name} className="inventory-item-image" />
              <h3>{item.name}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>{item.description}</p>
              <Link to="/shipments">
                <button>Order</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Inventory;
