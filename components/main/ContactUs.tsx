import React from 'react';
import Button from '../Button';

const ContactUs = () => {
  return (
    <div className="myContainer">
      <div className="bg-dimYellow min-h-[85vh] myFlex flex-col justify-center p-6 text-center">
        <div className="max-w-[658px]">
          <h2>
          Your journey to innovation starts here. Let’s build the future together.
          </h2>
          <Button
            cta="Get Started Now"
            className="bg-primary mt-3 text-white"
            polycolor="bg-dimYellow"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
