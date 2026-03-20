export function Founder() {
  return (
    <section id="founder" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">FOUNDER'S MESSAGE</h2>
          <div className="mt-3 w-16 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-3 gap-10 items-start">

          {/* Photo + Name card */}
          <div className="flex flex-col items-center text-center">
            <div className="w-56 h-64 rounded-2xl overflow-hidden shadow-xl mb-5">
              <img
                src="https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1768498716461%3A0.5512938250253592.webp"
                alt="Dr. Nishchal Naveen"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="bg-white rounded-xl shadow-md px-6 py-4 w-full">
              <p className="text-xs text-blue-600 font-semibold uppercase tracking-wider mb-1">Founded By</p>
              <h3 className="text-lg font-bold text-gray-900">Dr. Nishchal Naveen</h3>
              {/* <p className="text-sm text-gray-500 mt-1">From Entrepreneur to Social Entrepreneur</p>
              <div className="flex justify-center gap-2 mt-3 flex-wrap">
                {['Compassion', 'Integrity', 'Excellence'].map((v) => (
                  <span key={v} className="bg-blue-50 text-blue-700 text-xs px-2 py-0.5 rounded-full border border-blue-100">
                    {v}
                  </span>
                ))}
              </div> */}
            </div>
          </div>

          {/* Message content */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8 md:p-10 relative">
            {/* Decorative quote mark */}
            <div className="absolute top-6 left-7 text-teal-100 text-8xl font-serif leading-none select-none">"</div>

            <div className="relative space-y-4 text-gray-700 leading-relaxed">
              <h4 className="text-lg font-bold text-gray-900">
                From Entrepreneur to Social Entrepreneur: The Vision of Dr. Nishchal Naveen 
              </h4>

              <p>
                After years of entrepreneurial success, Dr. Nishchal Naveen has embarked on a mission driven not by profit, but by purpose — improving healthcare access for underserved communities in India.
              </p>

              <p>
                Dr. Nishchal began his entrepreneurial journey by founding Cygnus Hospitals, a chain of hospitals focused on providing quality emergency and critical care in Tier-2 and Tier-3 cities, addressing the crucial golden hour in trauma and cardiac emergencies. The initiative significantly improved access to lifesaving care for millions.
              </p>

              <p>
                He later ventured into health technology, building solutions aimed at improving efficiency and outcomes for healthcare professionals. His ventures attracted investments from leading global investors including Sequoia Capital, Fidelity, and Somerset.
              </p>

              <p>
               Through his journey, Dr. Nishchal witnessed deep inequalities in healthcare access. This inspired him to channel his entrepreneurial experience into social impact initiatives.
              </p>

              <p>
                Today, through the VOH Foundation, he works to strengthen healthcare awareness, preventive care, and community health initiatives — ensuring that quality healthcare knowledge and services reach even the most underserved populations.
              </p>

              <p>
                Having already impacted millions of lives through healthcare innovation, Dr. Nishchal continues his mission of creating a more equitable and accessible healthcare ecosystem for India.
              </p>

              <div className="pt-4 border-t border-gray-100">
                <p className="font-semibold text-gray-900">With dedication,</p>
                <p className="font-bold text-lg mt-1 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Dr. Nishchal Naveen </p>
                <p className="text-sm text-gray-400">Founder, VOH Foundation</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
