import type { ReactNode, CSSProperties } from 'react';
import { BriefcaseMedical, HeartPulse, Hand, Award } from 'lucide-react';
import type { Project } from '../data/projects';

/**
 * Project banner image. When no image URL is set, shows a designed poster for
 * First Response, or a coloured placeholder with the project icon for others.
 */
export function ProjectBanner({
  project,
  icon,
  className = '',
}: {
  project: Project;
  icon: ReactNode;
  className?: string;
}) {
  if (project.banner) {
    return <img src={project.banner} alt={project.title} className={`w-full h-full object-cover ${className}`} />;
  }
  if (project.slug === 'first-response') {
    return <FirstResponsePoster className={className} />;
  }
  return (
    <div
      role="img"
      aria-label={project.title}
      className={`w-full h-full bg-gradient-to-br from-blue-600 to-teal-600 flex items-center justify-center text-white/90 ${className}`}
    >
      {icon}
    </div>
  );
}

export function UpcomingBadge({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-200 ${className}`}>
      Upcoming Project
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* First Response poster — sized in container units so it scales like an image */

const NAVY = '#0b2a4a';
const BLUE = '#2563eb';
const TEAL = '#0d9488';

const posterItems = [
  { Icon: BriefcaseMedical, title: 'Emergency First Aid', sub: 'Class 9', color: BLUE },
  { Icon: HeartPulse, title: 'CPR Training', sub: 'Class 11', color: TEAL },
  { Icon: Hand, title: 'Hands-on Practice', sub: 'On manikins', color: BLUE },
  { Icon: Award, title: 'Certified Skills', sub: 'Skill checks & certificates', color: TEAL },
];

function FirstResponsePoster({ className = '' }: { className?: string }) {
  const cq = (n: number) => `${n}cqw`;
  const root: CSSProperties = {
    containerType: 'inline-size',
    background: 'linear-gradient(135deg, #eff6ff 0%, #f8fafc 50%, #f0fdfa 100%)',
  };

  return (
    <div
      role="img"
      aria-label="First Response: Emergency First Aid and CPR for School Students"
      className={`relative w-full h-full overflow-hidden select-none ${className}`}
      style={root}
    >
      {/* Decorative shapes */}
      <div className="absolute rounded-full" style={{ width: cq(34), height: cq(34), left: cq(-10), top: cq(-12), background: `${BLUE}14` }} />
      <div className="absolute rounded-full" style={{ width: cq(40), height: cq(40), right: cq(-12), bottom: cq(-16), background: `${TEAL}14` }} />
      <div className="absolute rounded-full" style={{ width: cq(10), height: cq(10), right: cq(14), top: cq(4), border: `${cq(0.5)} solid ${TEAL}26` }} />

      {/* Heartbeat line behind the circles */}
      <svg
        aria-hidden
        className="absolute left-0 w-full"
        style={{ top: '47%', height: cq(10) }}
        viewBox="0 0 400 40"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="fr-ecg" x1="0" x2="1">
            <stop offset="0" stopColor={BLUE} />
            <stop offset="1" stopColor={TEAL} />
          </linearGradient>
        </defs>
        <polyline
          points="0,20 120,20 135,20 145,4 155,36 165,12 172,20 228,20 238,20 248,4 258,36 268,12 275,20 400,20"
          fill="none"
          stroke="url(#fr-ecg)"
          strokeOpacity="0.35"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* Title */}
      <div className="absolute inset-x-0 text-center" style={{ top: '7%' }}>
        <p style={{ fontSize: cq(5.4), fontWeight: 800, color: NAVY, letterSpacing: '0.02em', lineHeight: 1.05 }}>
          FIRST RESPONSE
        </p>
        <p
          style={{
            fontSize: cq(2.6),
            fontWeight: 700,
            lineHeight: 1.3,
            marginTop: cq(0.6),
            background: `linear-gradient(90deg, ${BLUE}, ${TEAL})`,
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Every Student Ready to Help in an Emergency
        </p>
        <p style={{ fontSize: cq(1.45), color: '#475569', marginTop: cq(0.4), fontWeight: 500 }}>
          Emergency First Aid &amp; CPR for School Students
        </p>
      </div>

      {/* Four pillars */}
      <div className="absolute flex justify-between" style={{ top: '37%', left: cq(5), right: cq(5) }}>
        {posterItems.map(({ Icon, title, sub, color }, i) => (
          <div key={title} className="flex flex-col items-center text-center" style={{ width: cq(20) }}>
            <div
              className="relative flex items-center justify-center rounded-full bg-white"
              style={{
                width: cq(13),
                height: cq(13),
                border: `${cq(0.55)} solid ${color}`,
                boxShadow: `0 ${cq(0.6)} ${cq(2)} ${color}33`,
              }}
            >
              <Icon style={{ width: cq(5.6), height: cq(5.6), color }} strokeWidth={1.75} />
              <span
                className="absolute flex items-center justify-center rounded-full text-white"
                style={{
                  width: cq(3.2),
                  height: cq(3.2),
                  top: cq(-0.6),
                  left: cq(-0.6),
                  background: NAVY,
                  fontSize: cq(1.6),
                  fontWeight: 700,
                }}
              >
                {i + 1}
              </span>
            </div>
            <p style={{ fontSize: cq(1.55), fontWeight: 800, color: NAVY, marginTop: cq(1.2), textTransform: 'uppercase', lineHeight: 1.15 }}>
              {title}
            </p>
            <p style={{ fontSize: cq(1.2), color: '#475569', marginTop: cq(0.3), lineHeight: 1.2 }}>{sub}</p>
          </div>
        ))}
      </div>

      {/* Footer line */}
      <p
        className="absolute inset-x-0 text-center"
        style={{ bottom: '4%', fontSize: cq(1.15), letterSpacing: '0.18em', color: '#64748b', fontWeight: 600 }}
      >
        AN INITIATIVE OF VOH FOUNDATION
      </p>
    </div>
  );
}
