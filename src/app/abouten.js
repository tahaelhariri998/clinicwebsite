import React from 'react';

const AboutComponent = () => {
  return (
    <>
      <div>
        <title>About Us - Next Graft</title>
        <meta name="description" content="Learn about Next Graft's innovative and personalized approach to hair transplantation." />
      </div>

      <main className="bg-gray-100 text-gray-800 font-sans leading-relaxed">
        <section className="bg-[#FF9500] text-white py-12">
          <div className="container mx-auto px-6 lg:px-20 text-center">
            <h1 className="text-4xl font-bold mb-4">About Us - Next Graft</h1>
            <p className="text-lg">Welcome to Next Graft, where innovation meets expertise to redefine your natural beauty.</p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-6 lg:px-20">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Exclusive Partnerships</h2>
            <p className="text-lg mb-6">We've built a network of strategic partnerships with the best hair transplant clinics in Turkey and the UAE, giving you direct access to leading hair transplant experts and the latest industry technologies. These partnerships ensure you receive the highest quality medical services while maintaining privacy and individual attention.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Compare and Choose the Best at Competitive Prices</h2>
            <p className="text-lg mb-6">At Next Graft, we understand the importance of choice and value. We provide a platform that allows you to compare various services to choose what suits you at the best prices. Through us, you'll find detailed information about each clinic, making it easier to choose based on the criteria that matter to you.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">We Negotiate Directly with Clinics for You</h2>
            <p className="text-lg mb-6">We take on the responsibility of negotiating with clinics to ensure you get the best prices. Our specialized negotiation team works hard to ensure you receive exclusive offers available only through Next Graft. We always work in your interest to ensure a hassle-free experience at optimal cost.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Next Graft?</h2>
            <p className="text-lg">At Next Graft, we believe that trust and complete satisfaction are the foundation of our relationship with you. We offer professionalism, transparency, and complete support in your journey to restore your hair and confidence. Choose Next Graft, where quality and attention to detail meet to deliver an unforgettable experience.</p>
          </div>
        </section>

        <section className="bg-[#FF9500] text-white py-12">
          <div className="container mx-auto px-6 lg:px-20 text-center">
            <p className="text-lg">We look forward to taking care of you at Next Graft, where we make your hair transplant journey smoother and more successful.</p>
          </div>
        </section>
      </main>

      <style jsx>{`
        .container {
          max-width: 1200px;
        }
      `}</style>
    </>
  );
};

export default AboutComponent;
