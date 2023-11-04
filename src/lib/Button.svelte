<svelte:component this={component}>
    <slot />
</svelte:component>

<script>
  /** @type {import('svelte').SvelteComponent} */
    export let component;
</script>