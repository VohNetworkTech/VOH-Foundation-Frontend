import { useEffect, useRef, useState, type ReactNode } from 'react';
import { animate, useInView, useReducedMotion } from 'motion/react';
import { Users, Package, CalendarCheck } from 'lucide-react';

type Stat = {
  icon: ReactNode;
  label: string;
  detail: string;
  /** Numbers count up when scrolled into view; `text` is shown as-is. */
  count?: { to: number; suffix?: string };
  text?: string;
};

const stats: Stat[] = [
  {
    icon: <Users size={26} />,
    count: { to: 10000, suffix: '+' },
    label: 'Girls Reached',
    detail: 'Directly and indirectly through the programme’s menstrual health activities.',
  },
  {
    icon: <Package size={26} />,
    count: { to: 4974 },
    label: 'Dignity Kits Distributed',
    detail: 'Providing practical support alongside awareness and education.',
  },
  {
    icon: <CalendarCheck size={26} />,
    text: '2024',
    label: 'Ongoing Since',
    detail: 'With recurring workshops, product distribution and community outreach.',
  },
];

function CountUp({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const reduceMotion = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (reduceMotion) {
      setValue(to);
      return;
    }
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.8,
      ease: 'easeOut',
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduceMotion, to]);

  return (
    <span ref={ref}>
      {value.toLocaleString('en-IN')}
      {suffix}
    </span>
  );
}

export function ImpactSoFar() {
  return (
    <section id="impact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">OUR IMPACT SO FAR</h2>
          <div className="mt-3 w-16 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient accent bar */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 to-teal-600" />

              <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-blue-600 to-teal-600 text-white flex items-center justify-center shadow-sm">
                {stat.icon}
              </div>
              <p className="text-5xl md:text-6xl font-extrabold tracking-tight leading-none tabular-nums bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent pb-1">
                {stat.count ? <CountUp to={stat.count.to} suffix={stat.count.suffix} /> : stat.text}
              </p>
              <p className="mt-3 text-lg font-semibold text-gray-900">{stat.label}</p>
              <div className="w-10 h-0.5 bg-gray-200 mx-auto my-4 rounded-full" />
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">{stat.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
