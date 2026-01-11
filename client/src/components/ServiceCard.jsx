import { Link } from 'react-router-dom';
import '../styles/ServiceCard.css';

const ServiceCard = ({ title, description, icon, link }) => {
    return (
        <div className="service-card">
            <div className="service-icon">{icon}</div>
            <h3 className="service-title">{title}</h3>
            <p className="service-description">{description}</p>
            <Link to={link || "/book"} className="service-link">
                Learn More &rarr;
            </Link>
        </div>
    );
};

export default ServiceCard;
