<svelte:head>
	<title>About • Connect Bern </title>
</svelte:head>


<script>
    import { currentLanguage } from '$lib/stores/languageStore';
    import { legal } from '$lib/data/legal';

    $: lang = $currentLanguage;
</script>


<section>
    <p>
        We're all about connecting people, check out our volunteer project at stayinginbern.com
    </p>
    <p>
        If you have any feedback, questions or concerns, don't hesitate to reach out!
    </p>

    <h2>{lang === 'de' ? 'Impressum' : 'Legal Notice'}</h2>

    <div class="legalBox">
        <div class="legalGrid">
            <span class="legalKey">{lang === 'de' ? 'Name' : 'Name'}</span>
            <span>{legal.name}</span>

            <span class="legalKey">{lang === 'de' ? 'Rechtsform' : 'Legal form'}</span>
            <span>{lang === 'de' ? legal.legalForm.de : legal.legalForm.en}</span>

            <span class="legalKey">{lang === 'de' ? 'Adresse' : 'Address'}</span>
            <span>{legal.address}</span>

            <span class="legalKey">{lang === 'de' ? 'E-Mail' : 'Email'}</span>
            <a href="mailto:{legal.email}">{legal.email}</a>

            <span class="legalKey">{lang === 'de' ? 'Telefon' : 'Phone'}</span>
            <a href="tel:{legal.phoneTel}">{legal.phone}</a>
        </div>
    </div>

    <a class="legalLink" href="/impressum">{lang === 'de' ? 'Zum vollständigen Impressum' : 'View full legal notice'}</a>
</section>


<style>
    section {
        padding: 2em;
        max-width: 700px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 1.5em;
    }

    h2 {
        font-size: 2em;
        font-weight: bold;
        margin: 0;
    }

    .legalLink {
        align-self: flex-start;
        color: inherit;
        text-decoration: underline;
        text-underline-offset: 3px;
    }

    .legalLink:hover {
        opacity: 0.8;
    }

    .legalBox {
        background: rgba(255, 255, 255, 0.06);
        border: 1px solid rgba(255, 255, 255, 0.12);
        border-radius: 1em;
        padding: 2em;
    }

    .legalGrid {
        display: grid;
        grid-template-columns: max-content 1fr;
        gap: 0.7em 2.5em;
        font-size: 1.1em;
        line-height: 1.6;
    }

    .legalKey {
        font-weight: 600;
        opacity: 0.6;
        white-space: nowrap;
    }

    .legalGrid a {
        color: inherit;
        text-decoration: underline;
        text-underline-offset: 3px;
    }

    .legalGrid a:hover {
        opacity: 0.8;
    }

    @media (max-width: 500px) {
        .legalGrid {
            grid-template-columns: 1fr;
            gap: 0.1em;
        }

        .legalKey {
            margin-top: 0.8em;
        }
    }
</style>
