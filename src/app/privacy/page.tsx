import Link from "next/link";
import Image from "next/image";

export default function PrivacyPolicy() {
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
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>

        <div className="prose prose-lg prose-slate max-w-none">
          <p className="text-gray-600 mb-6">
            Ultimo aggiornamento: Marzo 2026
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Titolare del Trattamento</h2>
            <p className="text-gray-700 leading-relaxed">
              Il titolare del trattamento dei dati personali è ProfitSignal, contattabile all'indirizzo email:
              <a href="mailto:profitsignalmedia@gmail.com" className="text-blue-500 hover:underline ml-1">
                profitsignalmedia@gmail.com
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Dati Raccolti</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Raccogliamo i seguenti dati personali attraverso il nostro form di contatto:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Nome e cognome</li>
              <li>Indirizzo email</li>
              <li>Numero di telefono (opzionale)</li>
              <li>Messaggio e richieste specifiche</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Finalità del Trattamento</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              I dati personali sono trattati per le seguenti finalità:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Rispondere alle richieste di contatto e informazioni</li>
              <li>Fornire consulenze e preventivi</li>
              <li>Gestire la relazione commerciale</li>
              <li>Adempiere agli obblighi di legge</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Base Giuridica</h2>
            <p className="text-gray-700 leading-relaxed">
              Il trattamento dei dati si basa sul consenso dell'interessato e sull'esecuzione di misure precontrattuali
              adottate su richiesta dello stesso, ai sensi dell'art. 6 del Regolamento UE 2016/679 (GDPR).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Conservazione dei Dati</h2>
            <p className="text-gray-700 leading-relaxed">
              I dati personali saranno conservati per il tempo necessario al perseguimento delle finalità per le quali
              sono stati raccolti e comunque non oltre 24 mesi dall'ultimo contatto, salvo obblighi di legge.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Diritti dell'Interessato</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              In qualità di interessato, hai il diritto di:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Accedere ai tuoi dati personali</li>
              <li>Richiedere la rettifica o la cancellazione dei dati</li>
              <li>Limitare il trattamento</li>
              <li>Opporti al trattamento</li>
              <li>Richiedere la portabilità dei dati</li>
              <li>Revocare il consenso in qualsiasi momento</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Per esercitare i tuoi diritti, contattaci a:
              <a href="mailto:profitsignalmedia@gmail.com" className="text-blue-500 hover:underline ml-1">
                profitsignalmedia@gmail.com
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Sicurezza</h2>
            <p className="text-gray-700 leading-relaxed">
              Adottiamo misure tecniche e organizzative adeguate per proteggere i dati personali da accessi non autorizzati,
              perdita o distruzione.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Contatti</h2>
            <p className="text-gray-700 leading-relaxed">
              Per qualsiasi domanda relativa a questa Privacy Policy, contattaci:<br />
              Email: <a href="mailto:profitsignalmedia@gmail.com" className="text-blue-500 hover:underline">profitsignalmedia@gmail.com</a><br />
              Telefono: <a href="tel:+393920314427" className="text-blue-500 hover:underline">+39 392 031 4427</a>
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/" className="text-blue-500 hover:underline font-medium">
            ← Torna alla homepage
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
