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
            title: "Zufällige Tipps",
            pumpipumpe: {
                title: "Pumpipumpe",
                text: "Pumpipumpe ist eine Nachbarschafts-Initiative zum Ausleihen statt Kaufen. Leute kleben Sticker auf ihren Briefkasten, um zu zeigen, was sie gerne ausleihen, zum Beispiel eine Bohrmaschine, eine Leiter oder ein Velo. Auf der Karte siehst du, wer in deiner Nähe was anbietet, damit du Dinge ausleihen kannst, anstatt sie neu zu kaufen.",
                button: "Karte ansehen"
            }
        },
        en: {
            title: "Random Tips",
            pumpipumpe: {
                title: "Pumpipumpe",
                text: "Pumpipumpe is a neighbourhood initiative for borrowing instead of buying. People put stickers on their mailbox to show what they are happy to lend, for example a drill, a ladder or a bike. On the map you can see who near you offers what, so you can borrow things instead of buying them new.",
                button: "View Map"
            }
        }
    };
</script>

<div class="section">
    <div class="header">
        <h2>{content[lang].title}</h2>
    </div>

    <!-- Pumpipumpe -->
    <div class="tip-card accent">
        <h3 class="title-with-icon">
            <span class="icon">🔧</span>
            {content[lang].pumpipumpe.title}
        </h3>
        <p>{content[lang].pumpipumpe.text}</p>
        <a href="https://map.pumpipumpe.ch" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
            📍 {content[lang].pumpipumpe.button}
        </a>
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
