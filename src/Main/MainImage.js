import { Link } from 'react-router-dom';
import './MainImage.css';

const MainImage = ({ image }) => {
  return (
    <Link to="/product-details">
      <div className="main-image-container">
        <img src={image} alt="Main Product" className="main-image" />
      </div>
    </Link>
  );
};

export default MainImage;