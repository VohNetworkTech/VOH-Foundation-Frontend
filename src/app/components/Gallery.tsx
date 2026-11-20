import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  {
    url: 'https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1795170659032%3A0.9768716549100875.jpeg',
    alt: 'Healthcare consultation',
  },
  {
    url: 'https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1795170830851%3A0.664980946314895.jpeg',
    alt: 'Medical team collaboration',
  },
  {
    url: 'https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1795170759510%3A0.7388584820310633.jpeg',
    alt: 'Community health outreach',
  },
  {
    url: 'https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773531759003%3A0.06698696672081672.jpg',
    alt: 'Patient care',
  },
  {
    url: 'https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1795170994518%3A0.3292673133401727.jpeg',
    alt: 'Healthcare team',
  },
  {
    url: 'https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1795170877843%3A0.583236278193155.jpeg',
    alt: 'Community service',
  },
];

export function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const prev = useCallback(() => {
    setLightboxIndex(i => (i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length));
  }, []);

  const next = useCallback(() => {
    setLightboxIndex(i => (i === null ? null : (i + 1) % galleryImages.length));
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
      else if (e.key === 'Escape') setLightboxIndex(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex, prev, next]);

  // Prevent body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightboxIndex]);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">GALLERY</h2>
          <div className="mt-3 w-16 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
              onClick={() => setLightboxIndex(index)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            onClick={() => setLightboxIndex(null)}
          >
            <X size={32} />
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10 bg-black/30 rounded-full p-2"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft size={36} />
          </button>

          {/* Image */}
          <img
            src={galleryImages[lightboxIndex].url}
            alt={galleryImages[lightboxIndex].alt}
            className="max-h-[85vh] max-w-[80vw] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          <button
            className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10 bg-black/30 rounded-full p-2"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <ChevronRight size={36} />
          </button>

          {/* Caption + counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <p className="text-white text-sm font-medium">{galleryImages[lightboxIndex].alt}</p>
            <p className="text-gray-400 text-xs mt-1">{lightboxIndex + 1} / {galleryImages.length}</p>
          </div>

          {/* Dot indicators */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2">
            {galleryImages.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === lightboxIndex ? 'bg-white w-4' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
