<script>
    import { t } from "$lib/locales/eventPageTranslations.js";
    import { currentLanguage } from "$lib/stores/languageStore";

    export let data = [];

    $: lang = $currentLanguage;

    // Defensive copy, sorted ascending so the latest week is always last.
    $: points = [...(data || [])]
        .filter((d) => d && d.date != null && typeof d.count === "number")
        .sort((a, b) => new Date(a.date) - new Date(b.date));

    $: maxCount = points.length ? Math.max(...points.map((p) => p.count)) : 0;
    $: latestIndex = points.length - 1;

    // Fixed coordinate space, scaled responsively by viewBox.
    const VIEW_W = 640;
    const VIEW_H = 260;
    const PAD_TOP = 24;
    const PAD_BOTTOM = 40;
    const PAD_X = 24;
    $: plotH = VIEW_H - PAD_TOP - PAD_BOTTOM;
    $: plotW = VIEW_W - PAD_X * 2;

    $: barSlot = points.length ? plotW / points.length : plotW;
    $: barWidth = Math.min(64, barSlot * 0.55);

    function barX(i) {
        return PAD_X + barSlot * i + (barSlot - barWidth) / 2;
    }
    function barHeight(count) {
        if (!maxCount) return 0;
        return (count / maxCount) * plotH;
    }
    function barY(count) {
        return PAD_TOP + plotH - barHeight(count);
    }

    function weekLabel(date) {
        const d = new Date(date);
        const locale = lang === "de" ? "de-CH" : "en-GB";
        return d.toLocaleDateString(locale, { day: "numeric", month: "short" });
    }

    let hoverIndex = -1;
</script>

<div class="attendanceCard">
    <div class="cardHeader">
        <h2>{t[lang]["attendance-title"]}</h2>
        {#if points.length}
            <span class="latestPill">
                {t[lang]["attendance-last-week"]}: {points[latestIndex].count}
                {t[lang]["attendance-people"]}
            </span>
        {/if}
    </div>

    {#if points.length}
        <div class="chartWrap">
            <svg
                viewBox="0 0 {VIEW_W} {VIEW_H}"
                preserveAspectRatio="xMidYMid meet"
                role="img"
                aria-label={t[lang]["attendance-title"]}
            >
                <!-- baseline -->
                <line
                    class="axis"
                    x1={PAD_X}
                    y1={PAD_TOP + plotH}
                    x2={VIEW_W - PAD_X}
                    y2={PAD_TOP + plotH}
                />

                {#each points as p, i}
                    <g
                        class="barGroup"
                        class:isLatest={i === latestIndex}
                        on:mouseenter={() => (hoverIndex = i)}
                        on:mouseleave={() => (hoverIndex = -1)}
                        on:focus={() => (hoverIndex = i)}
                        on:blur={() => (hoverIndex = -1)}
                        tabindex="0"
                        role="img"
                        aria-label="{weekLabel(p.date)}: {p.count} {t[lang]['attendance-people']}"
                    >
                        <rect
                            class="bar"
                            x={barX(i)}
                            y={barY(p.count)}
                            width={barWidth}
                            height={barHeight(p.count)}
                            rx="6"
                        />
                        <text
                            class="value"
                            class:visible={i === latestIndex || i === hoverIndex}
                            x={barX(i) + barWidth / 2}
                            y={barY(p.count) - 8}
                            text-anchor="middle"
                        >
                            {p.count}
                        </text>
                        <text
                            class="weekLabel"
                            x={barX(i) + barWidth / 2}
                            y={PAD_TOP + plotH + 22}
                            text-anchor="middle"
                        >
                            {weekLabel(p.date)}
                        </text>
                    </g>
                {/each}
            </svg>
        </div>
    {:else}
        <p class="emptyState">{t[lang]["attendance-empty"]}</p>
    {/if}
</div>

<style>
    .attendanceCard {
        background: rgba(255, 255, 255, 0.05);
        border: 2px solid rgba(255, 255, 255, 0.2);
        border-radius: 1.5em;
        padding: 1.5em;
        margin: 2em 0;
        color: white;
    }

    .cardHeader {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 1em;
        margin-bottom: 1.5em;
    }

    .cardHeader h2 {
        font-size: 1.4em;
        font-weight: bold;
        margin: 0;
        border: none;
    }

    .latestPill {
        display: inline-flex;
        align-items: center;
        width: fit-content;
        padding: 0.4em 1em;
        font-size: 0.9em;
        font-weight: 600;
        border-radius: 2em;
        background: linear-gradient(135deg, rgba(108, 72, 167, 0.6), rgba(58, 152, 189, 0.6));
        border: 2px solid rgba(255, 255, 255, 0.5);
        box-shadow: 0 5px 20px rgba(108, 72, 167, 0.4);
    }

    .chartWrap {
        width: 100%;
    }

    svg {
        width: 100%;
        height: auto;
        display: block;
        overflow: visible;
    }

    .axis {
        stroke: rgba(255, 255, 255, 0.2);
        stroke-width: 1;
    }

    .barGroup {
        cursor: pointer;
        outline: none;
    }

    .bar {
        fill: rgba(147, 51, 234, 0.45);
        transition: fill 0.25s ease;
    }

    .barGroup:hover .bar,
    .barGroup:focus .bar {
        fill: rgba(147, 51, 234, 0.75);
    }

    .barGroup.isLatest .bar {
        fill: rgba(58, 152, 189, 0.85);
    }

    .value {
        fill: white;
        font-size: 14px;
        font-weight: 700;
        opacity: 0;
        transition: opacity 0.2s ease;
    }

    .value.visible {
        opacity: 1;
    }

    .weekLabel {
        fill: rgba(255, 255, 255, 0.75);
        font-size: 12px;
    }

    .emptyState {
        margin: 0;
        padding: 1em 0;
        text-align: center;
        color: rgba(255, 255, 255, 0.75);
        font-style: italic;
    }

    @media (max-width: 768px) {
        .attendanceCard {
            padding: 1.2em 1em;
        }

        .cardHeader h2 {
            font-size: 1.2em;
        }

        .value {
            font-size: 18px;
        }

        .weekLabel {
            font-size: 15px;
        }
    }
</style>
