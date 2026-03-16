import { Link } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const sections = [
  {
    number: '1.',
    title: 'About VOH Foundation',
    content: 'VOH Foundation is a social initiative committed to improving healthcare awareness, education, and access to preventive healthcare services in India.',
  },
  {
    number: '2.',
    title: 'Use of the Website',
    content: 'By using this website, you agree to use it only for lawful purposes, not misuse the website or attempt unauthorized access, and not copy, distribute, or reproduce website content without permission.',
  },
  {
    number: '3.',
    title: 'Intellectual Property',
    content: 'All content on this website including text, graphics, logos, images, and materials is the intellectual property of VOH Foundation unless otherwise stated.',
  },
  {
    number: '4.',
    title: 'Donations',
    content: 'All donations made through this website are voluntary contributions intended to support the initiatives and charitable activities of VOH Foundation.',
  },
  {
    number: '5.',
    title: 'External Links',
    content: 'The website may contain links to third-party websites. VOH Foundation is not responsible for the content or practices of these external sites.',
  },
  {
    number: '6.',
    title: 'Limitation of Liability',
    content: 'VOH Foundation will not be liable for any damages arising from the use or inability to use this website.',
  },
  {
    number: '7.',
    title: 'Governing Law',
    content: 'These terms shall be governed by the laws of India, and disputes shall be subject to the jurisdiction of the courts of Delhi, India.',
  },
  {
    number: '8.',
    title: 'Eligibility to Use the Website',
    content: 'This website is intended for use by individuals who are 18 years of age or older. If you are under the age of 18, you may use the website only under the supervision of a parent or legal guardian. VOH Foundation does not knowingly collect personal information from children below 13 years of age without parental consent.',
  },
  {
    number: '9.',
    title: 'Accuracy of Information',
    content: 'VOH Foundation strives to ensure that the information available on this website is accurate and up to date. However, the foundation does not guarantee the completeness, reliability, or accuracy of any information. Information on this website is provided for awareness and educational purposes only and should not be treated as medical advice.',
  },
  {
    number: '10.',
    title: 'Website Availability',
    content: 'VOH Foundation reserves the right to update, modify, suspend, or discontinue any part of the website or its services at any time without prior notice.',
  },
  {
    number: '11.',
    title: 'Prohibited Activities',
    content: 'Users agree not to misuse the website. Prohibited activities include attempting unauthorized access, introducing malware or viruses, misusing donation systems, or using the website for unlawful activities. VOH Foundation reserves the right to restrict or terminate access to users who violate these conditions.',
  },
  {
    number: '12.',
    title: 'Use of Website Content',
    content: 'Content on this website may be used only for personal and non‑commercial purposes. Any reproduction, republication, or redistribution of website content requires prior written permission from VOH Foundation.',
  },
  {
    number: '13.',
    title: 'Donation Transparency',
    content: 'VOH Foundation utilizes donations towards its charitable objectives and social initiatives, including healthcare awareness, preventive health programs, and community health initiatives.',
  },
  {
    number: '14.',
    title: 'Indemnification',
    content: 'Users agree to indemnify and hold harmless VOH Foundation, its members, officers, volunteers, and partners against any claims, damages, or liabilities arising from misuse of the website.',
  },
  {
    number: '15.',
    title: 'Changes to Terms',
    content: 'VOH Foundation reserves the right to update or modify these Terms and Conditions at any time. Continued use of the website after changes are posted will constitute acceptance of those changes.',
  },
];

export function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Breadcrumb */}
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-blue-600 transition-colors mb-8"
          >
            ← Back to Home
          </Link>

          {/* Header */}
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Terms and Conditions</h1>
            <div className="mt-3 w-16 h-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full" />
            <p className="mt-4 text-sm text-gray-400">Effective Date: 01-01-2026</p>
            <p className="mt-2 text-gray-600 leading-relaxed">
              Welcome to the VOH Foundation website. By accessing or using this website, you agree to comply with and be bound by the following terms and conditions.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {sections.map((section) => (
              <div key={section.title} className="border-b border-gray-100 pb-8 last:border-0">
                <h2 className="text-lg font-bold text-gray-900 mb-3">
                  {section.number} {section.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>

          {/* Contact box */}
          <div className="mt-10 bg-blue-50 border border-blue-100 rounded-xl p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-2">Contact Us</h2>
            <p className="text-gray-600 text-sm">
              If you have any questions about these Terms and Conditions, please email us at{' '}
              <a href="mailto:csr@voh.foundation" className="text-blue-600 hover:underline font-medium">
                csr@voh.foundation
              </a>
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
