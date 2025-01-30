import React from 'react';

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Our Students Say</h2>
      <div className="testimonial-list">
        <div className="testimonial-item">
          <p>"This course was amazing! I learned so much about neural networks."</p>
          <cite>- Jane Doe</cite>
        </div>
        <div className="testimonial-item">
          <p>"The instructors are top-notch and the content is cutting-edge."</p>
          <cite>- John Smith</cite>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
