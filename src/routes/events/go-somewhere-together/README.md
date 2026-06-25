# "Go somewhere together" event template

This folder is a **clone-ready template** for an outing: a group meets, travels somewhere
together and does something. It is not a live event. The page sets
`<meta name="robots" content="noindex" />` and is deliberately **not** registered in
`src/lib/data/event.data.js`, so it does not appear in the events list or calendar.

Use it as the starting point for any new trip-style event (day trips, excursions, group visits,
hikes, museum runs, and so on).

## Turn it into a real event

1. **Copy the folder.** Duplicate `src/routes/events/go-somewhere-together/` to
   `src/routes/events/<your-event-slug>/` (e.g. `src/routes/events/luzern-day-trip/`). The
   folder name becomes the URL: `/events/<your-event-slug>`.

2. **Edit the content.** Open the new `+page.svelte` and replace every field marked with a
   `<!-- TEMPLATE: replace ... -->` comment. The copy lives in the `content = { de, en }`
   object, so fill in **both** the German (`de`) and English (`en`) versions. Update:
   - title, date, time and meeting point
   - description and "The plan" text
   - the stats (Destination, Travel, Duration, Cost, Group size) and remove or add `stat`
     blocks as needed
   - the "what to bring" items and their icons
   - the WhatsApp message text (the contact number `+41783166727` usually stays)

3. **Update the meta tags** in `<svelte:head>`: the `<title>`, the `description`, and the
   Open Graph / Twitter `url`, `title` and `description` (swap the slug and copy to match your
   event).

4. **Set the image (optional).** Drop your image into `static/images/` and update the `src` and
   `alt` of the `eventImage` in the `imageContainer` block. If you have no image, delete the
   whole `imageContainer` block. Do the same for the optional `mapBox` (update its link and
   image, or delete the block if there is no map).

5. **Update the social links (optional).** The `meetupUrl`, `facebookUrl`, `lumaUrl` and
   `redditUrl` variables in the `<script>` point at the group pages by default. Point them at
   the real platform listings once they are published, or remove the buttons you do not need
   from the `registerButtons` block.

6. **Register the event** in `src/lib/data/event.data.js`. Add an entry to the `FUTURE_EVENTS`
   array so it shows up in the events list and calendar, following the existing pattern:

   ```js
   {
       title: { de: 'Dein Titel', en: 'Your Title' },
       date: new Date(2026, 7, 1, 9, 0), // month is 0-indexed: 7 = August
       time: '09:00',
       description: {
           de: 'Kurze Beschreibung für die Event-Liste.',
           en: 'Short description for the events list.'
       },
       link: '/events/<your-event-slug>',
       recurring: false,
       organizer: 'connectbern',
       featured: true // optional
   },
   ```

7. **Remove the `noindex` tag.** Delete the `<meta name="robots" content="noindex" />` line (and
   its `TEMPLATE` comment) from `<svelte:head>` so search engines can index the live event.

## Leave this template alone

Do not edit this `go-somewhere-together` folder into a real event and do not register it in
`event.data.js`. Keep it generic so it stays a clean clone source for the next outing.
