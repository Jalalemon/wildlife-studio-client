import React from 'react';
import UseTitle from '../../assets/UseTitle';

const HeroBrand = () => {
    UseTitle('herobrand')
    return (
      <div className=" my-10 mx-auto">
        <div
          className="hero"
          style={{
            backgroundImage: `url("https://images.pexels.com/photos/1540977/pexels-photo-1540977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl text-primary font-bold">
                Wildlife Studio
              </h1>
              <p className="mb-5">
                Camera man royalty-free images. 1,324,460 camera man stock
                photos, vectors, and illustrations are available royalty-free.
                See camera man stock video clips.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default HeroBrand;