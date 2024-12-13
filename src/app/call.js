import React from 'react';

const ContactUsComponent = () => {
  return (
    <>
      <div>
        <title>اتصل بنا - Next Graft</title>
        <meta name="description" content="Get in touch with Next Graft for support and inquiries via WhatsApp and email." />
      </div>

      <main className="bg-gray-100 text-gray-800 font-sans leading-relaxed">
        <section className="bg-[#FF9500] text-white py-12">
          <div className="container mx-auto px-6 lg:px-20 text-center">
            <h1 className="text-4xl font-bold mb-4">اتصل بنا  </h1>
            <p className="text-lg">نحن في 'Next Graft' نرحب بتواصلكم في أي وقت. نحن متاحون على مدار الساعة لتقديم الدعم والإجابة على استفساراتكم من خلال الواتساب والبريد الإلكتروني.</p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-6 lg:px-20">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">البريد الإلكتروني</h2>
            <p className="text-lg mb-6">
              يمكنكم التواصل معنا عبر البريد الإلكتروني: 
              <a href="mailto:info@nextgraft.com" className="text-[#FF9500]">info@nextgraft.com</a>
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">ساعات العمل</h2>
            <p className="text-lg mb-6">متاحون لخدمتكم 24 ساعة يوميًا، طوال أيام الأسبوع.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">تابعونا على وسائل التواصل الاجتماعي</h2>
            <p className="text-lg mb-6">كونوا على تواصل معنا من خلال متابعتنا على وسائل التواصل الاجتماعي للحصول على آخر الأخبار والتحديثات:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>
                <a href="https://instagram.com" target="_blank" className="text-[#FF9500]">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://tiktok.com" target="_blank" className="text-[#FF9500]">
                  TikTok
                </a>
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">اتصل بنا عبر الواتساب</h2>
            <a 
              href="https://wa.me/yourwhatsapplink" 
              className="inline-block px-6 py-3 bg-[#FF9500] text-white rounded-lg shadow-md hover:bg-[#e68a00] transition"
            >
              اتصل بنا عبر الواتساب
            </a>
          </div>
        </section>

        <section className="bg-[#FF9500] text-white py-12">
          <div className="container mx-auto px-6 lg:px-20 text-center">
            <p className="text-lg">في 'Next Graft'، نلتزم بتقديم أعلى مستويات الدعم والرعاية لعملائنا. نحن هنا لمساعدتكم ونتطلع إلى سماع منكم.</p>
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

export default ContactUsComponent;
