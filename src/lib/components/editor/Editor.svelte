<script>
    import TextEditor from "./TextEditor.svelte";

    export let editor;
    
    $:({ title, content } = editor);
</script>

<section id="editor">
    <TextEditor {title} {content} />
</section>

<style>
    section#editor {
        width: var(--editor-width);
        height: var(--editor-height);

        overflow-y: scroll;

        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    section#editor::-webkit-scrollbar {
        display: none;
    }
</style>
