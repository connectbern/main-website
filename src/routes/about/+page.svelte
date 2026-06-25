<svelte:head>
	<title>Info & FAQ • Connect Bern</title>
</svelte:head>

<script>
    import { t } from "$lib/locales/translations.js";
    import { currentLanguage } from '$lib/stores/languageStore';

    $: lang = $currentLanguage;
</script>

<section>
    <div class="cntr">
        <h1>{t[lang]["info-title"]}</h1>
        <p class="intro">{t[lang]["info-intro"]}</p>

        <!-- Group Guidelines -->
        <div class="card" id="guidelines">
            <h2>{t[lang]["info-guidelines-title"]}</h2>
            <p>{t[lang]["info-guidelines-intro"]}</p>
            <ul>
                {#each t[lang]["info-guidelines"] as item}
                    <li>{item}</li>
                {/each}
            </ul>
        </div>

        <!-- Deposit explained -->
        <div class="card" id="deposit">
            <h2>{t[lang]["info-deposit-title"]}</h2>
            <p>{t[lang]["info-deposit-info"]}</p>
            <p class="alternative">{t[lang]["info-deposit-alternative"]}</p>
        </div>

        <!-- Photos & Usage disclaimer -->
        <div class="card" id="photos">
            <h2>{t[lang]["info-photos-title"]}</h2>
            <p>{t[lang]["info-photos-body"]}</p>
        </div>

        <!-- FAQ accordion -->
        <div class="card" id="faq">
            <h2>{t[lang]["info-faq-title"]}</h2>
            {#each t[lang]["info-faq"] as item}
                <details class="faq-item">
                    <summary>{item.q}</summary>
                    <p>{item.a}</p>
                </details>
            {/each}
        </div>
    </div>
</section>

<style>
    section {
        padding: 2em;
        max-width: 800px;
        margin: 0 auto;
    }

    .cntr {
        display: flex;
        flex-direction: column;
        gap: 1.5em;
        margin: 1em 0;
    }

    h1 {
        font-size: 3em;
        font-weight: bold;
        text-align: center;
        margin: 0;
    }

    .intro {
        text-align: center;
        font-size: 1.2em;
        line-height: 1.6;
        margin: 0;
    }

    .card {
        background: rgba(255, 255, 255, 0.05);
        padding: 1.5em;
        border-radius: 1em;
        border: 1px solid rgba(255, 255, 255, 0.1);
        display: flex;
        flex-direction: column;
        gap: 1em;
    }

    h2 {
        font-size: 1.8em;
        font-weight: bold;
        margin: 0;
    }

    p {
        font-size: 1.1em;
        line-height: 1.7;
        margin: 0;
    }

    .alternative {
        font-style: italic;
    }

    ul {
        margin: 0;
        padding-left: 1.2em;
        display: flex;
        flex-direction: column;
        gap: 0.6em;
    }

    li {
        font-size: 1.1em;
        line-height: 1.6;
    }

    .faq-item {
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        padding: 0.8em 0 0.2em;
    }

    .faq-item:first-of-type {
        border-top: none;
        padding-top: 0;
    }

    summary {
        cursor: pointer;
        font-size: 1.2em;
        font-weight: bold;
        list-style: none;
        display: flex;
        align-items: center;
        gap: 0.6em;
    }

    summary::-webkit-details-marker {
        display: none;
    }

    summary::before {
        content: "+";
        font-size: 1.2em;
        line-height: 1;
        width: 1em;
        flex-shrink: 0;
    }

    .faq-item[open] summary::before {
        content: "×";
    }

    .faq-item p {
        margin-top: 0.8em;
        padding-left: 1.6em;
    }

    @media (max-width: 800px) {
        section {
            padding: 1.5em;
        }

        h1 {
            font-size: 2em;
        }

        h2 {
            font-size: 1.5em;
        }

        p, li {
            font-size: 1rem;
        }
    }
</style>
