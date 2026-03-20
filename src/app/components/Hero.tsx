export function Hero() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block bg-blue-50 text-blue-700 border border-blue-100 px-4 py-1 rounded-full text-sm font-medium">
              Empowering lives through impact
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              COMPASSION IN ACTION.<br />
              EXCELLENCE IN CARE.
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              VOH Foundation dedicates itself to the well-being of underserved communities through comprehensive healthcare services.
            </p>
            <a
              href="https://zfrmz.in/kbWQ3iRa6HIFtQF7DVgc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-3 rounded-md text-base hover:opacity-90 transition-opacity shadow-md"
            >
              Join Our Journey
            </a>
          </div>

          {/* Right Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773985860457%3A0.5646501345237953.jpg"
              alt="VOH Foundation — Healthcare in action"
              className="w-full h-auto"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
