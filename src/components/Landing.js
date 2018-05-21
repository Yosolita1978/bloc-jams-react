import React from 'react';

const Landing = () => (
  <section className="landing">
    <h1 className="hero-title">Turn the Colombian music up!</h1>
    
    <section className="selling-points">
      <div className="point">
        <h2 className="point-title">Learn about Colombia's music</h2>
        <p className="point-description">Colombia is full of music; why should you have to listen to music that someone else chose?</p>
      </div>
      <div className="point">
        <h2 className="point-title">Unlimited, streaming, ad-free</h2>
        <p className="point-description">No arbitrary limits. No distractions.</p>
      </div>
      <div className="point">
        <h2 className="point-title">Mobile enabled</h2>
        <p className="point-description">Listen Colombia's music on the go. This streaming service is available on all mobile platforms.</p>
      </div>
    </section>
   </section>
 );

export default Landing;