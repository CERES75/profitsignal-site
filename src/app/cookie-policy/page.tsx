import Link from "next/link";
import Image from "next/image";

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <nav className="bg-slate-900 py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
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
            Ultimo aggiornamento: Marzo 2026
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Cosa Sono i Cookie</h2>
            <p className="text-gray-700 leading-relaxed">
              I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo quando visiti un sito web.
              Vengono utilizzati per migliorare la tua esperienza di navigazione e per raccogliere informazioni sull'utilizzo del sito.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Tipologie di Cookie Utilizzati</h2>

            <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Cookie Tecnici (Necessari)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Questi cookie sono essenziali per il corretto funzionamento del sito e non possono essere disattivati.
              Includono cookie per la gestione della sessione e delle preferenze di base.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Cookie Analitici</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Utilizziamo questi cookie per comprendere come i visitatori interagiscono con il nostro sito,
              raccogliendo informazioni in forma anonima. Questo ci aiuta a migliorare continuamente il sito.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Cookie di Terze Parti</h3>
            <p className="text-gray-700 leading-relaxed">
              Il nostro sito potrebbe utilizzare servizi di terze parti che impostano i propri cookie, come:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-2">
              <li>Web3Forms (per l'invio del form di contatto)</li>
              <li>Google Fonts (per i caratteri del sito)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Gestione dei Cookie</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Puoi gestire le tue preferenze sui cookie in diversi modi:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                <strong>Impostazioni del browser:</strong> La maggior parte dei browser ti permette di controllare i cookie
                attraverso le impostazioni. Puoi bloccare o eliminare i cookie esistenti.
              </li>
              <li>
                <strong>Navigazione privata:</strong> Puoi utilizzare la modalità di navigazione privata/incognito
                per limitare la memorizzazione dei cookie.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Come Disabilitare i Cookie</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ecco come disabilitare i cookie nei principali browser:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Chrome:</strong> Impostazioni → Privacy e sicurezza → Cookie e altri dati dei siti</li>
              <li><strong>Firefox:</strong> Opzioni → Privacy e Sicurezza → Cookie e dati dei siti web</li>
              <li><strong>Safari:</strong> Preferenze → Privacy → Gestisci dati siti web</li>
              <li><strong>Edge:</strong> Impostazioni → Cookie e autorizzazioni sito</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>Nota:</strong> Disabilitare i cookie potrebbe influire sulla funzionalità del sito.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Aggiornamenti della Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              Questa Cookie Policy potrebbe essere aggiornata periodicamente. Ti invitiamo a consultare questa pagina
              regolarmente per eventuali modifiche.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Contatti</h2>
            <p className="text-gray-700 leading-relaxed">
              Per qualsiasi domanda relativa a questa Cookie Policy, contattaci:<br />
              Email: <a href="mailto:profitsignalmedia@gmail.com" className="text-blue-500 hover:underline">profitsignalmedia@gmail.com</a><br />
              Telefono: <a href="tel:+393920314427" className="text-blue-500 hover:underline">+39 392 031 4427</a>
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex gap-6">
          <Link href="/" className="text-blue-500 hover:underline font-medium">
            ← Torna alla homepage
          </Link>
          <Link href="/privacy" className="text-blue-500 hover:underline font-medium">
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
