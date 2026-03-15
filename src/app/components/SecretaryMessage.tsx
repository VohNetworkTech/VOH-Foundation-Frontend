import { Quote } from 'lucide-react';

export function SecretaryMessage() {
  return (
    <section id="message" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">GENERAL SECRETARY'S MESSAGE</h2>
          <div className="mt-3 w-16 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full" />
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Secretary Photo */}
          <div className="lg:col-span-1 flex justify-center">
            <div className="relative">
              <div className="w-64 h-80 rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1637176594894-13e5da4866e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBpbmRpYW4lMjBzZWNyZXRhcnl8ZW58MXx8fHwxNzczNDA4ODAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="General Secretary" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-3 rounded-lg shadow-lg">
                <p className="text-sm font-semibold text-gray-900">Gen. Secretary</p>
                <p className="text-xs text-gray-600">Purpose Plus Care Foundation</p>
              </div>
            </div>
          </div>

          {/* Message Content */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-8 md:p-12 relative">
            <Quote className="absolute top-6 left-6 text-blue-200" size={48} />
            
            <div className="relative z-10 space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed italic">
                "At Purpose Plus Care Foundation, we believe that healthcare is not a privilege—it is a fundamental right. Our mission goes beyond treating illnesses; we are committed to transforming lives through compassionate care and sustainable health initiatives."
              </p>
              
              <p className="text-base text-gray-600 leading-relaxed">
                Over the years, we have witnessed the profound impact of accessible healthcare in underserved communities. From elderly care programs to preventive health screenings, each initiative brings us closer to our vision of a healthier, more equitable society.
              </p>
              
              <p className="text-base text-gray-600 leading-relaxed">
                I extend my heartfelt gratitude to our dedicated team, volunteers, and partners who work tirelessly to make this mission a reality. Together, we are not just providing medical services—we are restoring hope, dignity, and the promise of a better tomorrow.
              </p>

              <div className="pt-4 border-t border-gray-200">
                <p className="font-semibold text-gray-900">With warm regards,</p>
                <p className="font-semibold text-lg mt-1 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">General Secretary</p>
                <p className="text-sm text-gray-500">Purpose Plus Care Foundation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
