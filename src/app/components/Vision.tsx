import { Eye } from 'lucide-react';

export function Vision() {
  return (
    <section id="vision" className="py-16 md:py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Icon + heading */}
          <div className="flex-shrink-0 flex flex-col items-center lg:items-start gap-4">
            <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Eye className="text-white" size={40} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">VISION</h2>
          </div>

          {/* Divider (desktop) */}
          <div className="hidden lg:block w-px h-40 bg-blue-200" />

          {/* Content */}
          <div className="flex-1 space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              To cultivate a healthier, more equitable society where every individual, regardless of status, enjoys access to essential healthcare as a fundamental right.
            </p>
            {/* Vision pillars */}
            <div className="flex flex-wrap gap-3 pt-2">
              {['Universal Access', 'Community Health', 'Sustainable Care', 'Empowerment'].map((pillar) => (
                <span
                  key={pillar}
                  className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1.5 rounded-full border border-blue-200"
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
