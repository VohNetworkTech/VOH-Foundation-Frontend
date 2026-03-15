import { HeartHandshake, Users, Building2, Globe } from 'lucide-react';

const ways = [
  {
    icon: <Building2 size={24} />,
    title: 'Institutional Partners',
    description: 'Hospitals, medical colleges, and healthcare institutions collaborating to deliver excellence.',
  },
  {
    icon: <Users size={24} />,
    title: 'Community Organizations',
    description: 'Local NGOs and community groups working together to reach the underserved.',
  },
  {
    icon: <Globe size={24} />,
    title: 'Global Health Networks',
    description: 'International organizations bringing world-class healthcare solutions to India.',
  },
  {
    icon: <HeartHandshake size={24} />,
    title: 'Corporate Sponsors',
    description: 'Corporate partners committed to social responsibility and community welfare.',
  },
];

export function Collaboration() {
  return (
    <section id="collaboration" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">COLLABORATION</h2>
          <div className="mt-3 w-16 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full mb-5" />
          <p className="text-base text-gray-500 max-w-2xl mx-auto">
            Uniting diverse stakeholders to create lasting impact in healthcare delivery and community wellness
          </p>
        </div>

        {/* Partner type cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {ways.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-50 to-teal-50 flex items-center justify-center mb-4 text-teal-600">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Together, We Transform Lives</h3>
          <p className="text-base mb-8 opacity-90 max-w-2xl mx-auto">
            Our strategic partnerships serve as catalysts for change, empowering communities through collaborative
            healthcare initiatives and sustainable development programs.
          </p>
          <a
            href="https://zfrmz.in/kbWQ3iRa6HIFtQF7DVgc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-md"
          >
            Become a Partner
          </a>
        </div>

      </div>
    </section>
  );
}
