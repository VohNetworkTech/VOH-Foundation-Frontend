import { Heart, Activity, ArrowRight, BriefcaseMedical } from 'lucide-react';
import type { ReactNode } from 'react';
import { Link } from 'react-router';
import { projects } from '../data/projects';
import { ProjectBanner, UpcomingBadge } from './ProjectBanner';

// Card icon per project (keyed by slug so reordering projects doesn't swap icons)
const icons: Record<string, ReactNode> = {
  'first-response': <BriefcaseMedical className="text-white" size={22} />,
  'first-flow': <Heart className="text-white" size={22} />,
  hypertension: <Activity className="text-white" size={22} />,
};

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">PROJECTS</h2>
          <div className="mt-3 w-16 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col"
            >
              {/* Banner — 16:9 */}
              <div className="relative aspect-video overflow-hidden flex-shrink-0">
                <ProjectBanner
                  project={project}
                  icon={<BriefcaseMedical size={64} strokeWidth={1.5} />}
                  className="group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />

                {/* Icon */}
                <div className={`absolute top-4 left-4 w-11 h-11 ${project.accentBg} rounded-xl flex items-center justify-center shadow-lg`}>
                  {icons[project.slug] ?? <Heart className="text-white" size={22} />}
                </div>

                {/* Category + status badges */}
                <div className="absolute top-4 right-4 flex flex-col items-end gap-2">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${project.categoryColor} bg-white/90`}>
                    {project.category}
                  </span>
                  {project.status === 'upcoming' && <UpcomingBadge />}
                </div>

                {/* Title on image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg leading-tight">{project.title}</h3>
                  <p className="text-white/75 text-xs mt-1">{project.tagline}</p>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{project.summary}</p>

                {/* Key impact preview */}
                <ul className="mt-4 space-y-1.5 mb-6">
                  {project.impact.slice(0, 3).map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-500">
                      <span className={`mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 ${project.accentBg}`} />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  to={`/projects/${project.slug}`}
                  className={`inline-flex items-center justify-center gap-2 w-full ${project.accentBg} text-white text-sm font-semibold py-3 rounded-xl hover:opacity-90 active:scale-95 transition-all duration-200 shadow-sm`}
                >
                  View Full Details <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
