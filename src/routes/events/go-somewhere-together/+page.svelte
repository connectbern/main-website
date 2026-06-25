<svelte:head>
	<!-- TEMPLATE: replace with the real event title and description -->
	<title>Go Somewhere Together • Events • Connect Bern</title>
	<meta name="description" content="A Connect Bern outing template: we meet, travel somewhere together and do something fun. Replace this copy with your real event." />

	<!-- TEMPLATE: this is a template page, not a live event. Remove the noindex tag below once you turn it into a real event. -->
	<meta name="robots" content="noindex" />

	<!-- Open Graph -->
	<!-- TEMPLATE: replace the slug "go-somewhere-together" and the title/description -->
	<meta property="og:url" content="https://connectbern.ch/events/go-somewhere-together" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Go Somewhere Together • Connect Bern" />
	<meta property="og:description" content="We meet, travel somewhere together and do something fun. Beginner friendly, come join us!" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="connectbern.ch" />
	<meta property="twitter:url" content="https://connectbern.ch/events/go-somewhere-together" />
	<meta name="twitter:title" content="Go Somewhere Together • Connect Bern" />
	<meta name="twitter:description" content="We meet, travel somewhere together and do something fun. Beginner friendly, come join us!" />
</svelte:head>

<script>
    import { currentLanguage } from '$lib/stores/languageStore';

    $: lang = $currentLanguage;

    // TEMPLATE: every field below has a German (de) and an English (en) version.
    // Replace the placeholder text in BOTH languages. The inline comments tell you what each field is.
    const content = {
        de: {
            title: "Gemeinsam unterwegs", // TEMPLATE: replace with the event title (e.g. "Tagesausflug nach Luzern")
            date: "Samstag, 1. August 2026", // TEMPLATE: replace with the date
            time: "09:00 Uhr", // TEMPLATE: replace with the start time
            meetingPoint: "Bern Hauptbahnhof, beim SBB Treffpunkt", // TEMPLATE: replace with the exact meeting point
            description: "Lust auf einen Ausflug mit netten Menschen? Dann bist du hier genau richtig! Wir treffen uns, reisen gemeinsam an einen schönen Ort und erleben etwas zusammen. Anfängerfreundlich und entspannt. Komm einfach vorbei!", // TEMPLATE: replace with a short, warm description of the outing
            destination: "Ziel", // label, usually keep
            destinationValue: "Beispielort", // TEMPLATE: replace with where you are going
            travel: "Anreise", // label, usually keep
            travelValue: "Zug und zu Fuss", // TEMPLATE: replace with how you get there (train, car, bike, ...)
            duration: "Dauer", // label, usually keep
            durationValue: "ca. 5 Stunden", // TEMPLATE: replace with the duration
            cost: "Kosten", // label, usually keep
            costValue: "Anreise auf eigene Kosten", // TEMPLATE: replace with the cost info
            group: "Gruppe", // label, usually keep
            groupValue: "Kleine Gruppe", // TEMPLATE: replace with the expected group size
            planTitle: "Der Plan", // label, usually keep
            planDesc: "Wir treffen uns am Treffpunkt, reisen gemeinsam zum Ziel und verbringen den Tag zusammen. Beschreibe hier den Ablauf: wohin es geht, was wir dort machen und wann wir ungefähr zurück sind.", // TEMPLATE: replace with the plan / itinerary
            mapTitle: "Karte", // label, usually keep (delete the whole map box below if you have no map)
            whatToBring: "Was du mitbringen solltest:", // label, usually keep
            item1: "Bequeme Schuhe", // TEMPLATE: replace with what to bring
            item2: "Wasser und Snacks", // TEMPLATE: replace with what to bring
            item3: "Wetterfeste Kleidung", // TEMPLATE: replace with what to bring
            item4: "Gute Laune", // TEMPLATE: replace with what to bring
            free: "Kostenlos! (Anreise auf eigene Kosten)", // TEMPLATE: replace with the cost line shown above the register button
            registerBtn: "Anmelden", // button label, usually keep
            questionsTitle: "Fragen?", // label, usually keep
            questionsDesc: "Schreib uns auf WhatsApp:", // label, usually keep
            whatsappMessage: "Hi, ich habe eine Frage zum Ausflug!", // TEMPLATE: replace with the prefilled WhatsApp message
            phone: "+41783166727", // TEMPLATE: replace only if a different contact number is used
            helpTitle: "📢 Hilf uns, mehr Leute zu erreichen!", // usually keep
            helpDesc: "Wir haben das Event auf diesen Plattformen registriert. Wenn du ein Konto hast, registriere dich auch dort, der Algorithmus mag es, wenn etwas passiert, und es hilft uns, mehr Menschen zu erreichen! 🚀", // usually keep
            meetupLink: "Meetup",
            facebookLink: "Facebook",
            lumaLink: "Luma",
            redditLink: "Reddit",
            closing: "Wir freuen uns auf dich!" // usually keep
        },
        en: {
            title: "Go Somewhere Together", // TEMPLATE: replace with the event title (e.g. "Day Trip to Lucerne")
            date: "Saturday, August 1, 2026", // TEMPLATE: replace with the date
            time: "9:00 AM", // TEMPLATE: replace with the start time
            meetingPoint: "Bern main station, at the SBB meeting point", // TEMPLATE: replace with the exact meeting point
            description: "Want a fun outing with nice people? You're at the right place! We meet, travel somewhere together and experience something as a group. Beginner friendly and relaxed. Feel free to join us!", // TEMPLATE: replace with a short, warm description of the outing
            destination: "Destination", // label, usually keep
            destinationValue: "Example place", // TEMPLATE: replace with where you are going
            travel: "Travel", // label, usually keep
            travelValue: "Train and on foot", // TEMPLATE: replace with how you get there (train, car, bike, ...)
            duration: "Duration", // label, usually keep
            durationValue: "approx. 5 hours", // TEMPLATE: replace with the duration
            cost: "Cost", // label, usually keep
            costValue: "Travel costs on your own", // TEMPLATE: replace with the cost info
            group: "Group", // label, usually keep
            groupValue: "Small group", // TEMPLATE: replace with the expected group size
            planTitle: "The plan", // label, usually keep
            planDesc: "We gather at the meeting point, travel to the destination together and spend the day as a group. Describe the flow here: where we go, what we do there and roughly when we are back.", // TEMPLATE: replace with the plan / itinerary
            mapTitle: "Map", // label, usually keep (delete the whole map box below if you have no map)
            whatToBring: "What to bring:", // label, usually keep
            item1: "Comfortable shoes", // TEMPLATE: replace with what to bring
            item2: "Water and snacks", // TEMPLATE: replace with what to bring
            item3: "Weather-appropriate clothing", // TEMPLATE: replace with what to bring
            item4: "Good mood", // TEMPLATE: replace with what to bring
            free: "Free! (Travel costs on your own)", // TEMPLATE: replace with the cost line shown above the register button
            registerBtn: "Register", // button label, usually keep
            questionsTitle: "Questions?", // label, usually keep
            questionsDesc: "Write us on WhatsApp:", // label, usually keep
            whatsappMessage: "Hi, I have a question about the outing!", // TEMPLATE: replace with the prefilled WhatsApp message
            phone: "+41783166727", // TEMPLATE: replace only if a different contact number is used
            helpTitle: "📢 Help us reach more people!", // usually keep
            helpDesc: "We've registered the event on these platforms. If you have an account, please also register there, the algorithm likes it when something is happening, and it helps us reach more people! 🚀", // usually keep
            meetupLink: "Meetup",
            facebookLink: "Facebook",
            lumaLink: "Luma",
            redditLink: "Reddit",
            closing: "We look forward to seeing you!" // usually keep
        }
    };

    // TEMPLATE: point these at the real platform listings once they are published.
    // For now they point to the group pages so the buttons stay alive.
    const meetupUrl = "https://www.meetup.com/meetup-bern/events/";
    const facebookUrl = "https://www.facebook.com/connectbern";
    const lumaUrl = "https://luma.com/user/connectbern";
    const redditUrl = "https://www.reddit.com/r/bern/";
</script>

<section>
    <a class="btn back" href="/events">
        <span>→</span>Back
    </a>

    <div class="cntr">
        <div class="textContainer">
            <div class="titleSection">
                <!-- TEMPLATE: replace the emoji with one that fits your outing -->
                <h1>{content[lang].title} 🚐</h1>
            </div>

            <div class="dateTimeBox">
                <p class="date">{content[lang].date}</p>
                <p class="time">{content[lang].time}</p>
                <p class="location">{content[lang].meetingPoint}</p>
            </div>

            <!-- TEMPLATE (optional image): drop your image at /static/images/ and update the src + alt below.
                 If you have no image, delete this whole imageContainer block. -->
            <div class="imageContainer">
                <img src="/images/speed-friending-pic.jpeg" alt="Outing" class="eventImage" />
            </div>

            <p class="description">
                {content[lang].description}
            </p>

            <div class="statsBox">
                <div class="stat">
                    <span class="statLabel">{content[lang].destination}</span>
                    <span class="statValue">{content[lang].destinationValue}</span>
                </div>
                <div class="stat">
                    <span class="statLabel">{content[lang].travel}</span>
                    <span class="statValue">{content[lang].travelValue}</span>
                </div>
                <div class="stat">
                    <span class="statLabel">{content[lang].duration}</span>
                    <span class="statValue">{content[lang].durationValue}</span>
                </div>
                <div class="stat">
                    <span class="statLabel">{content[lang].cost}</span>
                    <span class="statValue">{content[lang].costValue}</span>
                </div>
                <div class="stat">
                    <span class="statLabel">{content[lang].group}</span>
                    <span class="statValue">{content[lang].groupValue}</span>
                </div>
            </div>

            <div class="routeBox">
                <h2>{content[lang].planTitle}</h2>
                <p>{content[lang].planDesc}</p>
            </div>

            <!-- TEMPLATE (optional map): update the link and the image src/alt, or delete this whole mapBox block if you have no map. -->
            <div class="mapBox">
                <h2>{content[lang].mapTitle}</h2>
                <a href="https://swisstopo.app/" target="_blank" rel="noopener noreferrer" class="mapLink">
                    <img src="/images/hiking-map.png" alt="Route map" class="mapImage" />
                </a>
            </div>

            <div class="bringBox">
                <h2>{content[lang].whatToBring}</h2>
                <div class="items">
                    <!-- TEMPLATE: swap the icons and edit the item text in the content object above -->
                    <div class="item">
                        <span class="itemIcon">👟</span>
                        <p>{content[lang].item1}</p>
                    </div>
                    <div class="item">
                        <span class="itemIcon">💧</span>
                        <p>{content[lang].item2}</p>
                    </div>
                    <div class="item">
                        <span class="itemIcon">🧥</span>
                        <p>{content[lang].item3}</p>
                    </div>
                    <div class="item">
                        <span class="itemIcon">😄</span>
                        <p>{content[lang].item4}</p>
                    </div>
                </div>
            </div>

            <div class="registrationBox">
                <p class="free">{content[lang].free}</p>
                <a href="https://wa.me/{content[lang].phone.replace(/[^0-9]/g, '')}?text={encodeURIComponent(content[lang].whatsappMessage)}" class="btn registerMainBtn" target="_blank" rel="noopener noreferrer">
                    🚐 {content[lang].registerBtn}
                </a>
            </div>

            <div class="questionsBox">
                <h3>{content[lang].questionsTitle}</h3>
                <p>{content[lang].questionsDesc}</p>
                <a href="https://wa.me/{content[lang].phone.replace(/[^0-9]/g, '')}?text={encodeURIComponent(content[lang].whatsappMessage)}" class="btn whatsappBtn" target="_blank" rel="noopener noreferrer">
                    💬 WhatsApp
                </a>
            </div>

            <div class="registerBox">
                <h2 class="registerTitle">{content[lang].helpTitle}</h2>
                <p class="registerDesc">{content[lang].helpDesc}</p>
                <div class="registerButtons">
                    <a href={meetupUrl} class="btn registerBtn meetup" target="_blank" rel="noopener noreferrer">
                        👥 {content[lang].meetupLink}
                    </a>
                    <a href={facebookUrl} class="btn registerBtn facebook" target="_blank" rel="noopener noreferrer">
                        📘 {content[lang].facebookLink}
                    </a>
                    <a href={lumaUrl} class="btn registerBtn luma" target="_blank" rel="noopener noreferrer">
                        🗓️ {content[lang].lumaLink}
                    </a>
                    <a href={redditUrl} class="btn registerBtn reddit" target="_blank" rel="noopener noreferrer">
                        🔴 {content[lang].redditLink}
                    </a>
                </div>
            </div>

            <p class="closing">
                {content[lang].closing}
            </p>
        </div>
    </div>
</section>

<style>
    @media (max-width: 800px) {
        h1 {
            font-size: 2rem !important;
        }

        p {
            font-size: 1rem !important;
        }
    }

    section {
        padding: 2em;
        max-width: 700px;
        margin: 0 auto;
    }

    .cntr {
        display: flex;
        flex-direction: column;
        gap: 2em;
        margin: 2em 0;
    }

    .textContainer {
        display: flex;
        flex-direction: column;
        gap: 1.5em;
        width: 100%;
    }

    .titleSection {
        text-align: center;
    }

    h1 {
        font-size: 2.5em;
        font-weight: bold;
        text-align: center;
        margin: 0.3em 0;
    }

    .imageContainer {
        display: flex;
        justify-content: center;
    }

    .eventImage {
        width: 100%;
        max-width: 600px;
        height: auto;
        border-radius: 1em;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
        object-fit: cover;
    }

    .dateTimeBox {
        text-align: center;
        background: rgba(255, 255, 255, 0.05);
        padding: 1em 1.5em;
        border-radius: 1em;
        border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .date {
        font-size: 1.3em;
        font-weight: bold;
        margin: 0;
    }

    .time {
        font-size: 1.1em;
        margin: 0.3em 0;
        opacity: 0.9;
    }

    .location {
        font-size: 0.95em;
        margin: 0.5em 0 0;
        opacity: 0.8;
    }

    p {
        font-size: 1.1em;
        line-height: 1.6;
    }

    .description {
        text-align: center;
        font-size: 1.15em;
    }

    .statsBox {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 0.8em;
    }

    @media (max-width: 500px) {
        .statsBox {
            grid-template-columns: 1fr 1fr;
        }
    }

    .stat {
        background: rgba(255, 255, 255, 0.05);
        padding: 1em;
        border-radius: 0.8em;
        border: 1px solid rgba(255, 255, 255, 0.1);
        display: flex;
        flex-direction: column;
        gap: 0.3em;
        text-align: center;
    }

    .statLabel {
        font-size: 0.85em;
        opacity: 0.7;
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }

    .statValue {
        font-size: 1.05em;
        font-weight: 600;
    }

    .mapBox {
        background: rgba(255, 255, 255, 0.05);
        padding: 1.5em;
        border-radius: 1em;
        border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .mapBox h2 {
        font-size: 1.3em;
        margin: 0 0 1em;
        text-align: center;
    }

    .mapLink {
        display: block;
        text-decoration: none;
        cursor: pointer;
        border-radius: 0.5em;
        overflow: hidden;
        transition: opacity 0.2s ease;
    }

    .mapLink:hover {
        opacity: 0.85;
    }

    .mapImage {
        width: 100%;
        border-radius: 0.5em;
        display: block;
    }

    .bringBox {
        background: rgba(255, 255, 255, 0.05);
        padding: 1.5em;
        border-radius: 1em;
        border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .bringBox h2 {
        font-size: 1.3em;
        margin: 0 0 1em;
        text-align: center;
    }

    .items {
        display: flex;
        flex-direction: column;
        gap: 0.8em;
    }

    .item {
        display: flex;
        align-items: flex-start;
        gap: 0.8em;
    }

    .itemIcon {
        font-size: 1.3em;
        min-width: 28px;
        text-align: center;
    }

    .item p {
        margin: 0;
        font-size: 1em;
        line-height: 1.5;
    }

    .routeBox {
        background: rgba(255, 255, 255, 0.05);
        padding: 1.5em;
        border-radius: 1em;
        border: 1px solid rgba(255, 255, 255, 0.1);
        text-align: center;
    }

    .routeBox h2 {
        font-size: 1.3em;
        margin: 0 0 0.5em;
    }

    .routeBox p {
        margin: 0;
        font-size: 1em;
    }

    .registrationBox {
        background: rgba(255, 255, 255, 0.08);
        padding: 2em;
        border-radius: 1em;
        border: 1px solid rgba(255, 255, 255, 0.15);
        display: flex;
        flex-direction: column;
        gap: 1em;
        align-items: center;
        text-align: center;
    }

    .free {
        font-size: 1.2em;
        font-weight: 600;
        margin: 0;
        color: #6ddb8a;
    }

    .registerMainBtn {
        padding: 0.8em 1.5em;
        font-size: 1.15em;
        text-decoration: none;
        border-radius: 0.5em;
        font-weight: bold;
        transition: all 0.2s ease;
        border: 2px solid rgba(255, 255, 255, 0.3);
        background: rgba(100, 180, 100, 0.3);
        color: white;
        display: inline-block;
        width: auto;
    }

    .registerMainBtn:hover {
        transform: scale(1.03);
        background: rgba(100, 180, 100, 0.4);
    }

    .questionsBox {
        background: rgba(255, 255, 255, 0.05);
        padding: 1.5em;
        border-radius: 1em;
        border: 1px solid rgba(255, 255, 255, 0.1);
        text-align: center;
    }

    .questionsBox h3 {
        font-size: 1.2em;
        margin: 0 0 0.5em;
    }

    .questionsBox p {
        margin: 0 0 1em;
        font-size: 1em;
    }

    .whatsappBtn {
        padding: 0.5em 1em;
        font-size: 0.95em;
        text-decoration: none;
        border-radius: 0.5em;
        font-weight: bold;
        transition: all 0.2s ease;
        border: 2px solid white;
        background: #25D366;
        color: white;
        display: inline-block;
        width: auto;
    }

    .whatsappBtn:hover {
        background: #1fb855;
        transform: scale(1.03);
    }

    .registerBox {
        background: rgba(255, 255, 255, 0.08);
        padding: 2em;
        border-radius: 1em;
        border: 1px solid rgba(255, 255, 255, 0.15);
        display: flex;
        flex-direction: column;
        gap: 1.5em;
        align-items: center;
    }

    .registerTitle {
        font-size: 1.5em;
        font-weight: bold;
        margin: 0;
        text-align: center;
    }

    .registerDesc {
        text-align: center;
        margin: 0;
        font-size: 1.05em;
        line-height: 1.6;
        max-width: 600px;
    }

    .registerButtons {
        display: flex;
        gap: 1em;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
    }

    .registerBtn {
        padding: 0.6em 1em;
        font-size: 0.95em;
        text-decoration: none;
        border-radius: 0.6em;
        font-weight: bold;
        transition: all 0.2s ease;
        border: 2px solid white;
        display: inline-block;
        width: auto;
    }

    .meetup {
        background: #F64060;
        color: white;
    }

    .meetup:hover {
        background: #d63550;
        transform: scale(1.05);
    }

    .facebook {
        background: #1877F2;
        color: white;
    }

    .facebook:hover {
        background: #0d65d9;
        transform: scale(1.05);
    }

    .luma {
        background: #8B5CF6;
        color: white;
    }

    .luma:hover {
        background: #7c3aed;
        transform: scale(1.05);
    }

    .reddit {
        background: #FF4500;
        color: white;
    }

    .reddit:hover {
        background: #e03d00;
        transform: scale(1.05);
    }

    .closing {
        text-align: center;
        font-size: 1.15em;
        font-style: italic;
        margin-top: 0.5em;
        opacity: 0.9;
    }

    .back {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 12px;
        background: rgba(0, 0, 0, 0.5);
        width: max-content;
        padding: 0.8em 1.2em;
        transition: all 0.2s ease;
        text-decoration: none;
        color: white;
        border-radius: 0.5em;
        margin-bottom: 1em;
    }

    .back span {
        margin-top: 3px;
        transform: rotate(180deg);
    }

    .back:hover {
        transform: scale(1.02);
        background: rgba(0, 0, 0, 0.7);
    }
</style>
