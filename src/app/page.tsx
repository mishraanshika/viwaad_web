"use client";
import Image from "next/image";
import { FaUserFriends, FaShieldAlt, FaGavel, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";

export default function Home() {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  return (
    <div className="min-h-screen flex flex-col items-center px-2 sm:px-0 bg-transparent scroll-smooth">
      {/* Hero Section: Welcome + Screenshots */}
      <div className="w-full max-w-none flex flex-col md:flex-row items-stretch justify-center gap-16 mt-8 mb-12 fade-in py-24 md:py-36 min-h-[420px]">
        {/* Welcome Card */}
        <div className="card w-full max-w-2xl flex-shrink-0 glow-card slide-up bg-black border-2 border-[#FFC107]/40 relative overflow-hidden h-full flex flex-col justify-center">
          <h1 className="heading text-[#FFC107] animated-underline">Welcome to Viwaad</h1>
          <p className="mb-6 text-lg text-[#FFC107] font-sans">A modern platform for open discussion and clarity. Explore our policies and learn more about us below.</p>
          <div className="flex flex-col sm:flex-row gap-4 mb-2">
            <a href="#about" className="button-primary flex items-center gap-2 justify-center transition-transform hover:scale-105"><FaUserFriends /> About</a>
            <a href="#terms" className="button-primary flex items-center gap-2 justify-center transition-transform hover:scale-105"><FaGavel /> Terms</a>
            <a href="#privacy" className="button-primary flex items-center gap-2 justify-center transition-transform hover:scale-105"><FaShieldAlt /> Privacy</a>
          </div>
        </div>
        {/* Screenshots Row */}
        <div className="flex flex-row gap-8 items-center w-full max-w-lg overflow-x-auto md:overflow-x-visible slide-up justify-center h-full">
          {['vivaad1.jpeg', 'vivaad2.jpeg', 'vivaad3.jpeg'].map((img, i) => (
            <div
              key={img}
              className="rounded-2xl overflow-hidden shadow-md border-2 border-[#FFC107]/40 bg-black flex-shrink-0 glow-card transition-transform hover:scale-105"
              style={{ width: 170, height: 300 }}
            >
              <Image
                src={`/${img}`}
                alt={`Vivaad app screenshot ${i + 1}`}
                width={170}
                height={300}
                className="object-cover w-full h-full"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </div>
      {/* About Vivaad Section */}
      <section id="about" className="w-full max-w-6xl mx-auto mb-16 fade-in px-2 sm:px-0">
        <div className="card bg-black border-2 border-[#FFC107]/40 relative overflow-hidden slide-up">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-[#FFC107] flex items-center gap-2 animated-underline">
            <span>About Viwaad</span>
            <FaUserFriends className="inline text-[#FFC107] text-2xl" />
          </h2>
          <p className="mb-4 text-lg text-[#FFC107] font-sans">
            <span className="font-bold text-[#FFC107]">Viwaad</span> is your platform for spirited, structured, and impactful debates. Designed for those who love to voice their opinions and challenge ideas, Viwaad brings people together to engage in meaningful conversations on trending topics, social issues, and everyday curiosities. Whether you&apos;re passionately <span className="text-green-400 font-bold">for</span> or strongly <span className="text-red-400 font-bold">against</span>—your voice matters here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <div className="flex-1 bg-green-600/20 dark:bg-green-900/40 rounded-xl p-4 flex items-center gap-2">
              <span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
              <span className="font-semibold text-green-300">Green commentary boxes represent &quot;for&quot; arguments</span>
            </div>
            <div className="flex-1 bg-red-600/20 dark:bg-red-900/40 rounded-xl p-4 flex items-center gap-2">
              <span className="inline-block w-4 h-4 bg-red-500 rounded-full"></span>
              <span className="font-semibold text-red-300">Red commentary boxes reflect &quot;against&quot; views</span>
            </div>
          </div>
          <p className="mb-4 text-[#FFC107] font-sans">
            Want to express yourself freely? <span className="font-bold">Viwaad allows you to debate anonymously</span>, encouraging honest, bold conversations without fear of judgment. Be real, be raw—without revealing your identity.
          </p>
          <p className="mb-4 text-[#FFC107] font-sans">
            But we didn&apos;t stop at debates. Viwaad also features a <span className="font-bold text-[#FFC107]">crowd-powered ratings tab</span>, where users can give <span className="text-green-400 font-bold">+5</span> to <span className="text-red-400 font-bold">-5</span> star ratings in green and red formats for products, services, and even ideas—capturing sentiment in a powerful, visual way.
          </p>
          <p className="mb-4 text-[#FFC107] font-sans">
            At Viwaad, we believe diverse opinions fuel innovation and progress. Whether you&apos;re a passionate debater, a curious thinker, or someone who just wants to test perspectives—Viwaad is your space.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 items-center mt-6">
            <span className="text-xl font-bold text-[#FFC107]">Join the debate. Speak your truth. Welcome to Viwaad.</span>
          </div>
        </div>
      </section>
      {/* Terms and Conditions Section */}
      <section id="terms" className="w-full max-w-6xl mx-auto mb-16 fade-in px-2 sm:px-0">
        <div className="card bg-black border-2 border-[#FFC107]/40 relative overflow-hidden slide-up">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-[#FFC107] flex items-center gap-2 animated-underline">
            <span>Viwaad – Terms and Conditions</span>
            <FaGavel className="inline text-[#FFC107] text-2xl" />
          </h2>
          <p className="mb-4 text-[#FFC107] font-sans">Read the summary or expand to see all terms and conditions.</p>
          <button
            className="button-primary flex items-center gap-2 mb-4 transition-transform hover:scale-105"
            onClick={() => setShowTerms((v) => !v)}
            aria-expanded={showTerms}
          >
            {showTerms ? <FaChevronUp /> : <FaChevronDown />} {showTerms ? "Hide Details" : "Show Full Terms"}
          </button>
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${showTerms ? 'max-h-[2000px] opacity-100' : 'max-h-24 opacity-60'}`}
            style={{}}
          >
            <ol className="list-decimal pl-6 text-[#FFC107] font-sans space-y-2">
              <li><b>Introduction</b><br />Welcome to Viwaad, a social platform for open debates, anonymous opinions, and community ratings. By using our app, you agree to abide by these Terms and Conditions (“Terms”). If you do not agree, please do not use Viwaad.</li>
              <li><b>Eligibility</b><br />You must be at least 18 years old or the age of legal majority in your jurisdiction. Users are responsible for ensuring that their use of the platform complies with local laws.</li>
              <li><b>User Conduct</b><br />You agree not to:
                <ul className="list-disc pl-6">
                  <li>Post hate speech, threats, or abusive content</li>
                  <li>Impersonate others or misrepresent your identity</li>
                  <li>Share private information without consent</li>
                  <li>Spam, manipulate ratings, or engage in vote brigading</li>
                  <li>Post illegal, pornographic, or violent content</li>
                </ul>
                We support free speech and anonymity, but violations of our Community Guidelines will result in temporary or permanent suspension.
              </li>
              <li><b>Anonymous Posting</b><br />Viwaad allows anonymous participation in debates. However, any abuse of anonymity to harass, threaten, or incite violence will result in immediate action.</li>
              <li><b>Content Ownership & License</b><br />You retain ownership of your content. By posting, you grant Viwaad a non-exclusive, royalty-free, worldwide license to display and distribute your content. Viwaad may remove content at its discretion.</li>
              <li><b>Ratings System</b><br />Users can rate posts, products, or content from +5 to -5 stars. Misuse or manipulation of the rating system (fake accounts, coordinated votes) may lead to suspension.</li>
              <li><b>Privacy</b><br />Please refer to our Privacy Policy for how we collect, use, and store data. We take user anonymity and data protection seriously.</li>
              <li><b>Account Suspension/Termination</b><br />Viwaad reserves the right to suspend or terminate accounts for violations of these Terms, applicable laws, or our Community Guidelines.</li>
              <li><b>Limitation of Liability</b><br />Viwaad is provided &quot;as is.&quot; We are not liable for any content posted by users or for any damages resulting from platform use.</li>
              <li><b>Governing Law</b><br />These Terms are governed by the laws of India. Disputes will be subject to exclusive jurisdiction of the courts located in [Your City, India].</li>
              <li><b>Grievance Redressal</b><br />If you have complaints or grievances regarding content or any issue, please contact:<br />
                <span className="block mt-2">Effective Date: May 2nd 2025<br />Grievance Officer: Mr. Keerthi Kadam<br />Contact: <a href="mailto:hi@viwaad.com" className="underline">hi@viwaad.com</a><br />We will respond within 15 days as per applicable IT rules.</span>
              </li>
            </ol>
          </div>
        </div>
      </section>
      {/* Privacy Policy Section */}
      <section id="privacy" className="w-full max-w-6xl mx-auto mb-16 fade-in px-2 sm:px-0">
        <div className="card bg-black border-2 border-[#FFC107]/40 relative overflow-hidden slide-up">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-[#FFC107] flex items-center gap-2 animated-underline">
            <span>Viwaad – Privacy Policy</span>
            <FaShieldAlt className="inline text-[#FFC107] text-2xl" />
          </h2>
          <p className="mb-4 text-[#FFC107] font-sans">Read the summary or expand to see the full privacy policy.</p>
          <button
            className="button-primary flex items-center gap-2 mb-4 transition-transform hover:scale-105"
            onClick={() => setShowPrivacy((v) => !v)}
            aria-expanded={showPrivacy}
          >
            {showPrivacy ? <FaChevronUp /> : <FaChevronDown />} {showPrivacy ? "Hide Details" : "Show Full Policy"}
          </button>
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${showPrivacy ? 'max-h-[2000px] opacity-100' : 'max-h-24 opacity-60'}`}
            style={{}}
          >
            <ol className="list-decimal pl-6 text-[#FFC107] font-sans space-y-2">
              <li><b>Introduction</b><br />Viwaad is committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your data when you use our mobile application and related services.</li>
              <li><b>Information We Collect</b><br />
                <ul className="list-disc pl-6">
                  <li>Personal Information: Name, email (if provided), device ID.</li>
                  <li>Non-Personal Information: Device type, operating system, usage data.</li>
                  <li>Anonymous Inputs: Opinions, ratings, and debate content shared anonymously.</li>
                </ul>
              </li>
              <li><b>How We Use Your Information</b><br />
                <ul className="list-disc pl-6">
                  <li>To operate and improve our app.</li>
                  <li>To personalize user experience.</li>
                  <li>To moderate content and ensure community safety.</li>
                  <li>To communicate with you if you&apos;ve provided contact details.</li>
                </ul>
              </li>
              <li><b>Data Sharing and Disclosure</b><br />We do not sell your personal data. We may share anonymized data for research or analytics. We may disclose data to comply with legal obligations or to protect user safety.</li>
              <li><b>Data Retention</b><br />We retain your data only for as long as necessary for legal, operational, or security reasons. Anonymous content may be stored indefinitely for platform insights.</li>
              <li><b>Cookies and Tracking Technologies</b><br />We may use cookies or similar technologies to track app usage for improvement and analytics. These do not collect personal data.</li>
              <li><b>Your Rights</b><br />You have the right to access, correct, or delete your personal data. For requests, contact the Grievance Officer listed below.</li>
              <li><b>Children&apos;s Privacy</b><br />Viwaad is not intended for children under 13. We do not knowingly collect personal information from children.</li>
              <li><b>Data Security</b><br />We implement technical and organizational measures to protect your data. However, no method of transmission over the internet is completely secure.</li>
              <li><b>Updates to this Policy</b><br />We may update this Privacy Policy occasionally. Continued use of Viwaad after updates means you accept the revised policy.</li>
              <li><b>Contact Us</b><br />
                <span className="block mt-2">Effective Date: May 2nd 2025<br />Grievance Officer: Mr. Keerthi Kadam<br />Contact: <a href="mailto:hi@viwaad.com" className="underline">hi@viwaad.com</a><br />We aim to respond within 15 days in compliance with Indian IT laws.</span>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}
