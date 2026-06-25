// Gallery albums for the /gallery page.
//
// Each album: { title: { en, de }, date?, items: [...] }
// Each item:  { type: 'image' | 'video', src, thumb?, alt }
//   - image: src points to a file (e.g. in /images or /images/gallery)
//   - video: src is a YouTube/Vimeo EMBED url (do not commit large video files)
//
// This is a starting set built from the photos already in static/images/.
// The team should add the real bulk of pictures/videos here: drop files into
// static/images/gallery/ and add entries below, or link videos via embeds.

export const galleryAlbums = [
    {
        title: { en: "Handpan Sessions", de: "Handpan Sessions" },
        items: [
            { type: "image", src: "/images/handpan-1.jpg", alt: "Handpan session" },
            { type: "image", src: "/images/handpan-2.jpg", alt: "Handpan session" },
            { type: "image", src: "/images/handpan-3.jpg", alt: "Handpan session" },
            { type: "image", src: "/images/handpan-concet.jpeg", alt: "Handpan concert" }
        ]
    },
    {
        title: { en: "Connect & Cheers", de: "Connect & Cheers" },
        items: [
            { type: "image", src: "/images/connect-and-cheers-1.jpg", alt: "Connect and Cheers" },
            { type: "image", src: "/images/connect-and-cheers-2.jpg", alt: "Connect and Cheers" },
            { type: "image", src: "/images/connect-and-cheers-3.jpg", alt: "Connect and Cheers" }
        ]
    },
    {
        title: { en: "Karaoke & Music", de: "Karaoke & Musik" },
        items: [
            { type: "image", src: "/images/karaoke.webp", alt: "Karaoke night" },
            { type: "image", src: "/images/music.jpeg", alt: "Music event" },
            { type: "image", src: "/images/language-exchange.jpeg", alt: "Language exchange" }
        ]
    },
    {
        title: { en: "Speed Friending", de: "Speed Friending" },
        items: [
            { type: "image", src: "/images/speed-friending-pic.jpeg", alt: "Speed friending" },
            { type: "image", src: "/images/gosocial.jpg", alt: "Go social" },
            { type: "image", src: "/images/ohsosocial.jpg", alt: "Oh so social" },
            { type: "image", src: "/images/socialcircle.jpg", alt: "Social circle" }
        ]
    },
    {
        title: { en: "Games Nights", de: "Spieleabende" },
        items: [
            { type: "image", src: "/images/tichu.webp", alt: "Tichu game night" },
            { type: "image", src: "/images/pingpong-lovestino.png", alt: "Ping pong" },
            { type: "image", src: "/images/shreck.jpg", alt: "Game night" }
        ]
    },
    {
        title: { en: "Coffee, Cake & Connect", de: "Coffee, Cake & Connect" },
        items: [
            { type: "image", src: "/images/coffee, cake & connect.jpeg", alt: "Coffee, cake and connect" },
            { type: "image", src: "/images/peru-food.png", alt: "Peru food evening" },
            { type: "image", src: "/images/sew-bern.jpeg", alt: "Sew Bern" }
        ]
    },
    {
        title: { en: "Out & About", de: "Unterwegs" },
        items: [
            { type: "image", src: "/images/hiking-map.png", alt: "Hiking" },
            { type: "image", src: "/images/uneinsam.png", alt: "Uneinsam" },
            { type: "image", src: "/images/uneinsam1.png", alt: "Uneinsam" },
            { type: "image", src: "/images/swiss-german-event.avif", alt: "Swiss German event" }
        ]
    },
    {
        title: { en: "Celebrations", de: "Feiern" },
        items: [
            { type: "image", src: "/images/connect-bern-welcome-party.png", alt: "Welcome party" },
            { type: "image", src: "/images/easter.png", alt: "Easter event" },
            { type: "image", src: "/images/event-flyer-christmas.jpg", alt: "Christmas event" }
        ]
    },
    {
        title: { en: "Videos", de: "Videos" },
        items: [
            {
                type: "video",
                src: "https://www.youtube.com/embed/2Q46aER0758?si=Gp7ZbHj06mBTCA4H&start=69",
                thumb: "https://img.youtube.com/vi/2Q46aER0758/hqdefault.jpg",
                alt: "Connect Bern vibe video"
            }
        ]
    }
];
