import React from 'react';
import "./card.scss";
import { Link } from "gatsby";

const Card = ({ frontImage, tinyImage, icon, service, management, check }) => {

  return (
    <Link to={`/services/photography`} className={`card card__${service}`}>
      
      <div className="card__side card__side--front" >
      
        <div className="overlay-background-image" />
        
        <div className="card__side--text">
          <img src={icon} className="card__icon" alt="" /> 
          <h2>{service}</h2>
        </div>
      </div>
      
      <div className={`card__side card__side--back backImage__${service}`}>
        {!management 
          ? <button to={`/services/${service}`} className="btn btn-gallery">View Gallery</button>
          :
          <React.Fragment>
            <div className="overlay-background-image management-background"/>
            <div className="management-info">
            
              <div className="management-info__item">
              
                <div className="management-info__item--top">
                  <img src={check} alt="check" />
                  <h3>Management</h3>
                </div>
  
                <p>-Email for quote</p>
              </div>
              
              <div className="management-info__item">
                <div className="management-info__item--top">
                  <img src={check} alt="check" />
                  <h3>Booking</h3>
                </div>
  
                <p>-Email for quote</p>
              </div>
              
              <div className="management-info__item">
                <div className="management-info__item--top">
                  <img src={check} alt="check" />
                  <h3>Tour Management</h3>
                </div>
  
                <p>-$65-$150 a day</p>
              </div>
              
            </div>
          </React.Fragment>
          
        }  
      </div>
      
    </Link>
  );
};

export default Card;