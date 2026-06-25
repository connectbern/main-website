<svelte:head>
	<title>Open Positions • Connect Bern</title>
</svelte:head>

<script>
    import { currentLanguage } from '$lib/stores/languageStore';
    import { t } from "$lib/locales/translations.js";
    import { POSITIONS } from "$lib/data/positions.data.js";
    import { getContext, onMount } from 'svelte';

    let scrollToContent;
    try {
        scrollToContent = getContext('scrollToContent');
    } catch (e) {
        scrollToContent = () => {};
    }

    onMount(() => {
        if (scrollToContent) {
            scrollToContent();
        }
    });

    $: lang = $currentLanguage;
</script>

<section>
    <div class="header">
        <h1>{t[lang]['open-positions-title']}</h1>
        <p class="intro">{t[lang]['open-positions-description']}</p>
    </div>

    <!-- Open Positions Cards -->
    <div class="waysToHelp">
        {#each POSITIONS as position}
            <div class="helpCard">
                <div class="helpIcon">{position.icon}</div>
                <h3>{position.title[lang]}</h3>
                <p>{position.description[lang]}</p>
            </div>
        {/each}
    </div>

    <div class="ctaWrap">
        <a href="/contact" class="btn btnPrimary">{t[lang]['open-positions-cta']}</a>
    </div>
</section>

<style>
    section {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2em 1em 4em;
    }

    .header {
        text-align: center;
        margin-bottom: 3em;
    }

    h1 {
        font-size: 3em;
        font-weight: bold;
        margin-bottom: 0.5em;
    }

    .intro {
        font-size: 1.3em;
        opacity: 0.9;
        line-height: 1.6;
        max-width: 700px;
        margin: 0 auto;
    }

    /* Position Cards */
    .waysToHelp {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5em;
        margin-bottom: 3em;
    }

    .helpCard {
        background: linear-gradient(135deg, rgba(108, 72, 167, 0.15), rgba(58, 152, 189, 0.15));
        border: 2px solid rgba(108, 72, 167, 0.3);
        border-radius: 1em;
        padding: 2em;
        transition: all 0.3s ease;
    }

    .helpCard:hover {
        transform: translateY(-5px);
        border-color: rgba(108, 72, 167, 0.5);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }

    .helpIcon {
        font-size: 3em;
        margin-bottom: 0.5em;
    }

    .helpCard h3 {
        font-size: 1.6em;
        font-weight: bold;
        margin-bottom: 0.8em;
    }

    .helpCard p {
        font-size: 1.05em;
        line-height: 1.6;
        opacity: 0.9;
        margin: 0;
    }

    /* CTA */
    .ctaWrap {
        text-align: center;
    }

    .btn {
        display: inline-block;
        padding: 0.7em 1.2em;
        border-radius: 0.5em;
        text-decoration: none;
        font-weight: 600;
        font-size: 0.9em;
        transition: all 0.2s ease;
        cursor: pointer;
        border: none;
        font-family: inherit;
        text-align: center;
        white-space: nowrap;
        line-height: 1.4;
        box-sizing: border-box;
    }

    .btnPrimary {
        background: linear-gradient(135deg, rgba(108, 72, 167, 0.9), rgba(58, 152, 189, 0.9));
        color: white;
    }

    .btnPrimary:hover {
        background: linear-gradient(135deg, rgba(108, 72, 167, 1), rgba(58, 152, 189, 1));
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 1.8em;
        }

        .intro {
            font-size: 1em;
        }

        .waysToHelp {
            grid-template-columns: 1fr;
            gap: 1.2em;
        }

        .helpIcon {
            font-size: 2.5em;
        }

        .helpCard h3 {
            font-size: 1.2em;
        }
    }
</style>
