import React from 'react';

const SingleDestination = (props) => {
  const { name, image, description } = props.destination;
  return (
    <div>
      <div className="card mb-3">
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description.slice(0, 120)}</p>
            <p className="card-text">
              <button className="btn btn-info">Book a trip</button>
            </p>
          </div>
        </div>
    </div>
  );
};

export default SingleDestination;