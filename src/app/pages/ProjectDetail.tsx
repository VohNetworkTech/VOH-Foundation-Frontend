import { useParams, Link } from 'react-router';
import { ArrowLeft, CheckCircle, Target, BookOpen, Users, Microscope, Globe, TrendingUp } from 'lucide-react';
import { projects } from '../data/projects';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const approachIcons = [
  <BookOpen size={20} />,
  <Users size={20} />,
  <Microscope size={20} />,
  <Globe size={20} />,
  <TrendingUp size={20} />,
];

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-gray-500 text-lg mb-4">Project not found.</p>
        <Link to="/" className="text-teal-600 font-semibold hover:underline">← Back to Home</Link>
      </div>
    );
  }

  const isHypertension = project.slug === 'hypertension';
  const extra = project.extra as Record<string, unknown> | undefined;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">

          {/* Breadcrumb */}
          <Link
            to="/#projects"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft size={14} /> Back to Projects
          </Link>

          {/* Banner — 16:9, aligned with content */}
          <div className="aspect-video w-full overflow-hidden rounded-2xl shadow-lg">
            <img
              src={project.banner}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title block */}
          <div>
            <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${project.categoryColor}`}>
              {project.category}
            </span>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">{project.title}</h1>
            <p className="text-gray-500 mt-1.5 text-sm md:text-base">{project.tagline}</p>
          </div>

        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 space-y-12">

          {/* Overview */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Overview</h2>
              <p className="text-gray-600 leading-relaxed">{project.overview}</p>

              {isHypertension && extra?.partnerNote && (
                <div className={`mt-5 border-l-4 ${project.accentBorder} pl-4 text-sm text-gray-600 italic`}>
                  {extra.partnerNote as string}
                </div>
              )}
            </div>

            {/* Mission card */}
            <div className={`${project.accentBg} rounded-2xl p-6 text-white`}>
              <div className="flex items-center gap-2 mb-3">
                <Target size={20} />
                <span className="font-bold text-sm uppercase tracking-wide">Mission</span>
              </div>
              <p className="text-sm leading-relaxed opacity-95">{project.mission}</p>
            </div>
          </div>

          {/* Hypertension-only: Stats + Why Students */}
          {isHypertension && extra?.stats && (
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-5">The Growing Burden</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {(extra.stats as { value: string; label: string }[]).map((stat, i) => (
                    <div key={i} className="bg-blue-50 border border-blue-100 rounded-xl p-5 text-center">
                      <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-1">{stat.value}</p>
                      <p className="text-xs text-gray-500 leading-snug">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {extra.whyStudents && (
                <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-3">Why Focus on Medical Students?</h2>
                  <p className="text-gray-600 text-sm leading-relaxed">{extra.whyStudents as string}</p>
                </div>
              )}
            </div>
          )}

          {/* Approach */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Our Approach</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {project.approaches.map((item, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className={`w-10 h-10 ${project.accentBg} rounded-xl flex items-center justify-center text-white mb-4`}>
                    {approachIcons[i % approachIcons.length]}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm">{item.label}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Impact */}
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-5">Impact We Aim to Create</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {project.impact.map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle className={`${project.accentText} flex-shrink-0 mt-0.5`} size={18} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Why this matters / CTA */}
          {!isHypertension && extra?.whyMatters && (
            <div className={`border-l-4 ${project.accentBorder} pl-5 text-gray-600 italic leading-relaxed`}>
              {extra.whyMatters as string}
            </div>
          )}

          {isHypertension && (
            <div className={`${project.accentBg} rounded-2xl p-6 md:p-8 text-white`}>
              <h3 className="text-lg font-bold mb-3">Join the Movement</h3>
              <p className="text-sm leading-relaxed opacity-90">
                We invite CSR partners, healthcare institutions, medical colleges, and public health stakeholders to support initiatives that strengthen hypertension awareness and preventive healthcare — helping train the next generation of healthcare providers and improve cardiovascular health outcomes across communities.
              </p>
            </div>
          )}

          {!isHypertension && (
            <div className={`${project.accentBg} rounded-2xl p-6 md:p-8 text-white`}>
              <h3 className="text-lg font-bold mb-3">Join the Movement</h3>
              <p className="text-sm leading-relaxed opacity-90">
                Creating menstrual dignity requires collective effort. By supporting FIRST FLOW: Bleed with Dignity, you contribute to building a future where every girl has the knowledge, resources, and confidence to manage her health with dignity.
              </p>
            </div>
          )}

          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft size={16} /> Back to all projects
          </Link>

        </div>
      </main>

      <Footer />
    </div>
  );
}
