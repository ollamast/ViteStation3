<script setup lang="ts">
    import { useEventListener } from '@vueuse/core'
    import router from '@/router'
    import { useWelcomeStore } from '@/stores/WelcomeStore'
    import startupSoundUrl from '@/assets/sounds/startup.mp3'

    const startupSound: HTMLAudioElement = new Audio(startupSoundUrl)
    const bypassInit: boolean = false

    const welcomeStore = useWelcomeStore()

    useEventListener(document.body, 'keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()

            startupSound.volume = 0.15
            startupSound.play()
            goNext()
        }
    })

    function goNext() {
        welcomeStore.changeIsValid()
        if (bypassInit) {
            router.push('/')
        } else {
            router.push('/disclaimer')
        }
    }
</script>

<template>
    <section id="welcomer">
        <div id="welcomerText">
            <p>Welcome,</p>
            <br />
            <br />
            <p>This website has been made as a real experience, sounds will be played.</p>
            <br />
            <br />
            <p>Press OK to continue.</p>
            <br />
            <br />
            <p class="okBtn" @keydown.enter="goNext()">OK</p>
        </div>

        <div id="welcomerBtn">
            <img alt="enterKey" class="details_icon" src="/enterkey.png" />
            <img alt="Akey_xbox_controller" class="details_icon xbox_key_icon" src="/xbox-keys/Akey_xbox_controller.png" />
            <p>Valider</p>
        </div>
    </section>
</template>

<style lang="sass" scoped>
    #welcomer
        position: relative
        height: 100%
        width: 100%
        backdrop-filter: blur(10px)
        text-align: center

        #welcomerText
            position: relative
            top: 35%

        #welcomerBtn
            position: absolute
            top: 87%
            left: 25%
            font-size: 20px
            display: flex
            align-items: center
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8)

    #welcomer::before
        content: ''
        position: absolute
        height: 3px
        width: 100%
        background-color: white
        top: 15%
        left: 0
        box-shadow: 0 0 5px #dfdfdf, 0 0 8px #ffffff, 0 0 15px #b6b6b4, 0 0 20px #b9b9b9

    #welcomer::after
        content: ''
        position: absolute
        height: 3px
        width: 100%
        background-color: white
        bottom: 15%
        left: 0
        box-shadow: 0 0 5px #dfdfdf, 0 0 8px #ffffff, 0 0 15px #b6b6b4, 0 0 20px #b9b9b9

    .okBtn
        animation: glow 1s ease-in-out infinite alternate
</style>
