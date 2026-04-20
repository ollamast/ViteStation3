<script setup lang="ts">
    import { onMounted } from 'vue';
    import { useTrophyStore } from '@/stores/trophy.ts'

    onMounted(() => {
        updateClock()
    })

    const trophyStore = useTrophyStore()

    let date

    const updateClock = () => {
        date = new Date
        const dateLocation: HTMLElement | null = document.querySelector('#date')

        if (dateLocation) dateLocation.innerText = date.toLocaleTimeString() + ' ' + date.toLocaleDateString(navigator.language, {year: '2-digit', month: 'numeric'})

        setTimeout(
            updateClock,
            1000
        )
    }
</script>

<template>
    <section id="clock">
        <div class="clock-container">
            <div id="trophy">
                <img src="/clock-trophy.png" alt="trophy_icon" id="trophy_icon">
                <p id="score">{{ trophyStore.unlocked.length }}</p>
            </div>
            <p id="date"></p>
        </div>
    </section>
</template>

<style scoped lang="sass">

    #clock
        //opacity: 0
        position: absolute
        top: 5%
        left: 80%
        bottom: 0
        right: 0
        width: 5%
        color: white
        text-align: right
        font-size: 18px
        z-index: 3

        .clock-container
            display: flex
            justify-content: space-between
            width: 400%
            border: 1px solid #dadada
            border-right: none
            border-radius: 3px
            padding-right: 0px 40px
            background-color: rgba($color: white, $alpha: 0.1)

            p
                letter-spacing: 1px
                margin: revert
                margin-right: 20px
                text-shadow: 2px 2px 5px black
                font-size: 18px

            #trophy

                display: flex
                align-items: center
                position: relative

                img
                    height: 25px
                    width: 25px
                    padding: 5px
                    margin-left: 10px

</style>