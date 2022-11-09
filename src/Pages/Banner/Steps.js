import React from 'react';
import UseTitle from '../../assets/UseTitle';

const Steps = () => {
    UseTitle('steps')
    return (
      <div>
        <ul className="steps">
          <li className="step step-info">Home</li>
          <li className="step ">show more</li>
          <li className="step">Purchase</li>
          <li className="step">Reviews</li>
        </ul>
      </div>
    );
};

export default Steps;