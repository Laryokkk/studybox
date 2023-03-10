<script>
    export let author;

    const wordList = author.split(" ");
    const firstWord = wordList.shift();
</script>

<div class="author">
    <h5 class="text text-extend">
        <span class="text text-accent-extend">{firstWord.substring(0, 1)}</span>{firstWord.substring(1)}
        {#each wordList as word}
            &nbsp;<span class="text text-accent">{word.substring(0, 1)}</span>{word.substring(1)}
        {/each}
    </h5>
</div>

<style>
    div.author {
        display: flex;
        align-items: center;
        flex-direction: row;
    }
</style>
