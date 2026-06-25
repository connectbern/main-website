<script>
    import { getContext, onMount } from 'svelte';
    import { currentLanguage } from '$lib/stores/languageStore';

    const scrollToContent = getContext('scrollToContent');
    $: lang = $currentLanguage;

    onMount(() => {
        scrollToContent();
    });

    const content = {
        de: {
            title: "Repair Café",
            intro: {
                title: "Reparieren statt wegwerfen",
                text: "Im Repair Café reparierst du kaputte Sachen kostenlos zusammen mit freiwilligen Helferinnen und Helfern. Bring deine defekten Gegenstände vorbei, zum Beispiel Kleider, Velos, Spielzeug, Elektrogeräte oder Möbel, und repariere sie gemeinsam mit jemandem, der sich auskennt. Es geht nicht nur ums Reparieren, sondern auch ums Lernen, ums Kennenlernen und darum, weniger Abfall zu produzieren."
            },
            how: {
                title: "So funktioniert es",
                text: "Repair Cafés finden an wechselnden Tagen und Orten in Bern statt. Auf der Website von Repair Café Schweiz findest du die nächsten Termine in deiner Nähe. Komm einfach mit deinem kaputten Gegenstand vorbei, oft gibt es auch Kaffee und Kuchen.",
                button: "Termine in Bern finden"
            },
            note: {
                title: "Gut zu wissen",
                text: "Die Hilfe ist gratis, Ersatzteile musst du je nach Reparatur selbst bezahlen. Eine Reparatur kann nicht garantiert werden, aber sehr vieles lässt sich überraschend leicht wieder flott machen."
            }
        },
        en: {
            title: "Repair Café",
            intro: {
                title: "Repair instead of replace",
                text: "At a Repair Café you fix broken things for free together with volunteer helpers. Bring your broken items, for example clothes, bikes, toys, electrical devices or furniture, and repair them together with someone who knows how. It is not only about repairing, but also about learning, meeting people and producing less waste."
            },
            how: {
                title: "How it works",
                text: "Repair Cafés take place on changing days and at changing locations in Bern. On the Repair Café Switzerland website you can find the next dates near you. Just come by with your broken item, often there is coffee and cake too.",
                button: "Find dates in Bern"
            },
            note: {
                title: "Good to know",
                text: "The help is free, but depending on the repair you pay for spare parts yourself. A repair cannot be guaranteed, but a surprising amount of things can be fixed quite easily."
            }
        }
    };
</script>

<div class="section">
    <div class="header">
        <h2>{content[lang].title}</h2>
    </div>

    <!-- Intro -->
    <div class="tip-card accent">
        <h3 class="title-with-icon">
            <span class="icon">🔧</span>
            {content[lang].intro.title}
        </h3>
        <p>{content[lang].intro.text}</p>
    </div>

    <!-- How it works -->
    <div class="tip-card highlight">
        <h3 class="title-with-icon">
            <span class="icon">🗓️</span>
            {content[lang].how.title}
        </h3>
        <p>{content[lang].how.text}</p>
        <a href="https://www.repair-cafe.ch/de/standorte/" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
            📍 {content[lang].how.button}
        </a>
    </div>

    <!-- Good to know -->
    <div class="tip-card">
        <h3 class="title-with-icon">
            <span class="icon">💡</span>
            {content[lang].note.title}
        </h3>
        <p>{content[lang].note.text}</p>
    </div>
</div>

<style>
    .section {
        padding: 0;
    }

    .header {
        margin-bottom: 2rem;
    }

    h2 {
        font-size: 2.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
        color: white;
    }

    .tip-card {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        padding: 1.5rem;
        margin-bottom: 1.5rem;
        transition: all 0.3s ease;
    }

    .tip-card:hover {
        background: rgba(255, 255, 255, 0.08);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }

    .tip-card.highlight {
        background: rgba(255, 255, 255, 0.05);
        border-color: rgba(255, 255, 255, 0.15);
    }

    .tip-card.accent {
        background: rgba(255, 255, 255, 0.05);
        border-color: rgba(255, 255, 255, 0.15);
    }

    .title-with-icon {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 1rem;
        font-size: 1.5rem;
        font-weight: bold;
        color: white;
    }

    .icon {
        font-size: 2rem;
        flex-shrink: 0;
    }

    h3 {
        font-size: 1.5rem;
        font-weight: bold;
        margin: 0;
        color: white;
    }

    p {
        font-size: 1.05rem;
        line-height: 1.7;
        margin-bottom: 1rem;
        color: rgba(255, 255, 255, 0.9);
    }

    .btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0.75rem 1.25rem;
        border-radius: 8px;
        text-decoration: none;
        font-weight: 600;
        font-size: 0.95rem;
        transition: all 0.2s ease;
        border: none;
        cursor: pointer;
        white-space: nowrap;
    }

    .btn-primary {
        background: rgba(255, 255, 255, 0.1);
        color: white;
        border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .btn-primary:hover {
        background: rgba(255, 255, 255, 0.15);
        transform: translateY(-2px);
    }

    @media (max-width: 768px) {
        h2 {
            font-size: 2rem;
        }

        .tip-card {
            padding: 1.25rem;
        }

        .icon {
            font-size: 2rem;
        }

        h3 {
            font-size: 1.3rem;
        }

        .btn {
            width: 100%;
        }
    }
</style>
