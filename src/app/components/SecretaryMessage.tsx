export function SecretaryMessage() {
  return (
    <section id="message" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">GENERAL SECRETARY'S MESSAGE</h2>
          <div className="mt-3 w-16 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-3 gap-10 items-start">

          {/* Photo + Name card */}
          <div className="flex flex-col items-center text-center">
            <div className="w-56 h-64 rounded-2xl overflow-hidden shadow-xl mb-5">
              <img
                src="https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773640139754%3A0.02956128832587024.png"
                alt="Pinky Chahar"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="bg-white rounded-xl shadow-md px-6 py-4 w-full">
              <p className="text-xs text-blue-600 font-semibold uppercase tracking-wider mb-1">General Secretary</p>
              <h3 className="text-lg font-bold text-gray-900">Pinky Chahar</h3>
            </div>
          </div>

          {/* Message content */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8 md:p-10 relative">
            {/* Decorative quote mark */}
            <div className="absolute top-6 left-7 text-teal-100 text-8xl font-serif leading-none select-none">"</div>

            <div className="relative space-y-4 text-gray-700 leading-relaxed">
              <h4 className="text-lg font-bold text-gray-900">
                Healthcare as a Fundamental Right: A Message from Our General Secretary
              </h4>

              <p>
                At VOH Foundation, we believe that healthcare is not a privilege—it is a fundamental right. Our mission goes beyond treating illnesses; we are committed to transforming lives through compassionate care and sustainable health initiatives.
              </p>

              <p>
                Over the years, we have witnessed the profound impact of accessible healthcare in underserved communities. From elderly care programs to preventive health screenings, each initiative brings us closer to our vision of a healthier, more equitable society.
              </p>

              <p>
                I extend my heartfelt gratitude to our dedicated team, volunteers, and partners who work tirelessly to make this mission a reality. Together, we are not just providing medical services—we are restoring hope, dignity, and the promise of a better tomorrow.
              </p>

              <div className="pt-4 border-t border-gray-100">
                <p className="font-semibold text-gray-900">With warm regards,</p>
                <p className="font-bold text-lg mt-1 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Pinky Chahar</p>
                <p className="text-sm text-gray-400">General Secretary, VOH Foundation</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
