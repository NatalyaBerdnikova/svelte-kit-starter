<script>
	import style from './button.module.sass';

	export let href;
</script>

{#if href}
	<a {href} class={style.button}>
		<slot />
	</a>
{:else}
	<button class={style.button}>
		<slot />
	</button>
{/if}
