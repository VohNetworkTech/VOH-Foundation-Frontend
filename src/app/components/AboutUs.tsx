import { Eye, Target } from 'lucide-react';

export function AboutUs() {
  return (
    <section id="about-us" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">ABOUT US</h2>
          <div className="mt-3 w-16 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full mb-4" />
          <div className="inline-block bg-blue-50 text-blue-700 border border-blue-100 text-sm font-semibold px-4 py-1 rounded-full mb-3 tracking-wide">
            Impact • Access • Equity
          </div>
          <p className="text-xl font-bold text-gray-800">VOICE OF HEALTHCARE</p>
          <p className="text-blue-600 font-medium mt-1">Society / Non-Profit</p>
        </div>

        {/* Centered intro paragraphs */}
        <div className="max-w-3xl mx-auto text-center space-y-4 text-gray-700 leading-relaxed mb-12">
          <p>
            Voice of Healthcare (VOH Foundation) is a not-for-profit organization committed to strengthening healthcare awareness, access, and capacity across India.
          </p>
          <p>
            The organization works at the intersection of public health awareness, healthcare capacity building, and stakeholder collaboration to improve health outcomes for communities that need it most.
          </p>
          <p>
            VOH believes that improving health outcomes requires more than clinical care alone. Awareness, education, and knowledge dissemination play a critical role in ensuring that individuals and communities are able to prevent disease, seek timely care, and adopt healthier lifestyles.
          </p>
          <p>
            Through its initiatives, VOH engages with healthcare professionals, academic institutions, policymakers, civil society organizations, and industry partners to design and implement programs that address key public health challenges.
          </p>
          <p>
            VOH focuses particularly on areas where awareness gaps and capacity constraints limit the effectiveness of healthcare delivery.
          </p>
        </div>

        {/* Mission + Vision — 2-column row */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Mission Card */}
          <div id="mission" className="bg-teal-50 rounded-xl p-8 flex flex-col hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-md">
              <Target className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">MISSION</h3>
            <p className="text-gray-700 leading-relaxed text-sm flex-1">
              To advance equitable healthcare access and improve quality of life for underserved and vulnerable populations through targeted programs, partnerships, and awareness initiatives.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {['Compassion', 'Integrity', 'Excellence', 'Equity'].map((value) => (
                <span
                  key={value}
                  className="bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full border border-blue-100"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>

          {/* Vision Card */}
          <div id="vision" className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl p-8 flex flex-col hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
              <Eye className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">VISION</h3>
            <p className="text-blue-50 leading-relaxed text-sm flex-1">
              A future where every individual — regardless of geography, income, or vulnerability — has access to timely, quality and compassionate healthcare.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {['Universal Access', 'Community Health', 'Sustainable Care', 'Empowerment'].map((pillar) => (
                <span
                  key={pillar}
                  className="bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full border border-white/30"
                >
                  {pillar}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
