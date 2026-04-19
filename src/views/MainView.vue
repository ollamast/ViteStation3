<script setup lang="ts">
    // import { useRouter } from 'vue-router' ---- Keep this as exemple of useRouter()
    import router from '@/router'
    import { useEventListener } from '@vueuse/core'

    import { useWelcomeStore } from '@/stores/WelcomeStore'
    import { useSelectedIndexStore } from '@/stores/SelectedIndexStore'
    import { useColumnsStore } from '@/stores/ColumnsStore'
    import { useRowsStore } from '@/stores/RowsStore'

    import XmbColumn from '@/components/XmbColumn.vue'
    import XmbClock from '@/components/XmbClock.vue'
    import { onMounted } from 'vue'

    import navSoundUrl from '@/assets/sounds/nav.mp3'

    const welcomeStore = useWelcomeStore(),
        selectedIndexStore = useSelectedIndexStore(),
        columnsStore = useColumnsStore(),
        rowsStore = useRowsStore()

    if (welcomeStore.isWelcomeValid === false) {
        //useRouter().push('welcome') ---- Keep this as exemple of useRouter()
        router.push('/welcome')
    }

    const navSound = new Audio(navSoundUrl)

    let xmbMenu: any = null,
        xmbCols: any = '',
        leftValMenu = 29,
        topValRow = 0

    onMounted(() => {
        xmbMenu = document.getElementById('xmb')
        xmbCols = document.querySelectorAll('.xmb_col_body')

        xmbMenu.style.left = leftValMenu + '%'
    })

    function playNavSound() {
        ;(navSound.cloneNode(true) as HTMLAudioElement).play()
    }

    useEventListener(document.body, 'keydown', (e) => {
        if (e.key === 'ArrowRight') {
            playNavSound()
            e.preventDefault()

            right()
        } else if (e.key === 'ArrowLeft') {
            playNavSound()
            e.preventDefault()

            left()
        } else if (e.key === 'ArrowDown') {
            playNavSound()
            e.preventDefault()

            down()
        } else if (e.key === 'ArrowUp') {
            playNavSound()
            e.preventDefault()

            up()
        } else if (e.key === 'Enter') {
            playNavSound()
            e.preventDefault()

            open()
        } else if (e.key === 'Escape') {
            playNavSound()
            e.preventDefault()

            close()
        }
    })

    function right() {
        // left: -10%
        moveMenu('-', columnsStore.cols.length)

        selectedIndexStore.changeColIndex('+', columnsStore.cols.length)
    }

    function left() {
        // left: +10%
        moveMenu('+')

        selectedIndexStore.changeColIndex('-')
    }

    function down() {
        // top: -110px && -220 for the one that go top
        moveRows('-', rowsStore.maxRowsLength[selectedIndexStore.selectedColIndex])

        selectedIndexStore.changeRowIndex('+', rowsStore.maxRowsLength[selectedIndexStore.selectedColIndex])
    }

    function up() {
        // top: +110px && +220 for the one that go top
        moveRows('+')

        selectedIndexStore.changeRowIndex('-')
    }

    function open() {
        // todo : disc, background, browser, trophy
        switch (Object.values(rowsStore.rows)[selectedIndexStore.selectedColIndex][selectedIndexStore.selectedRowIndex].icon) {
            case 'disc':
                console.log('disc')
                break
            case 'background':
                console.log('bg')
                break
            default:
                break
        }
    }

    function close() {
        console.log('close')
    }

    function moveRows(sign: '+' | '-', maxRowsForCurrentCol?: number) {
        if (maxRowsForCurrentCol && sign == '-' && selectedIndexStore.selectedRowIndex < maxRowsForCurrentCol - 1) {
            ;(document.querySelectorAll('.xmb_col')[selectedIndexStore.selectedColIndex].querySelectorAll('.xmb_row')[selectedIndexStore.selectedRowIndex] as HTMLElement).style.top = '-220px'
            topValRow -= 110
        } else if (sign == '+' && selectedIndexStore.selectedRowIndex > 0) {
            ;(document.querySelectorAll('.xmb_col')[selectedIndexStore.selectedColIndex].querySelectorAll('.xmb_row')[selectedIndexStore.selectedRowIndex - 1] as HTMLElement).style.top = '0px'
            topValRow += 110
        }

        xmbCols[selectedIndexStore.selectedColIndex].style.top = topValRow + 'px'
    }

    function moveMenu(sign: '+' | '-', maxCol?: number) {
        //console.log(document.querySelectorAll('.xmb_col')[selectedIndexStore.selectedColIndex].querySelectorAll('.xmb_row'));
        for (const row of document.querySelectorAll('.xmb_col')[selectedIndexStore.selectedColIndex].querySelectorAll('.xmb_row')) {
            ;(row as HTMLElement).style.top = '0px'
        }

        topValRow = 0

        if (maxCol && sign == '-' && selectedIndexStore.selectedColIndex < maxCol - 1) {
            leftValMenu -= 10
        } else if (sign == '+' && selectedIndexStore.selectedColIndex > 0) {
            leftValMenu += 10
        }
        xmbMenu.style.left = leftValMenu + '%'
        xmbCols[selectedIndexStore.selectedColIndex].style.top = topValRow + 'px'
    }
</script>

<template>
    <XmbClock />

    <main class="menu" id="menu">
        <!-- <p id="wip">
            WIP
        </p> -->
        <section id="xmb">
            <XmbColumn v-for="(col, index) in columnsStore.cols" :key="index" :wantedCol="col" :index="index" />
        </section>
    </main>
</template>

<style scoped lang="sass">

    #wip
        text-align: center
        font-size: 70px
        position: relative
        top: 300px

    main
        height: inherit
        // opacity: 0
        transition: ease 500ms

        li,h1,p
            opacity: 80%


    #xmb
        z-index: 3
        display: flex
        position: relative
        top: 27%
        //left: 29%
        transition: left .5s ease
</style>