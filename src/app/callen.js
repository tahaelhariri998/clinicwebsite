import React from 'react';

const ContactUsComponent = () => {
  return (
    
    <>
      <div>
        <title>Contact Us - Next Graft</title>
        <meta name="description" content="Get in touch with Next Graft for support and inquiries via WhatsApp and email." />
      </div>

      <main  className="  bg-gray-100 text-gray-800 font-sans leading-relaxed">
        <section className="bg-[#FF9500] text-white py-12">
          <div className="container mx-auto px-6 lg:px-20 text-center">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg">
              At Next Graft, we welcome your communication anytime. We're available 24/7 to provide support and answer your inquiries through WhatsApp and email.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-6 lg:px-20">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Email</h2>
            <p className="text-lg mb-6">
              You can contact us via email at: 
              <a href="mailto:info@nextgraft.com" className="text-[#FF9500]"> info@nextgraft.com</a>
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Working Hours</h2>
            <p className="text-lg mb-6">We are available to serve you 24 hours daily, throughout the week.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Follow Us on Social Media</h2>
            <p className="text-lg mb-6">
              Stay connected with us by following our social media for the latest news and updates:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#FF9500]">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-[#FF9500]">
                  TikTok
                </a>
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us via WhatsApp</h2>
            <a 
              href="https://wa.me/yourwhatsapplink" 
              className="inline-block px-6 py-3 bg-[#FF9500] text-white rounded-lg shadow-md hover:bg-[#e68a00] transition"
            >
              Contact us via WhatsApp
            </a>
          </div>
        </section>

        <section className="bg-[#FF9500] text-white py-12">
          <div className="container mx-auto px-6 lg:px-20 text-center">
            <p className="text-lg">
              At Next Graft, we are committed to providing the highest levels of support and care to our clients. We're here to help and look forward to hearing from you.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactUsComponent;
