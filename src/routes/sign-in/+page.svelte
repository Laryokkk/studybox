<script>
    import Box from "$lib/components/common/Box.svelte";
    import Input from "$lib/components/common/Input.svelte";
    import Button from "$lib/components/common/Button.svelte";
</script>

<section class="sign-in">
    <form>
        <div class="container">
            <Input
                type={"email"}
                placeholder={"email"}
                autocomplete={"username"}
                required={"true"}
            />
            <Input
                type={"password"}
                placeholder={"password"}
                autocomplete={"current-password"}
                required={"true"}
            />
        </div>
        <Button type={"submit"} />
        <h1 class="text text-sign-in">
            <span class="text text-accent-extend">S</span>IGN  <span class="text text-accent">I</span>N
        </h1>
    </form>
    <Box size="400" theme="light" />
</section>

<style>
    section.sign-in {
        width: 100vw;
        height: 90vh;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        gap: 15vw;
    }

    form {
        position: relative;

        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        gap: 3rem;

        margin-left: 8rem;
    }

    div.container {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        flex-direction: column;
        gap: 1rem;
    }

    h1.text-sign-in {
        position: absolute;

        left: 0;
        bottom: 0;

        margin-left: -12rem;
        margin-bottom: 5rem;

        font-size: 62px;

        transform: rotate(-90deg);
    }
</style>
