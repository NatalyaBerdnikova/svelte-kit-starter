<script>
	import styles from './page.module.sass';
	import CatImage from '../assets/images/cat.jpeg?w=400';
	import Button from '../components/button/button.svelte';
	import Container from '../components/container/container.svelte';
	import DogSvg from '../components/svg/dog.svelte';

	let data;
</script>

<div class={styles.home}>
	<Container>
		<div class={styles.home__container}>
			<h1>Welcome to SvelteKit starter</h1>
			<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

			<img src={CatImage} alt="" />

			<Button>Do something</Button>

			<div>
				<p>Using svg example</p>
				<DogSvg />
			</div>
		</div>
	</Container>
</div>
