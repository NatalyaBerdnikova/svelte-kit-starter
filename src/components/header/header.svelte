<script>
	import Container from '../container/container.svelte';

	const links = [
		{ slug: 'Home', hash: '/' },
		{ slug: 'About', hash: '/about' }
	];
</script>

<header>
	<Container>
		<ul>
			{#each links as { slug, hash } (hash)}
				<li>
					<a href={hash}>{slug}</a>
				</li>
			{/each}
		</ul>
	</Container>
</header>
