<svelte:head>
	<title>Gallery • Connect Bern</title>
</svelte:head>

<script>
	import { t } from "$lib/locales/translations.js";
	import { currentLanguage } from '$lib/stores/languageStore';
	import { getContext, onMount } from 'svelte';
	import { galleryAlbums } from "$lib/data/galleryData.js";

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

	// Lightbox state: the currently opened item, or null when closed.
	let active = null;

	function open(item) {
		active = item;
	}

	function close() {
		active = null;
	}

	function onKeydown(e) {
		if (e.key === 'Escape') {
			close();
		}
	}
</script>

<svelte:window on:keydown={onKeydown} />

<section>
	<div class="header">
		<h1>{t[lang]['gallery-title']}</h1>
		<p class="page-description">
			{t[lang]['gallery-description']}
		</p>
	</div>

	{#each galleryAlbums as album}
		<div class="album">
			<h2 class="album-title">{album.title[lang]}</h2>
			<div class="galleryGrid">
				{#each album.items as item}
					<button class="tile" type="button" on:click={() => open(item)} aria-label={item.alt}>
						{#if item.type === 'video'}
							<img class="tile-img" src={item.thumb ?? ''} alt={item.alt} loading="lazy" />
							<span class="play-badge" aria-hidden="true">▶</span>
						{:else}
							<img class="tile-img" src={item.src} alt={item.alt} loading="lazy" />
						{/if}
					</button>
				{/each}
			</div>
		</div>
	{/each}
</section>

{#if active}
	<div class="lightbox" on:click={close} on:keydown={onKeydown} role="presentation">
		<button class="close-btn" type="button" on:click={close} aria-label="Close">✕</button>
		<div class="lightbox-content" on:click|stopPropagation role="presentation">
			{#if active.type === 'video'}
				<div class="video-wrap">
					<iframe
						src={active.src}
						title={active.alt}
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerpolicy="strict-origin-when-cross-origin"
						allowfullscreen
					></iframe>
				</div>
			{:else}
				<img class="lightbox-img" src={active.src} alt={active.alt} />
			{/if}
		</div>
	</div>
{/if}

<style>
	section {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2em 1em;
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

	.page-description {
		font-size: 1.3em;
		opacity: 0.9;
		line-height: 1.6;
		max-width: 800px;
		margin: 0 auto;
	}

	.album {
		margin-bottom: 3em;
	}

	.album-title {
		font-size: 1.6em;
		font-weight: bold;
		margin-bottom: 0.8em;
		padding-bottom: 0.3em;
		border-bottom: 2px solid rgba(108, 72, 167, 0.4);
	}

	.galleryGrid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: 1.5em;
	}

	.tile {
		position: relative;
		padding: 0;
		border: 2px solid rgba(108, 72, 167, 0.3);
		border-radius: 1em;
		overflow: hidden;
		cursor: pointer;
		background: rgba(255, 255, 255, 0.03);
		aspect-ratio: 4 / 3;
		transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
	}

	.tile:hover {
		transform: translateY(-5px);
		border-color: rgba(108, 72, 167, 0.6);
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
	}

	.tile-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		transition: transform 0.3s ease;
	}

	.tile:hover .tile-img {
		transform: scale(1.08);
	}

	.play-badge {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 3rem;
		height: 3rem;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.2rem;
		color: white;
		background: rgba(0, 0, 0, 0.55);
		border-radius: 50%;
		pointer-events: none;
	}

	/* Lightbox */
	.lightbox {
		position: fixed;
		inset: 0;
		z-index: 1000;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2em;
		background: rgba(0, 0, 0, 0.85);
		backdrop-filter: blur(6px);
	}

	.lightbox-content {
		max-width: 90vw;
		max-height: 85vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.lightbox-img {
		max-width: 90vw;
		max-height: 85vh;
		object-fit: contain;
		border-radius: 0.5em;
		box-shadow: 0 8px 40px rgba(0, 0, 0, 0.6);
	}

	.video-wrap {
		width: 90vw;
		max-width: 960px;
		aspect-ratio: 16 / 9;
		border-radius: 0.5em;
		overflow: hidden;
		box-shadow: 0 8px 40px rgba(0, 0, 0, 0.6);
	}

	.video-wrap iframe {
		width: 100%;
		height: 100%;
		display: block;
	}

	.close-btn {
		position: fixed;
		top: 1em;
		right: 1em;
		width: max-content;
		padding: 0.4em 0.7em;
		font-size: 1.2rem;
		line-height: 1;
		color: white;
		background: rgba(108, 72, 167, 0.5);
		border: 2px solid rgba(255, 255, 255, 0.3);
		border-radius: 0.5em;
		cursor: pointer;
		transition: background 0.2s ease;
	}

	.close-btn:hover {
		background: rgba(108, 72, 167, 0.8);
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 2em;
		}

		.page-description {
			font-size: 1.1em;
		}

		.galleryGrid {
			grid-template-columns: 1fr;
			gap: 1em;
		}
	}
</style>
