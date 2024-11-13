import React from 'react';
import '.../styles/ImageCard.css';

const ImageCard = ({ imageSrc, title, description, buttonText, onButtonClick }) => {
  return (
    <div className="image-card">
      <img src={imageSrc} alt={title} className="image-card-img" />
      <div className="image-card-content">
        <h3 className="image-card-title">{title}</h3>
        <p className="image-card-description">{description}</p>
        <button className="image-card-button" onClick={onButtonClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ImageCard;
