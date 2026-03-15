export type Approach = { label: string; detail: string };

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  categoryColor: string;
  accentBg: string;
  accentText: string;
  accentBorder: string;
  banner: string;
  summary: string;
  overview: string;
  mission: string;
  approaches: Approach[];
  impact: string[];
  extra?: Record<string, unknown>;
};

export const projects: Project[] = [
  {
    slug: 'first-flow',
    title: 'FIRST FLOW: Bleed with Dignity',
    tagline: 'A Menstrual Health & Dignity Initiative',
    category: 'Menstrual Health',
    categoryColor: 'bg-blue-100 text-blue-700',
    accentBg: 'bg-gradient-to-r from-blue-600 to-teal-600',
    accentText: 'text-blue-600',
    accentBorder: 'border-blue-400',
    banner: 'https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773509518960%3A0.4275133491491372.png',
    summary: 'Ensuring every girl experiences her first period with knowledge, confidence, and dignity — through education, hygiene kits, and life-skills empowerment.',
    overview: 'Menstruation is a natural part of life, yet millions of girls still face stigma, misinformation, and limited access to basic menstrual hygiene resources. FIRST FLOW: Bleed with Dignity is a campaign dedicated to ensuring that every girl experiences her first period with knowledge, confidence, and dignity. By addressing both the practical challenges and social stigma surrounding menstruation, the campaign aims to create healthier communities where no girl is held back due to lack of awareness, resources, or support.',
    mission: 'To ensure that every girl has access to accurate menstrual health education, essential hygiene resources, and healthcare support — enabling her to manage menstruation safely, confidently, and with dignity.',
    approaches: [
      { label: 'Menstrual Health Education', detail: 'Interactive workshops in public schools and underserved communities, led by health counsellors, public health experts, and gynaecologists — to break myths, educate on hygiene, and encourage open conversations around periods.' },
      { label: 'Menarche Support Kits', detail: 'Each girl receives a Menarche Kit — sanitary pads, hand cleanser, period tracking calendar, and educational material on menstrual health — designed to support her during the early stages of menstruation.' },
      { label: 'Cervical Cancer Awareness & Prevention', detail: 'Awareness sessions about Human Papillomavirus (HPV) and cervical cancer prevention, supporting government HPV vaccination programs for long-term health protection.' },
      { label: 'Life Skills & Empowerment Training', detail: 'Sessions on communication and confidence building, leadership development, financial literacy, and basic vocational skills — helping girls make informed decisions about their health and future.' },
      { label: 'Multi-Stakeholder Collaboration', detail: 'Partnering with government agencies, NGOs, community organizations, healthcare providers, and educational institutions to ensure sustainable impact and community-wide change.' },
    ],
    impact: [
      'Improve menstrual hygiene awareness and practices among adolescent girls',
      'Reduce period poverty and stigma in underserved communities',
      'Increase awareness about cervical cancer and HPV prevention',
      'Support HPV vaccination programs for long-term health protection',
      'Empower girls with life skills that support education, health, and independence',
    ],
    extra: {
      whyMatters: 'Millions of girls across India miss school, face health complications, or suffer silently due to lack of menstrual health awareness and resources. By providing education, healthcare access, and empowerment, the FIRST FLOW campaign ensures that menstruation never becomes a barrier to a girl\'s dignity, education, or opportunities.',
    },
  },
  {
    slug: 'hypertension',
    title: 'HYPERTENSION: The Silent Killer',
    tagline: 'Ripple Effect — Training Medical Students & Interns',
    category: 'Preventive Care',
    categoryColor: 'bg-blue-100 text-blue-700',
    accentBg: 'bg-gradient-to-r from-blue-600 to-teal-600',
    accentText: 'text-blue-600',
    accentBorder: 'border-blue-400',
    banner: 'https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773509293988%3A0.7567665276882931.png',
    summary: 'A strategic initiative with ICMR–NIE to strengthen hypertension control by training medical students before clinical habits are formed — creating a multiplier effect in preventive care.',
    overview: 'Hypertension, often called the "Silent Killer," is one of the most pressing public health challenges in India. It is a leading risk factor for cardiovascular diseases — the number one cause of death globally. In India, nearly one in three adults has high blood pressure, yet only a small proportion have it adequately controlled. VOH has partnered with the Indian Council of Medical Research – National Institute of Epidemiology (ICMR-NIE) under an MOU to strengthen training, awareness, and knowledge dissemination around hypertension and non-communicable diseases.',
    mission: 'To advance equitable healthcare access and reduce the burden of hypertension by training the next generation of physicians — improving early detection, patient education, and long-term disease management across communities.',
    approaches: [
      { label: 'Structured Learning Modules', detail: 'Self-paced digital learning modules covering epidemiology and burden of hypertension, risk factors and prevention strategies, blood pressure measurement techniques, standard treatment protocols, and lifestyle modification & patient counselling.' },
      { label: 'Skill-Building Workshops', detail: 'Interactive sessions training students in accurate blood pressure measurement, identification of hypertension risk factors, interpretation of clinical readings, and patient counselling and preventive care.' },
      { label: 'Case-Based Clinical Discussions', detail: 'Students analyse real-world patient scenarios to strengthen clinical reasoning and decision-making skills around hypertension management.' },
      { label: 'Community Exposure', detail: 'Medical students participate in community awareness programs, hypertension screening initiatives, and direct interaction with community healthcare workers.' },
    ],
    impact: [
      'Train the next generation of healthcare providers in hypertension management',
      'Strengthen hypertension prevention and early detection at community level',
      'Promote lifestyle modification and patient education practices',
      'Improve cardiovascular health outcomes across underserved communities',
      'Support government initiatives on non-communicable disease control',
    ],
    extra: {
      stats: [
        { value: '1.28B', label: 'Adults with hypertension worldwide (WHO)' },
        { value: '1 in 3', label: 'Adults in India estimated to have high BP' },
        { value: '<15%', label: 'Hypertensive Indians with adequate control' },
        { value: '#1', label: 'Risk factor for cardiovascular deaths globally' },
      ],
      whyStudents: 'Training medical students early — before clinical habits are formed — creates a multiplier effect in hypertension awareness. Future doctors trained today will diagnose hypertension earlier, educate patients about lifestyle modification, promote preventive healthcare practices, and improve long-term hypertension management in their communities.',
      partnerNote: 'This initiative is implemented in partnership with ICMR–NIE, one of India\'s leading institutions in epidemiology and public health research, functioning under the Indian Council of Medical Research (ICMR), Department of Health Research, Government of India.',
    },
  },
];
