import React from 'react';
import Navbar from './components/Navbar';
import Splash from './components/Splash';
import Testimonials from './components/Testimonials';
// import ReviewCard from './components/ReviewCard';
// import reviews from './review_data';
import './App.css';

function App() {
  let testimonial= "Street Eats is the best food review site that has ever been built. Now I can pick the best food cart with confidence instead of wondering if I'm getting a raw deal."
  return(
    <div className="App">
      <Navbar/>
      <Splash/>
      <Testimonials userTestimonial={testimonial}/>
      <div className = "container">
        <div className="row">

        </div>
      </div>
    </div>
  );
}

export default App;
