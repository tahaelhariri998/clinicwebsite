import React from 'react';

const TermsConditionsComponent = () => {
  return (
    <>
      <div>
        <title>Terms and Conditions - Next Graft</title>
        <meta name="description" content="Learn about the terms and conditions for using Next Graft's website and services." />
      </div>

      <main className="bg-gray-100 text-gray-800 font-sans leading-relaxed">
        <section className="bg-[#FF9500] text-white py-12">
          <div className="container mx-auto px-6 lg:px-20 text-center">
            <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
            <p className="text-lg">Welcome to Next Graft. This section covers the legal terms governing your use of our website and services.</p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-6 lg:px-20">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-lg mb-6">Welcome to Next Graft. This section covers the legal terms governing your use of our website and services. By entering and using the Next Graft website, you expressly agree to comply with these terms and conditions.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Intellectual Property Rights</h2>
            <p className="text-lg mb-6">All content published on the website, including texts, images, icons, graphics, software, and other materials, is protected property of Next Graft or third parties. It may only be used in accordance with these terms.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Obligations</h2>
            <p className="text-lg mb-6">As a user, you agree not to use the website for any illegal purposes and to refrain from any activity that may obstruct or interfere with the operation of the website or the services we provide.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Services Provided</h2>
            <p className="text-lg mb-6">The website specifies the services provided by Next Graft, which include hair transplant consultations, surgeries, and more. Please review each service description carefully before committing.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Changes to Services and Terms</h2>
            <p className="text-lg mb-6">Next Graft reserves the right to modify or discontinue any services or terms of use at any time without prior notice.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Cancellation and Refunds</h2>
            <p className="text-lg mb-6">Cancellations and refunds are subject to a specific policy published on the website. Customers must comply with this policy and understand related terms before making any transactions.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Governing Law and Jurisdiction</h2>
            <p className="text-lg mb-6">These terms and conditions are governed by and interpreted according to the laws of the United Arab Emirates. Courts in Dubai shall have exclusive jurisdiction over any dispute arising from or relating to these terms and conditions.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact</h2>
            <p className="text-lg mb-6">For any inquiries or comments regarding these terms and conditions, please contact us via email at <a href="mailto:info@nextgraft.com" className="text-[#FF9500]">info@nextgraft.com</a>.</p>
          </div>
        </section>

        <section className="bg-[#FF9500] text-white py-12">
          <div className="container mx-auto px-6 lg:px-20 text-center">
            <p className="text-lg">We look forward to serving you and providing the best experience with Next Graft.</p>
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

export default TermsConditionsComponent;
