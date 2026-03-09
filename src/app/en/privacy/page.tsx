import Link from "next/link";
import Image from "next/image";

export default function PrivacyPolicyEN() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <nav className="bg-slate-900 py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/en" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="ProfitSignal"
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
            <span className="font-bold text-xl text-white">
              Profit<span className="text-blue-400">Signal</span>
            </span>
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>

        <div className="prose prose-lg prose-slate max-w-none">
          <p className="text-gray-600 mb-6">
            Last updated: March 2026
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Data Controller</h2>
            <p className="text-gray-700 leading-relaxed">
              The data controller for personal data is ProfitSignal, contactable at:
              <a href="mailto:profitsignalmedia@gmail.com" className="text-blue-500 hover:underline ml-1">
                profitsignalmedia@gmail.com
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Data Collected</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We collect the following personal data through our contact form:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number (optional)</li>
              <li>Message and specific requests</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Purpose of Processing</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Personal data is processed for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Responding to contact requests and inquiries</li>
              <li>Providing consultations and quotes</li>
              <li>Managing the business relationship</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Legal Basis</h2>
            <p className="text-gray-700 leading-relaxed">
              Data processing is based on the consent of the data subject and the execution of pre-contractual
              measures taken at their request, pursuant to Article 6 of EU Regulation 2016/679 (GDPR).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed">
              Personal data will be retained for the time necessary to achieve the purposes for which it was
              collected and in any case no longer than 24 months from the last contact, unless required by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              As a data subject, you have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Access your personal data</li>
              <li>Request rectification or deletion of data</li>
              <li>Restrict processing</li>
              <li>Object to processing</li>
              <li>Request data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              To exercise your rights, contact us at:
              <a href="mailto:profitsignalmedia@gmail.com" className="text-blue-500 hover:underline ml-1">
                profitsignalmedia@gmail.com
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We implement appropriate technical and organizational measures to protect personal data from
              unauthorized access, loss, or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Contact</h2>
            <p className="text-gray-700 leading-relaxed">
              For any questions regarding this Privacy Policy, contact us:<br />
              Email: <a href="mailto:profitsignalmedia@gmail.com" className="text-blue-500 hover:underline">profitsignalmedia@gmail.com</a><br />
              Phone: <a href="tel:+393920314427" className="text-blue-500 hover:underline">+39 392 031 4427</a>
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/en" className="text-blue-500 hover:underline font-medium">
            ← Back to homepage
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400 text-sm">
          © 2026 ProfitSignal. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
