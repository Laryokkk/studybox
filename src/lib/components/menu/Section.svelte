<script>
    import { page } from "$app/stores";

    export let title;
    export let href;
</script>

<a {href}>
    <h4 class="text text-extend section-item" class:active={$page.url.pathname.includes(href)}>
        {title}
    </h4>
</a>

<style>
    .section-item:hover,
    .active {
        color: var(--text-accent);
    }
</style>
