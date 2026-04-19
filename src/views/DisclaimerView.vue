<script setup lang="ts">
    import router from '@/router';


    setTimeout(() => {
        router.push('/header')
    }, 5000);
</script>

<template>
    <section id="disclaimer">
        <p class="disclaimerHead">DISCLAIMER:</p>
        <p>This is a recreation of the PS3's XMB menu. This project is used for demonstrational purposes and the design and its rights belong to Sony.</p>
    </section>
</template>

<style scoped lang="sass">

    #disclaimer
        //opacity: 0
        color: #dadada
        text-shadow: 2px 2px 5px black
        position: absolute
        width: 100%
        height: 100%
        backdrop-filter: blur(10px)
        transition: ease 1000ms

        #disclaimerHead
            margin-top: 25%
            margin-left: 20%

        p
            position: relative
            top: 50%
            margin: revert
            left: 50%
            transform: translate(-75%, -50%)
            margin-right: -10px
            margin-left: 20%
            width: 65%
            text-transform: uppercase
            font-size: 1.1rem

</style>