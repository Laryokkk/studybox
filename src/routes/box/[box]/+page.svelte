<script>
    import Editor from "$lib/components/editor/Editor.svelte";
    import Menu from "$lib/components/menu/Menu.svelte";

    export let data;

    const { author, menu } = data;
    $: ({ editor } = data);
</script>

<section id="container">
    <Menu {author} {menu} />
    <Editor {editor} />
</section>

<style>
    section#container {
        display: flex;
        flex-direction: row;
    }
</style>
