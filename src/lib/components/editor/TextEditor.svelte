<script>
    export let title;
    export let content;
</script>

<div class="container">
    <h3 class="text text-bold">{title}</h3>
    <div class="text-editor">
        <h4 class="text text-light">
            {@html content}
        </h4>
    </div>
</div>

<style>
    div.container {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 2rem;

        margin: 3rem 8vw;
    }
</style>
