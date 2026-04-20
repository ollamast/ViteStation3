<script setup lang="ts"></script>

<template>
    <aside class="trophy-popup">
        <img src="@/assets/img/trophy.png" alt="trophy logo">

        <div>
            <h5>You have earned a trophy.</h5>
            <slot />
        </div>
    </aside>
</template>

<style scoped lang="sass">

    aside
        position: absolute
        display: flex
        top: 40px
        right: 75px
        background-color: #454346
        border-radius: 10px
        box-shadow: 0 0 70px black
        padding: 10px
        z-index: 5
        gap: 10px
        scale: 1.3

        img
            height: 60px

        div
            padding: 10px

            h5
                font-size: 20px

            :deep(p)
                font-size: 16px

</style>
