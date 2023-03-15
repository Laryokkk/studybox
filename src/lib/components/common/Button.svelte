<script>
    export let type;
</script>

<div class="container">
    <button {type} />
</div>

<style>
    button {
        width: calc(20rem - (2 * 2px));
        height: calc(1rem - (2 * 2px));

        margin: 0;
        border: 2px solid var(--accent);
        border-radius: 0.4rem;
        padding: 1rem;

        background-color: var(--background-input);

        cursor: pointer;
        transition: all 0.2s ease-in;
    }

    button:active:not(:disabled),
    button:hover:not(:disabled) {
        transition: all 0.3s ease-out;
        box-shadow: 0px 0px 8px 0px var(--accent);
    }
</style>
