<script>
    import Box from "$lib/components/common/Box.svelte";
    import Section from "./Section.svelte";
    import Author from "./Author.svelte";

    export let author;
    export let menu;
</script>

<section id="menu">
    <section id="box">
        <Box size="100"/>
    </section>
    <section id="container">
        {#each menu as { title, href }}
            <Section {title} {href} />
        {/each}
    </section>
    <section id="author">
        <Author {author} />
    </section>
</section>

<style>
    section#menu {
        width: var(--menu-width);
        height: var(--menu-height);

        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;

        padding: var(--menu-padding-width) var(--menu-padding-height);

        background-color: var(--background-extend);
    }

    section#container {
        width: 100%;
        height: 70vh;

        display: flex;
        align-items: flex-start;
        align-self: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        gap: 1rem;

        overflow-y: scroll;
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    section#container::-webkit-scrollbar {
        display: none;
    }
</style>
