import React from 'react';
import './css/Testimonials.css';

function Testimonial(props) {
  console.log(props)
  return(
    <div className="Testimonials">
      <div className="row">
        <div className="col-6 offset-3 testimonial">
          <h3 className="secondary-text-testimonial">Testimonials</h3>
          <p className="paragraph-text">{props.userTestimonial}</p>
        </div>
      </div>
    </div>
  );
}
 
export default Testimonial;
