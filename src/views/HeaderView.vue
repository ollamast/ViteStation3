<script setup lang="ts">
    import router from '@/router';


    setTimeout(() => {
        router.push('/')
    }, 3000);
</script>

<template>
    <section class="header" id="header">
        <h1>VS3</h1>
        <!-- <h1>
            <img src="assets/icons/as3.svg" alt="">
        </h1> -->
        <p>ViteStation 3</p>
    </section>
</template>

<style scoped lang="sass">

    #header
        //opacity: 0
        display: flex
        flex-direction: column
        align-items: flex-end
        margin-top: 20%
        padding: 40px
        position: relative
        z-index: 1
        transition: opacity 3s ease-in-out

        h1
            margin: revert
            font-size: 50px
            font-weight: 500
            letter-spacing: -2px
            color: #dadada
            text-shadow: 2px 2px 5px black

            img
                scale: 2

        p
            font-size: 32px
            margin-top: -40px
            letter-spacing: -2px
            color: #dadada
            text-shadow: 2px 2px 5px black

</style>