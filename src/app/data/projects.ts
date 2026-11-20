export type Approach = { label: string; detail: string; bullets?: string[]; outro?: string };

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  categoryColor: string;
  accentBg: string;
  accentText: string;
  accentBorder: string;
  /** Image URL. Leave empty to show a coloured placeholder banner. */
  banner: string;
  status?: 'upcoming';
  summary: string;
  overview: string;
  mission: string;
  approaches: Approach[];
  impact: string[];
  extra?: Record<string, unknown>;
};

export const projects: Project[] = [
  {
    slug: 'first-response',
    title: 'FIRST RESPONSE',
    tagline: 'Emergency First Aid & CPR for School Students',
    category: 'First Aid & CPR',
    categoryColor: 'bg-blue-100 text-blue-700',
    accentBg: 'bg-gradient-to-r from-blue-600 to-teal-600',
    accentText: 'text-blue-600',
    accentBorder: 'border-blue-400',
    banner: '',
    status: 'upcoming',
    summary: 'Emergency first aid and CPR for school students, with touchpoints in Class 9 and Class 11.',
    overview: 'Choking, injuries, burns or a sudden collapse can happen at home, at school or on the road, often before professional help arrives. Students who know what to do can act in those first minutes.',
    mission: 'Every student ready to help in an emergency.',
    approaches: [],
    impact: [
      'Schools reach every student in a cohort',
      'A second touchpoint reinforces skills',
      'Students carry skills home to families',
    ],
    extra: {
      overviewExtra: [
        'First Response builds these skills through two school touchpoints, so learning is introduced early and reinforced as students mature.',
      ],
      approachIntro: 'Building on the same approach: train people early, reinforce learning at a second touchpoint, and measure what changes.',
      touchpoints: [
        {
          grade: 'Class 9',
          step: 'Touchpoint 1',
          title: 'Emergency first aid',
          detail: 'Extensive, hands-on first-aid training for everyday emergencies.',
          learn: [
            'Checking safety and calling for help (112 / 108)',
            'Bleeding, wounds and burns',
            'Fractures, sprains and safe immobilisation',
            'Choking, fainting and seizures',
            'Heat illness, bites and stings',
            'Road-accident response and the recovery position',
          ],
        },
        {
          grade: 'Class 11',
          step: 'Touchpoint 2',
          title: 'CPR training',
          detail: 'Hands-on CPR practice on manikins, building on the Class 9 foundation.',
          learn: [
            'Recognising cardiac arrest',
            'Hands-only CPR: hand position, rate and depth',
            'Supervised practice on manikins',
            'Choking response refresher',
            'Awareness of AEDs (defibrillators)',
            'Leading a calm bystander response',
          ],
        },
      ],
      touchpointGap: 'Two years later: reinforce and advance',
      deliveryNote: 'Delivered by trained medical professionals, with hands-on practice, pre- and post-training skill checks and certificates for students.',
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
    banner: 'https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1773641057857%3A0.9736865709111486.png',
    summary: 'A strategic initiative with ICMR–NIE to strengthen hypertension control by training medical students before clinical habits are formed — creating a multiplier effect in preventive care.',
    overview: 'Hypertension, often called the "Silent Killer," is one of the most pressing public health challenges in India. It is a leading risk factor for cardiovascular diseases—the number one cause of death globally. In India, nearly one in three adults has high blood pressure, yet only a small proportion have it adequately controlled, leading to increased risk of heart disease, stroke, kidney failure, and premature death.',
    mission: 'To advance equitable healthcare access and reduce the burden of hypertension by training the next generation of physicians — improving early detection, patient education, and long-term disease management across communities.',
    approaches: [
      { label: 'Structured Learning Modules', detail: 'Participants will access self-paced digital learning modules covering: Epidemiology and burden of hypertension; Risk factors and prevention strategies; Blood pressure measurement techniques; Standard treatment protocols; Lifestyle modification and patient counselling.' },
      { label: 'Skill-Building Workshops', detail: 'Interactive sessions will train students in: Accurate blood pressure measurement; Identification of hypertension risk factors; Interpretation of clinical readings; Patient counselling and preventive care.' },
      { label: 'Case-Based Clinical Discussions', detail: 'Students will analyse real-world patient scenarios to strengthen clinical reasoning and decision-making.' },
      { label: 'Community Exposure', detail: 'Medical students will also participate in community health activities, including: Awareness programs; Hypertension screening initiatives; Interaction with community healthcare workers.' },
    ],
    impact: [
      'Train the next generation of healthcare providers',
      'Strengthen hypertension prevention and management',
      'Promote early detection and screening',
      'Improve cardiovascular health outcomes across communities',
    ],
    extra: {
      overviewExtra: [
        'Addressing this crisis requires stronger awareness, early detection, and improved healthcare capacity.',
        'A key opportunity lies in training medical students early in their careers, before clinical habits are formed. Influencing future doctors at this stage can significantly improve long-term hypertension detection, management, and patient education.',
        'To support this effort, Voice of Healthcare (VOH) has partnered with the Indian Council of Medical Research – National Institute of Epidemiology (ICMR-NIE) under an MOU between ICMR and VOH. The collaboration focuses on strengthening training, awareness, and knowledge dissemination around hypertension and other non-communicable diseases.',
      ],
      burdenIntro: 'Several lifestyle and environmental factors are contributing to the rising prevalence of hypertension:',
      burdenFactors: [
        'Sedentary lifestyles and reduced physical activity',
        'High salt intake and unhealthy dietary patterns',
        'Increased stress levels and urban lifestyle pressures',
        'Rising obesity and metabolic disorders',
        'Aging population and lifestyle transitions',
      ],
      burdenConclusion: 'Despite the availability of effective treatments, hypertension remains poorly controlled in a large proportion of patients, making it a leading contributor to cardiovascular diseases in India.',
      statsHeading: 'Hypertension is a global and national public health challenge.',
      stats: [
        { value: '1.28B', label: 'Adults worldwide are living with hypertension (WHO)' },
        { value: '1 in 3', label: 'Adults in India is estimated to have high blood pressure' },
        { value: '<10–15%', label: 'Hypertensive individuals in India have their condition adequately controlled' },
        { value: '#1', label: 'High blood pressure is the single largest risk factor for cardiovascular deaths globally' },
      ],
      statsConclusion: 'These numbers highlight the urgent need for better awareness, early detection, and stronger preventive healthcare practices.',
      initiativeIntro: 'To address the growing burden of hypertension, Voice of Healthcare (VOH) is implementing the initiative:',
      initiativeName: 'Ripple Effect: Enhancing Hypertension Control through Comprehensive Training of Medical Students and Interns',
      partnerNote: 'This initiative is being implemented in partnership with the Indian Council of Medical Research – National Institute of Epidemiology (ICMR-NIE). ICMR-NIE is one of India\'s leading institutions in epidemiology and public health research, functioning under the Indian Council of Medical Research (ICMR-NIE), Department of Health Research, Government of India. Through this collaboration, the initiative aims to strengthen awareness, training, and knowledge dissemination related to hypertension prevention and management.',
      whyStudentsIntro: 'Future doctors play a critical role in shaping the healthcare system. Training medical students early in their careers can create a multiplier effect in hypertension awareness and management.',
      whyStudentsBullets: [
        'Diagnose hypertension earlier',
        'Educate patients about lifestyle modification',
        'Promote preventive healthcare practices',
        'Improve long-term hypertension management in communities',
      ],
      whyStudentsOutro: 'By building knowledge at the medical education stage, the initiative aims to influence the clinical practices of thousands of future physicians.',
      approachIntro: 'The initiative follows a cascade training model, where knowledge is transferred from experts to trainers, from trainers to medical students, and ultimately to patients and communities.',
      joinIntro: 'Addressing hypertension requires collaboration across healthcare institutions, public health agencies, and responsible corporate partners.',
      joinInvite: 'We invite CSR partners, healthcare institutions, medical colleges, and public health stakeholders to support initiatives that strengthen hypertension awareness and preventive healthcare.',
      joinBullets: [
        'Train the next generation of healthcare providers',
        'Strengthen hypertension prevention and management',
        'Promote early detection and screening',
        'Improve cardiovascular health outcomes across communities',
      ],
      joinOutro: 'Together, we can create a healthier future by addressing hypertension before it becomes a life-threatening condition.',
    },
  },
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
    overview: 'Menstruation is a natural part of life, yet millions of girls still face stigma, misinformation, and limited access to basic menstrual hygiene resources. FIRST FLOW: Bleed with Dignity is a campaign dedicated to ensuring that every girl experiences her first period with knowledge, confidence, and dignity.',
    mission: 'To ensure that every girl has access to accurate menstrual health education, essential hygiene resources, and healthcare support, enabling her to manage menstruation safely, confidently, and with dignity.',
    approaches: [
      {
        label: 'Menstrual Health Education',
        detail: 'We organize interactive workshops in public schools and underserved communities, led by health counsellors, public health experts, and gynaecologists. These sessions aim to:',
        bullets: [
          'Break myths and stigma around menstruation',
          'Educate girls about menstrual hygiene and reproductive health',
          'Encourage open conversations around periods',
        ],
      },
      {
        label: 'Menarche Support Kits',
        detail: 'Each girl receives a Menarche Kit, designed to support her during the early stages of menstruation. The kit includes:',
        bullets: [
          'Sanitary pads',
          'Hand cleanser',
          'Period tracking calendar',
          'Educational material on menstrual health',
        ],
      },
      {
        label: 'Cervical Cancer Awareness & Prevention',
        detail: 'We conduct awareness sessions about Human Papillomavirus (HPV) and cervical cancer prevention.',
      },
      {
        label: 'Life Skills & Empowerment Training',
        detail: 'Beyond health education, the initiative focuses on empowering girls through life skills training, including:',
        bullets: [
          'Communication and confidence building',
          'Leadership development',
          'Financial literacy',
          'Basic vocational skills',
        ],
        outro: 'These sessions help girls build the confidence and knowledge needed to make informed decisions about their health and future.',
      },
      {
        label: 'Multi-Stakeholder Collaboration',
        detail: 'Addressing menstrual health requires collective action. The campaign collaborates with:',
        bullets: [
          'Government agencies',
          'NGOs and community organizations',
          'Healthcare providers',
          'Educational institutions',
        ],
        outro: 'This collaborative approach ensures sustainable impact and community-wide change.',
      },
    ],
    impact: [
      'Improve menstrual hygiene awareness and practices among adolescent girls',
      'Reduce period poverty and stigma in underserved communities',
      'Increase awareness about cervical cancer and HPV prevention',
      'Support HPV vaccination programs of Govt for long-term health protection',
      'Empower girls with life skills that support education, health, and independence',
    ],
    extra: {
      overviewExtra: [
        'Our initiative focuses on improving menstrual health awareness, reducing period poverty, and empowering adolescent girls through education, healthcare access, and life-skill development.',
        'By addressing both the practical challenges and social stigma surrounding menstruation, the campaign aims to create healthier communities where no girl is held back due to lack of awareness, resources, or support.',
      ],
      approachIntro: 'The campaign combines health education, medical support, and empowerment programs to create both immediate and long-term impact.',
      whyMatters: 'Millions of girls across India miss school, face health complications, or suffer silently due to lack of menstrual health awareness and resources. By providing education, healthcare access, and empowerment, the FIRST FLOW campaign ensures that menstruation never becomes a barrier to a girl\'s dignity, education, or opportunities.',
    },
  },
];
