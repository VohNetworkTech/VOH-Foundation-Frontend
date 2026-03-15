import { Target } from 'lucide-react';

export function Mission() {
  return (
    <section id="mission" className="py-16 md:py-24 bg-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Icon + heading */}
          <div className="flex-shrink-0 flex flex-col items-center lg:items-start gap-4">
            <div className="w-20 h-20 bg-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Target className="text-white" size={40} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">MISSION</h2>
          </div>

          {/* Divider (desktop) */}
          <div className="hidden lg:block w-px h-40 bg-teal-200" />

          {/* Content */}
          <div className="flex-1 space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              To provide quality healthcare to underserved communities, focusing on primary, elderly, oncology, and tertiary care while bridging the gap with equitable medical access.
            </p>
            {/* Core values chips */}
            <div className="flex flex-wrap gap-3 pt-2">
              {['Compassion', 'Integrity', 'Excellence', 'Equity'].map((value) => (
                <span
                  key={value}
                  className="bg-teal-100 text-teal-800 text-sm font-medium px-4 py-1.5 rounded-full border border-teal-200"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
