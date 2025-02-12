<script lang="ts">
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();

	let PostComponent: any | undefined = $state();

	import(`$lib/posts/${data.slug}.md`)
		.then((module) => (PostComponent = module))
		.catch((error) => console.log('Error loading post: ', error));
</script>

{#if PostComponent}
	<h1>{PostComponent.metadata.title}</h1>
	<PostComponent.default />
{:else}
	<p>Loading...</p>
{/if}

<style>
</style>
