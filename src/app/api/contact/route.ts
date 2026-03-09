import { NextRequest, NextResponse } from 'next/server';

// Web3Forms - Servizio email gratuito
// Per ottenere la tua chiave: vai su https://web3forms.com e inserisci profitsignalmedia@gmail.com
const WEB3FORMS_ACCESS_KEY = process.env.WEB3FORMS_ACCESS_KEY || '';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nome, email, telefono, servizio, messaggio, lang } = body;

    // Validate required fields
    if (!nome || !email || !messaggio) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check for access key
    if (!WEB3FORMS_ACCESS_KEY) {
      console.error('WEB3FORMS_ACCESS_KEY is not set');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Map service values to readable names
    const serviceMap: Record<string, string> = {
      'sito-web': lang === 'en' ? 'High-converting website' : 'Sito web ad alta conversione',
      'lead-gen': lang === 'en' ? 'Lead generation system' : 'Sistema di lead generation',
      'acquisizione': lang === 'en' ? 'Client acquisition strategy' : 'Strategia acquisizione clienti',
      'altro': lang === 'en' ? 'Other' : 'Altro',
    };

    const serviceName = servizio ? serviceMap[servizio] || servizio : (lang === 'en' ? 'Not specified' : 'Non specificato');

    // Email subject
    const emailSubject = lang === 'en'
      ? `New Contact Request from ${nome} - ProfitSignal`
      : `Nuova Richiesta di Contatto da ${nome} - ProfitSignal`;

    // Send via Web3Forms
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: emailSubject,
        from_name: 'ProfitSignal Website',
        replyto: email,
        // Form fields
        Nome: nome,
        Email: email,
        Telefono: telefono || (lang === 'en' ? 'Not provided' : 'Non fornito'),
        Servizio: serviceName,
        Messaggio: messaggio,
        // Additional info
        'Fonte': 'ProfitSignal Contact Form',
        'Lingua': lang === 'en' ? 'English' : 'Italiano',
      })
    });

    const result = await response.json();

    if (result.success) {
      return NextResponse.json(
        { success: true },
        { status: 200 }
      );
    } else {
      console.error('Web3Forms error:', result);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
