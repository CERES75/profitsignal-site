import Link from "next/link";
import Image from "next/image";

export default function CookiePolicyEN() {
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
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Cookie Policy</h1>

        <div className="prose prose-lg prose-slate max-w-none">
          <p className="text-gray-600 mb-6">
            Last updated: March 2026
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. What Are Cookies</h2>
            <p className="text-gray-700 leading-relaxed">
              Cookies are small text files that are stored on your device when you visit a website.
              They are used to improve your browsing experience and to collect information about site usage.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Types of Cookies Used</h2>

            <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Technical Cookies (Necessary)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              These cookies are essential for the proper functioning of the site and cannot be disabled.
              They include session management and basic preference cookies.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Analytics Cookies</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use these cookies to understand how visitors interact with our site,
              collecting information anonymously. This helps us continuously improve the site.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Third-Party Cookies</h3>
            <p className="text-gray-700 leading-relaxed">
              Our site may use third-party services that set their own cookies, such as:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-2">
              <li>Web3Forms (for contact form submission)</li>
              <li>Google Fonts (for site fonts)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Managing Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can manage your cookie preferences in several ways:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                <strong>Browser settings:</strong> Most browsers allow you to control cookies
                through settings. You can block or delete existing cookies.
              </li>
              <li>
                <strong>Private browsing:</strong> You can use private/incognito browsing mode
                to limit cookie storage.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. How to Disable Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Here's how to disable cookies in major browsers:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
              <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
              <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
              <li><strong>Edge:</strong> Settings → Cookies and site permissions</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>Note:</strong> Disabling cookies may affect site functionality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Policy Updates</h2>
            <p className="text-gray-700 leading-relaxed">
              This Cookie Policy may be updated periodically. We encourage you to check this page
              regularly for any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Contact</h2>
            <p className="text-gray-700 leading-relaxed">
              For any questions regarding this Cookie Policy, contact us:<br />
              Email: <a href="mailto:profitsignalmedia@gmail.com" className="text-blue-500 hover:underline">profitsignalmedia@gmail.com</a><br />
              Phone: <a href="tel:+393920314427" className="text-blue-500 hover:underline">+39 392 031 4427</a>
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex gap-6">
          <Link href="/en" className="text-blue-500 hover:underline font-medium">
            ← Back to homepage
          </Link>
          <Link href="/en/privacy" className="text-blue-500 hover:underline font-medium">
            Privacy Policy
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
