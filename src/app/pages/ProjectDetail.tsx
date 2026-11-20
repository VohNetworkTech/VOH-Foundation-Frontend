import { useParams, Link } from 'react-router';
import {
  ArrowLeft, ArrowDown, ArrowRight, CheckCircle, Target, BookOpen, Users, Microscope, Globe, TrendingUp,
  BriefcaseMedical, HeartPulse, School, RefreshCw, House, Phone, Bandage, Bone, Wind, Sun, CarFront,
  Hand, UserCheck, Zap, Award,
} from 'lucide-react';
import { projects } from '../data/projects';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ProjectBanner, UpcomingBadge } from '../components/ProjectBanner';

const approachIcons = [
  <BookOpen size={20} />,
  <Users size={20} />,
  <Microscope size={20} />,
  <Globe size={20} />,
  <TrendingUp size={20} />,
];

// First Response: icons for the three "why schools" points and each touchpoint's topics
const whyIcons = [<School size={20} />, <RefreshCw size={20} />, <House size={20} />];
const touchpointStyles = [
  { box: 'bg-blue-600', text: 'text-blue-600', icon: <BriefcaseMedical size={28} /> },
  { box: 'bg-teal-600', text: 'text-teal-600', icon: <HeartPulse size={28} /> },
];
const learnIcons = [
  [Phone, Bandage, Bone, Wind, Sun, CarFront],
  [HeartPulse, Hand, UserCheck, Wind, Zap, Users],
];

type Touchpoint = { grade: string; step: string; title: string; detail: string; learn: string[] };

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
  const isFirstResponse = project.slug === 'first-response';
  const extra = project.extra as {
    overviewExtra?: string[];
    burdenIntro?: string;
    burdenFactors?: string[];
    burdenConclusion?: string;
    statsHeading?: string;
    stats?: { value: string; label: string }[];
    statsConclusion?: string;
    initiativeIntro?: string;
    initiativeName?: string;
    partnerNote?: string;
    whyStudentsIntro?: string;
    whyStudentsBullets?: string[];
    whyStudentsOutro?: string;
    approachIntro?: string;
    touchpoints?: Touchpoint[];
    touchpointGap?: string;
    deliveryNote?: string;
    joinIntro?: string;
    joinInvite?: string;
    joinBullets?: string[];
    joinOutro?: string;
    whyMatters?: string;
  } | undefined;

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
            <ProjectBanner project={project} icon={<BriefcaseMedical size={96} strokeWidth={1.25} />} />
          </div>

          {/* Title block */}
          <div>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${project.categoryColor}`}>
                {project.category}
              </span>
              {project.status === 'upcoming' && <UpcomingBadge />}
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">{project.title}</h1>
            <p className="text-gray-500 mt-1.5 text-sm md:text-base">{project.tagline}</p>
          </div>

        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 space-y-12">

          {/* Overview */}
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2 space-y-4">
              <h2 className="text-xl font-bold text-gray-900">Overview</h2>
              <p className="text-gray-600 leading-relaxed">{project.overview}</p>
              {extra?.overviewExtra && (
                <>{extra.overviewExtra.map((para, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed">{para}</p>
                ))}</>
              )}
            </div>

            {/* Mission card */}
            <div className={`${project.accentBg} rounded-2xl p-6 text-white self-start`}>
              <div className="flex items-center gap-2 mb-3">
                <Target size={20} />
                <span className="font-bold text-sm uppercase tracking-wide">Mission</span>
              </div>
              <p className="text-sm leading-relaxed opacity-95">{project.mission}</p>
            </div>
          </div>

          {/* First Response: why schools */}
          {isFirstResponse && (
            <div className="grid sm:grid-cols-3 gap-4">
              {project.impact.map((point, i) => (
                <div key={i} className="flex items-center gap-3 bg-blue-50 border border-blue-100 rounded-xl p-4">
                  <span className="text-blue-600 flex-shrink-0">{whyIcons[i % whyIcons.length]}</span>
                  <span className="text-sm text-gray-700 font-medium">{point}</span>
                </div>
              ))}
            </div>
          )}

          {/* First Response: what students learn at each touchpoint */}
          {isFirstResponse && extra?.touchpoints && (
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">What Students Learn at Each Touchpoint</h2>
              {extra.approachIntro && (
                <p className="text-gray-600 leading-relaxed mb-6">{extra.approachIntro}</p>
              )}
              <div className="grid md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-3 items-stretch">
                {extra.touchpoints.map((tp, i) => {
                  const style = touchpointStyles[i % touchpointStyles.length];
                  const icons = learnIcons[i % learnIcons.length];
                  return (
                    <div key={tp.grade} className="contents">
                      {i > 0 && extra.touchpointGap && (
                        <div className="flex md:flex-col items-center justify-center gap-2 text-xs italic text-gray-500 md:w-28 text-center">
                          <ArrowDown size={16} className="md:hidden" />
                          <ArrowRight size={16} className="hidden md:block" />
                          {extra.touchpointGap}
                        </div>
                      )}
                      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
                        <div className="flex items-stretch">
                          <div className={`${style.box} text-white px-5 py-4 flex flex-col items-center justify-center text-center min-w-[7.5rem]`}>
                            {style.icon}
                            <span className="font-bold text-lg mt-1">{tp.grade}</span>
                            <span className="text-[10px] font-semibold uppercase tracking-wider opacity-90">{tp.step}</span>
                          </div>
                          <div className="p-5">
                            <h3 className={`font-bold text-lg mb-1 ${style.text}`}>{tp.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{tp.detail}</p>
                          </div>
                        </div>
                        <ul className="p-5 pt-4 space-y-3 border-t border-gray-100">
                          {tp.learn.map((item, j) => {
                            const Icon = icons[j % icons.length];
                            return (
                              <li key={j} className="flex items-start gap-3 text-sm text-gray-700">
                                <Icon size={18} className={`${style.text} flex-shrink-0 mt-0.5`} />
                                {item}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
              {extra.deliveryNote && (
                <div className={`mt-6 ${project.accentBg} text-white rounded-2xl px-6 py-4 flex items-center gap-4`}>
                  <Award size={28} className="flex-shrink-0" />
                  <p className="text-sm leading-relaxed">{extra.deliveryNote}</p>
                </div>
              )}
            </div>
          )}

          {/* Hypertension-only: Growing Burden */}
          {isHypertension && (
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">The Growing Burden of Hypertension</h2>
                {extra?.burdenIntro && (
                  <p className="text-gray-600 leading-relaxed mb-3">{extra.burdenIntro as string}</p>
                )}
                {extra?.burdenFactors && (
                  <ul className="space-y-2 mb-4">
                    {(extra.burdenFactors as string[]).map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                )}
                {extra?.burdenConclusion && (
                  <p className="text-gray-600 leading-relaxed">{extra.burdenConclusion as string}</p>
                )}
              </div>

              {/* Stats */}
              {extra?.stats && (
                <div>
                  {extra?.statsHeading && (
                    <p className="text-base font-semibold text-gray-700 mb-4">{extra.statsHeading as string}</p>
                  )}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {(extra.stats as { value: string; label: string }[]).map((stat, i) => (
                      <div key={i} className="bg-blue-50 border border-blue-100 rounded-xl p-5 text-center">
                        <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-1">{stat.value}</p>
                        <p className="text-xs text-gray-500 leading-snug">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                  {extra?.statsConclusion && (
                    <p className="text-gray-600 text-sm mt-4 leading-relaxed">{extra.statsConclusion as string}</p>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Hypertension-only: Our Initiative */}
          {isHypertension && (extra?.initiativeIntro || extra?.partnerNote) && (
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 space-y-4">
              <h2 className="text-xl font-bold text-gray-900">Our Initiative: Ripple Effect for Hypertension Control</h2>
              {extra?.initiativeIntro && (
                <p className="text-gray-600 leading-relaxed">{extra.initiativeIntro as string}</p>
              )}
              {extra?.initiativeName && (
                <p className={`font-semibold text-base ${project.accentText}`}>{extra.initiativeName as string}</p>
              )}
              {extra?.partnerNote && (
                <p className="text-gray-600 leading-relaxed text-sm">{extra.partnerNote as string}</p>
              )}
            </div>
          )}

          {/* Hypertension-only: Why Focus on Medical Students */}
          {isHypertension && extra?.whyStudentsIntro && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900">Why Focus on Medical Students?</h2>
              <p className="text-gray-600 leading-relaxed">{extra.whyStudentsIntro as string}</p>
              {extra?.whyStudentsBullets && (
                <>
                  <p className="text-gray-700 font-medium">Medical students trained today will:</p>
                  <ul className="space-y-2">
                    {(extra.whyStudentsBullets as string[]).map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {extra?.whyStudentsOutro && (
                <p className="text-gray-600 leading-relaxed">{extra.whyStudentsOutro as string}</p>
              )}
            </div>
          )}

          {/* Approach */}
          {project.approaches.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Our Approach</h2>
            {extra?.approachIntro && (
              <p className="text-gray-600 leading-relaxed mb-6">{extra.approachIntro}</p>
            )}
            <div className="grid sm:grid-cols-2 gap-5">
              {project.approaches.map((item, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className={`w-10 h-10 ${project.accentBg} rounded-xl flex items-center justify-center text-white mb-4`}>
                    {approachIcons[i % approachIcons.length]}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm">{item.label}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.detail}</p>
                  {item.bullets && (
                    <ul className="mt-2 space-y-1">
                      {item.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-2 text-gray-500 text-sm">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                  {item.outro && (
                    <p className="text-gray-500 text-sm leading-relaxed mt-2">{item.outro}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
          )}

          {/* Impact (First Flow only) */}
          {!isHypertension && !isFirstResponse && (
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
          )}

          {/* Why this matters (non-hypertension) */}
          {!isHypertension && extra?.whyMatters && (
            <div className={`border-l-4 ${project.accentBorder} pl-5 text-gray-600 italic leading-relaxed`}>
              {extra.whyMatters as string}
            </div>
          )}

          {/* Join the Movement */}
          {isHypertension ? (
            <div className={`${project.accentBg} rounded-2xl p-6 md:p-8 text-white space-y-4`}>
              <h3 className="text-lg font-bold">Join the Movement</h3>
              {extra?.joinIntro && <p className="text-sm leading-relaxed opacity-90">{extra.joinIntro as string}</p>}
              {extra?.joinInvite && <p className="text-sm leading-relaxed opacity-90">{extra.joinInvite as string}</p>}
              {extra?.joinBullets && (
                <>
                  <p className="text-sm font-semibold opacity-95">By supporting this initiative, partners can help:</p>
                  <ul className="space-y-2">
                    {(extra.joinBullets as string[]).map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm opacity-90">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {extra?.joinOutro && <p className="text-sm leading-relaxed opacity-90">{extra.joinOutro as string}</p>}
            </div>
          ) : !isFirstResponse && (
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
