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
                After years of entrepreneurial success in the startup world, Dr. Nishchal Naveen has embarked on a new journey — one driven not by profit margins, but by a profound desire to give back to society. As the founder of Purpose Plus Care Foundation, Dr. Nishchal is leveraging his startup acumen and passion for social impact to address critical healthcare needs in underserved communities across India.
              </p>

              <p>
                Dr. Nishchal's entrepreneurial journey began with the establishment of two successful startups, each leaving an indelible mark on the healthcare landscape of the country. In his first venture, he revolutionized access to emergency medical care by establishing a chain of hospitals (Cygnus Hospitals) catering specifically to tier 2 and tier 3 cities. These hospitals, strategically positioned to address the crucial 'golden hour' period, provided life-saving interventions for neurotrauma and cardiac emergencies, ultimately saving countless lives.
              </p>

              <p>
                Undeterred by the challenges of healthcare delivery, Dr. Nishchal embarked on his second startup venture, focusing on health technology. With innovative solutions tailored for healthcare professionals, he sought to streamline processes and enhance patient care. During his entrepreneurial journey, he earned the support of prominent investors such as Sequoia Capital, Fidelity, Somerset & many other investors — further validating his entrepreneurial prowess.
              </p>

              <p>
                However, Dr. Nishchal's entrepreneurial journey was not solely defined by financial success. Along the way, he witnessed first-hand the glaring disparities in healthcare access and outcomes faced by marginalized communities. It was this realization that ignited his passion for social entrepreneurship — a commitment to leveraging startup principles for the greater good.
              </p>

              <p>
                Purpose Plus Care Foundation stands as a testament to Dr. Nishchal's unwavering dedication to social impact. Through this initiative, he aims to bridge the gap in healthcare access, ensuring that even the most vulnerable segments of society receive quality care. From providing essential medical services to implementing community health programs, the foundation's holistic approach seeks to uplift and empower underserved communities across India.
              </p>

              <p>
                Dr. Nishchal Naveen  entrepreneurial journey has been nothing short of remarkable, touching the lives of more than 4 million through his healthcare ventures. Now, with Purpose Plus Care Foundation, he embarks on a new chapter, channeling his expertise and resources towards a mission greater than himself — leaving an enduring legacy of compassion, care, and social impact.
              </p>

              <div className="pt-4 border-t border-gray-100">
                <p className="font-semibold text-gray-900">With dedication,</p>
                <p className="font-bold text-lg mt-1 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Dr. Nishchal Naveen </p>
                <p className="text-sm text-gray-400">Founder, Purpose Plus Care Foundation</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
