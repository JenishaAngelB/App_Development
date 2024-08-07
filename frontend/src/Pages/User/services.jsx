import React from 'react';
import { Link } from 'react-router-dom';
import '../../Assets/CSS/services.css';
import img1 from '../../Assets/Images/air.jpg';
import img2 from '../../Assets/Images/ship.jpg';
import img3 from '../../Assets/Images/landdo.jpg';
import img4 from '../../Assets/Images/landin.jpg';
import img5 from '../../Assets/Images/warehouse.jpg';
import img6 from '../../Assets/Images/special.jpg';
import Navbar from '../../Components/navbar';
import Footer from '../../Components/footer';

const services = [
  { id: 1, title: 'Air Ways', type: 'Logistics Services', description: 'Efficient and reliable air transportation services for all your cargo needs.', addOns: ['Express Delivery', 'Cargo Insurance'], buttonText: 'Book now', price: 'From USD 200* per kg', route: 'Global Coverage', image: img1, link: '/shipments' },
  { id: 2, title: 'Ocean Lines', type: 'Logistics Services', description: 'Secure and timely water transportation services for bulk and containerized goods.', addOns: ['Ocean Contract', 'Cargo Tracking'], buttonText: 'Book now', price: 'From USD 50* per container', route: 'Worldwide Routes', image: img2, link: '/shipments' },
  { id: 3, title: 'Land (Domestic)', type: 'Logistics Services', description: 'Domestic land transportation services ensuring swift and safe delivery.', addOns: ['Real-time Tracking', 'Warehousing'], buttonText: 'Inquire Now', price: 'From USD 100* per ton', route: 'Nationwide', image: img3, link: '/shipments' },
  { id: 4, title: 'Land (International)', type: 'Logistics Services', description: 'Cross-border land transportation services for international deliveries.', addOns: ['Customs Clearance', 'Freight Forwarding'], buttonText: 'Inquire Now', price: 'From USD 150* per ton', route: 'Cross-border', image: img4, link: '/shipments' },
  { id: 5, title: 'Warehouse Facilities', type: 'Logistics Services', description: 'Comprehensive warehousing solutions to store and manage your inventory with ease.', addOns: ['24/7 Security', 'Inventory Management'], buttonText: 'Learn More', price: 'Flexible pricing based on storage size', route: 'Multiple Locations', image: img5, link: '/inventory' }, 
  { id: 6, title: 'Special Cargo', type: 'Logistics Services', description: 'Request a shipping quote for an ocean shipment exceeding the dimensions of our standard containers.', addOns: ['A strong global network', 'Easy access to space'], buttonText: 'Learn More', price: 'From USD 250* per ton', route: 'Multiple Locations', image: img6, link: '/shipments' },
];

const Services = () => {
  return (
    <div className="services-page">
      <Navbar />
      <h1>Explore Our Comprehensive Logistics Services</h1>
      <main className="services-list">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <div className="service-image" style={{ backgroundImage: `url(${service.image})` }}></div>
            <div className="service-content">
              <h2>{service.title}</h2>
              <span className="service-type">{service.type}</span>
              <p>{service.description}</p>
              <div className="add-ons">
                {service.addOns.map(addOn => (
                  <span key={addOn} className="add-on">{addOn}</span>
                ))}
              </div>
              {service.price && <p>{service.price}</p>}
              {service.route && <p>{service.route}</p>}
              <Link to={service.link}>
                <button className="primary-button">{service.buttonText}</button>
              </Link>
            </div>
          </div>
        ))}
      </main>
      <Footer/>
    </div>
  );
};

export default Services;
