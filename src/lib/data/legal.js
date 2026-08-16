// Single source of truth for the legally-required entity details.
// Used by both /impressum and /about so the values never drift.
export const legal = {
    name: 'Connect Bern',
    legalForm: { de: 'Verein', en: 'Association (Verein)' },
    // NOTE: address is required for Twint's review. To remove it later
    // (once Twint approves us), just delete this single line.
    address: 'Gutenbergstrasse 27, 3011 Bern',
    email: 'info@connectbern.ch',
    phone: '+41 78 316 67 27',
    // tel: link form of the phone number (no spaces).
    phoneTel: '+41783166727'
};
