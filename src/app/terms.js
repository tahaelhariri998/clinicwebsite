import React from 'react';

const TermsConditionsComponent = () => {
  return (
    <>
      <div>
        <title>الشروط والأحكام </title>
        <meta name="description" content="Learn about the terms and conditions for using Next Graft's website and services." />
      </div>

      <main className="bg-gray-100 text-gray-800 font-sans leading-relaxed">
        <section className="bg-[#FF9500] text-white py-12">
          <div className="container mx-auto px-6 lg:px-20 text-center">
            <h1 className="text-4xl font-bold mb-4">الشروط والأحكام  </h1>
            <p className="text-lg">مرحبًا بكم في Next Graft. يتناول هذا القسم الشروط القانونية التي تحكم استخدامك لموقعنا وخدماتنا.</p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-6 lg:px-20">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">مقدمة</h2>
            <p className="text-lg mb-6">مرحبًا بكم في Next Graft. يتناول هذا القسم الشروط القانونية التي تحكم استخدامك لموقعنا وخدماتنا. بدخولك واستخدامك لموقع Next Graft، أنت توافق صراحةً على التقيد بهذه الشروط والأحكام.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">حقوق الملكية الفكرية</h2>
            <p className="text-lg mb-6">كافة المحتويات المنشورة على الموقع، بما في ذلك النصوص، الصور، الأيقونات، الرسومات، البرامج وغيرها من المواد، هي ملكية محمية لـ Next Graft أو لأطراف ثالثة. لا يجوز استخدامها إلا بما يتفق مع هذه الشروط.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">التزامات المستخدم</h2>
            <p className="text-lg mb-6">توافق كمستخدم على عدم استخدام الموقع لأي أغراض غير قانونية، وأن تمتنع عن أي نشاط قد يعرقل أو يتداخل في عمل الموقع أو الخدمات التي نقدمها.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">الخدمات المقدمة</h2>
            <p className="text-lg mb-6">يوضح الموقع الخدمات التي تقدمها Next Graft، والتي تشمل استشارات وجراحات زراعة الشعر وغيرها. يرجى مراجعة وصف كل خدمة بعناية قبل الالتزام بها.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">التغييرات في الخدمات والشروط</h2>
            <p className="text-lg mb-6">يحتفظ Next Graft بالحق في تعديل أو إيقاف أي من الخدمات أو شروط الاستخدام في أي وقت دون إشعار مسبق.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">الإلغاء والاسترجاع</h2>
            <p className="text-lg mb-6">تخضع عمليات الإلغاء والاسترجاع لسياسة محددة يتم نشرها على الموقع. يتوجب على العملاء الالتزام بهذه السياسة وفهم الشروط المتعلقة بها قبل إجراء أي معاملات.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">القانون الحاكم والاختصاص القضائي</h2>
            <p className="text-lg mb-6">تخضع هذه الشروط والأحكام لقوانين دولة الإمارات العربية المتحدة وتفسر وفقًا لها. تكون المحاكم في دبي هي الاختصاص القضائي الحصري لأي نزاع ينشأ عن أو يتعلق بهذه الشروط والأحكام.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">التواصل</h2>
            <p className="text-lg mb-6">لأي استفسارات أو تعليقات بخصوص هذه الشروط والأحكام، يرجى الاتصال بنا عبر البريد الإلكتروني <a href="mailto:info@nextgraft.com" className="text-[#FF9500]">info@nextgraft.com</a>.</p>
          </div>
        </section>

        <section className="bg-[#FF9500] text-white py-12">
          <div className="container mx-auto px-6 lg:px-20 text-center">
            <p className="text-lg">نتطلع إلى خدمتكم وتقديم أفضل تجربة مع Next Graft.</p>
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
