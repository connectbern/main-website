<script>
    import { t } from "$lib/locales/translations.js";
    import { currentLanguage } from '$lib/stores/languageStore';
    $: language = $currentLanguage;

    const contactInfo = {
        email: 'info@connectbern.ch',
        instagram: 'connect.bern',
        facebook: 'connectbern',
        facebookUrl: 'https://www.facebook.com/connectbern',
        phone: '+41 78 316 67 27',
        phoneFormatted: '+41 78 316 67 27',
        whatsappNumber: '41783166727',
        telegramUrl: 'https://t.me/connectbern',
        // TODO: maintainer to fill in real Signal and Matrix targets before merge
        signalUrl: '',
        matrixUrl: ''
    };

    let showCopiedMessage = false;

    async function copyPhoneNumber(e) {
        // Only copy on desktop, allow normal tel: link on mobile
        if (window.innerWidth > 768) {
            e.preventDefault();
            try {
                await navigator.clipboard.writeText(contactInfo.phone);
                showCopiedMessage = true;
                setTimeout(() => {
                    showCopiedMessage = false;
                }, 2500);
            } catch (err) {
                console.error('Failed to copy:', err);
            }
        }
    }
</script>

<footer>
    <div class="footer-content">
        <div class="section">
            <h3>{t[language]["footer.contact-us"]}</h3>
            <div class="contact-links">
                <a href="mailto:{contactInfo.email}" class="contact-item" aria-label="Email">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="2" y="4" width="20" height="16" rx="2"/>
                        <path d="M2 7l10 7 10-7"/>
                    </svg>
                    <span>{contactInfo.email}</span>
                </a>

                <a href="tel:{contactInfo.phone}" class="contact-item" aria-label="Phone" on:click={copyPhoneNumber}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    <span>{contactInfo.phoneFormatted}</span>
                </a>

                <a href="/contact" class="contact-item" title='Contact'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path fill="rgb(255, 255, 255)" d="M1.706 16.556c0.192-0.684 0.553-1.308 1.059-1.814l8.494-8.494 1.589-1.589c0.778 0.778 2.405 2.405 4.875 4.875l1.589 1.589-1.589 1.589-8.494 8.494c-0.502 0.502-1.129 0.868-1.814 1.059L1.425 23.904c-0.389 0.108-0.811 0-1.097-0.291s-0.399-0.708-0.291-1.097l1.669-6.96zm2.606-0.173c-0.206 0.22-0.356 0.488-0.436 0.778l-1.13 4.073 4.073-1.13c0.3-0.084 0.572-0.239 0.797-0.455l-3.304-3.266zm16.594-6.844c-0.778-0.778-2.405-2.405-4.875-4.875L14.438 3.07c1.238-1.238 1.934-1.934 2.098-2.098C17.166 0.328 18.023-0.028 18.938-0.028s1.772 0.356 2.402 1.0l1.673 1.673c0.644 0.63 1.0 1.487 1.0 2.402s-0.356 1.772-1.0 2.402c-0.164 0.164-0.86 0.86-2.098 2.098z"/>
                    </svg>
                    <span>{t[language]["footer.contact-form"]}</span>
                </a>

                <a href="https://wa.me/{contactInfo.whatsappNumber}" target="_blank" rel="noopener noreferrer" class="contact-item whatsapp" aria-label="WhatsApp">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <span>WhatsApp</span>
                </a>

                <a href="{contactInfo.telegramUrl}" target="_blank" rel="noopener noreferrer" class="contact-item telegram" aria-label="Telegram">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                    <span>Telegram</span>
                </a>

                {#if contactInfo.signalUrl}
                    <a href="{contactInfo.signalUrl}" target="_blank" rel="noopener noreferrer" class="contact-item signal" aria-label="Signal">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.25a9.75 9.75 0 0 1 8.66 14.215l-1.08-2.66a7.5 7.5 0 0 0-2.6-9.26l-.84-.6.6-.84-1.06-.76A9.75 9.75 0 0 1 12 2.25zm-4.32.99 1.06.76-.6.84-.84.6a7.5 7.5 0 0 0-2.6 9.26l-1.08 2.66A9.75 9.75 0 0 1 7.68 3.24zM12 6a6 6 0 0 0-5.36 8.69l-.99 2.44 2.44-.99A6 6 0 1 0 12 6zm-9.46 9.79 1.04 2.55-2.55 1.04a.75.75 0 0 1-.98-.98l1.04-2.55a11.4 11.4 0 0 0 1.45-.06zm18.92 0a11.4 11.4 0 0 0 1.45.06l1.04 2.55a.75.75 0 0 1-.98.98l-2.55-1.04zm-13.3 3.49 2.66 1.08a9.75 9.75 0 0 0 6.36 0l2.66-1.08a9.75 9.75 0 0 1-11.68 0z"/>
                        </svg>
                        <span>Signal</span>
                    </a>
                {/if}

                {#if contactInfo.matrixUrl}
                    <a href="{contactInfo.matrixUrl}" target="_blank" rel="noopener noreferrer" class="contact-item matrix" aria-label="Matrix">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M.632.55v22.9H2.28V24H0V0h2.28v.55zm7.043 7.26v1.157h.033c.309-.443.683-.784 1.117-1.024.433-.245.936-.365 1.504-.365.54 0 1.033.107 1.481.314.448.208.785.582 1.02 1.108.254-.374.6-.706 1.034-.992.434-.287.95-.43 1.546-.43.453 0 .872.056 1.26.167.388.11.716.286.993.53.276.245.489.559.646.951.152.392.23.863.23 1.413v5.732h-2.272v-4.851c0-.286-.01-.554-.032-.811a1.71 1.71 0 0 0-.18-.679.974.974 0 0 0-.42-.453c-.184-.115-.439-.17-.764-.17-.328 0-.594.06-.797.184a1.405 1.405 0 0 0-.466.485 1.95 1.95 0 0 0-.231.674c-.041.249-.06.502-.06.762v4.86h-2.272v-4.81c0-.254-.004-.503-.018-.747a2.108 2.108 0 0 0-.143-.677.997.997 0 0 0-.392-.49c-.176-.124-.443-.184-.795-.184-.106 0-.245.024-.42.073-.176.05-.347.14-.512.272a1.625 1.625 0 0 0-.42.555c-.115.235-.171.544-.171.926v5.082H5.483V7.81zm15.693 15.64V.55H21.72V0H24v24h-2.28v-.55z"/>
                        </svg>
                        <span>Matrix</span>
                    </a>
                {/if}
            </div>
        </div>

        <div class="section">
            <h3>{t[language]["footer.follow-us"]}</h3>
            <div class="contact-links">
                <a href="https://instagram.com/{contactInfo.instagram}" target="_blank" rel="noopener noreferrer" class="contact-item" aria-label="Instagram">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                    <span>@{contactInfo.instagram}</span>
                </a>

                <a href="{contactInfo.facebookUrl}" target="_blank" rel="noopener noreferrer" class="contact-item" aria-label="Facebook">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span>Connect Bern</span>
                </a>
            </div>
        </div>
    </div>

    <div class="impressum-section">
        <a href="/impressum" class="impressum-link">Impressum</a>
    </div>

    <div class="open-source-section">
        <a href="https://github.com/ian-codes/connectbern/issues" target="_blank" rel="noopener noreferrer" class="github-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>This project is open source! We'd love it if you could contribute, report bugs or suggest new features, looking forward to hear from you on GitHub!</span>
        </a>
    </div>

    {#if showCopiedMessage}
        <div class="toast">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>Phone number copied!</span>
        </div>
    {/if}
</footer>

<style>
    footer {
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(10px);
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        margin-top: 100px;
        padding: 3em 2em 2em;
        width: 100%;
        position: relative;
        box-sizing: border-box;
    }

    .footer-content {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        gap: 4em;
        justify-content: center;
    }

    .section {
        flex: 1;
        max-width: 500px;
    }

    h3 {
        color: white;
        margin-bottom: 1.5em;
        font-size: 1.5em;
        text-align: center;
    }

    .contact-links {
        align-self: center;
        width: 100%;
        display: grid;
        gap: 1em;
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));

    }

    .contact-item {
        display: flex;
        align-items: center;
        gap: 0.5em;
        color: white;
        text-decoration: none;
        padding: 0.8em 1.2em;
        border-radius: 0.5em;
        background: rgba(255, 255, 255, 0.1);
        transition: all 0.3s ease;
        box-shadow: -1px -1px 2px rgba(255, 255, 255, 0.2), 1px 1px 2px rgba(0, 0, 0, 0.3);
    }

    .contact-item:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: translateY(-2px);
        box-shadow: -1px -1px 4px rgba(255, 255, 255, 0.3), 1px 1px 4px rgba(0, 0, 0, 0.4), 0 4px 15px rgba(255, 255, 255, 0.1);
    }

    .contact-item svg {
        flex-shrink: 0;
        display: block;
    }

    .contact-item span {
        line-height: 1;
    }

    .contact-item.whatsapp {
        background: rgba(37, 211, 102, 0.2);
    }

    .contact-item.whatsapp:hover {
        background: rgba(37, 211, 102, 0.3);
    }

    .contact-item.telegram {
        background: rgba(42, 171, 238, 0.2);
    }

    .contact-item.telegram:hover {
        background: rgba(42, 171, 238, 0.3);
    }

    .contact-item.signal {
        background: rgba(58, 118, 244, 0.2);
    }

    .contact-item.signal:hover {
        background: rgba(58, 118, 244, 0.3);
    }

    .contact-item.matrix {
        background: rgba(255, 255, 255, 0.12);
    }

    .contact-item.matrix:hover {
        background: rgba(255, 255, 255, 0.22);
    }

    .impressum-section {
        margin-top: 2em;
        padding-top: 1.5em;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        display: flex;
        justify-content: center;
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
    }

    .impressum-link {
        color: rgba(255, 255, 255, 0.5);
        text-decoration: none;
        font-size: 0.9em;
        transition: color 0.2s ease;
    }

    .impressum-link:hover {
        color: rgba(255, 255, 255, 0.9);
    }

    .open-source-section {
        margin-top: 3em;
        padding-top: 2em;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        display: flex;
        justify-content: center;
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
        box-sizing: border-box;
    }

    .github-link {
        display: flex;
        align-items: center;
        gap: 0.75em;
        color: rgba(255, 255, 255, 0.8);
        text-decoration: none;
        font-size: 0.9em;
        padding: 0.75em 1.25em;
        border-radius: 0.5em;
        background: rgba(255, 255, 255, 0.05);
        transition: all 0.3s ease;
        max-width: 600px;
        text-align: left;
    }

    .github-link span {
        line-height: 1.4;
    }

    .github-link:hover {
        background: rgba(255, 255, 255, 0.1);
        color: white;
        transform: translateY(-2px);
    }

    .github-link svg {
        flex-shrink: 0;
    }

    .toast {
        position: fixed;
        bottom: 2em;
        right: auto;
        left: 1em;
        background: rgba(100, 150, 255, 0.95);
        color: white;
        padding: 1em 1.5em;
        border-radius: 0.75em;
        display: flex;
        align-items: center;
        gap: 0.75em;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), -1px -1px 4px rgba(255, 255, 255, 0.2);
        animation: slideIn 0.3s ease, slideOut 0.3s ease 2.2s;
        font-weight: 500;
        z-index: 1000;
        max-width: calc(100% - 2em);
    }

    @keyframes slideIn {
        from {
            transform: translateX(-150%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(-150%);
            opacity: 0;
        }
    }

    @media (max-width: 768px) {
        .footer-content {
            flex-direction: column;
            gap: 2em;
        }

        .open-source-section {
            margin-top: 2em;
            padding-top: 1.5em;
            padding-left: 1em;
            padding-right: 1em;
        }

        .github-link {
            font-size: 0.85em;
            padding: 0.6em 1em;
        }
    }

    @media (max-width: 600px) {
        footer {
            padding: 2em 1em 1.5em;
        }

        .footer-content {
            gap: 2em;
            padding: 0 0.5em;
        }

        .section {
            max-width: 100%;
        }

        h3 {
            font-size: 1.1em;
            margin-bottom: 0.8em;
        }

        .contact-links {
            flex-direction: column;
            align-items: center;
            gap: 0.6em;
        }

        .contact-item {
            justify-content: center;
            padding: 0.5em 0.7em;
            font-size: 0.8em;
            gap: 0.4em;
            max-width: 85%;
            width: auto;
        }

        .contact-item svg {
            width: 14px;
            height: 14px;
        }

        .contact-item span {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .toast {
            bottom: 1em;
            right: auto;
            left: 0.5em;
            padding: 0.8em 1em;
            font-size: 0.85em;
        }

        .github-link {
            font-size: 0.85em;
            padding: 0.6em 0.8em;
            gap: 0.5em;
            max-width: 100%;
            width: 100%;
            align-items: flex-start;
            box-sizing: border-box;
        }

        .github-link svg {
            width: 16px;
            height: 16px;
            flex-shrink: 0;
            margin-top: 0.1em;
        }

        .github-link span {
            word-wrap: break-word;
            overflow-wrap: break-word;
        }
    }

    @media (max-width: 400px) {
        .contact-item {
            padding: 0.4em 0.6em;
            font-size: 0.75em;
            max-width: 90%;
        }

        .contact-item svg {
            width: 13px;
            height: 13px;
        }

        .github-link {
            font-size: 0.8em;
            padding: 0.5em 0.6em;
            max-width: 100%;
            gap: 0.4em;
            box-sizing: border-box;
        }

        .github-link svg {
            width: 14px;
            height: 14px;
        }
    }
</style>
