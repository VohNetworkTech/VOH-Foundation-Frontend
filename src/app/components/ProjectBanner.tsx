import type { ReactNode } from 'react';
import type { Project } from '../data/projects';

/** Project banner image, or a coloured placeholder with the project icon when no image is set. */
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
