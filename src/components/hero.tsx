import React from "react";

const Hero = () => {
  return (
    <main
      className="hero min-h-[80vh]"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/1036804/pexels-photo-1036804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
      }}
    >
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-2 text-5xl font-bold">SocialSync</h1>
          <h2 className="mb-4 text-2xl font-bold">
            Effortlessly Plan, Sync, and Celebrate Together
          </h2>
          <p className="mb-4">
            Seamlessly coordinate events, share plans with friends,
            and make every occasion unforgettable. Simplify your
            social life with intuitive tools designed to bring people
            closer.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </main>
  );
};

export default Hero;
