<script setup lang="ts">
    import { useSelectedIndexStore } from '@/stores/SelectedIndexStore';
    import XmbColBody from '@/components/XmbColBody.vue'

    const props = defineProps(['wantedCol', 'index'])
    const selectedIndexStore = useSelectedIndexStore();

    const parsedColName = props.wantedCol.split(' ').join('');
</script>

<template>
    <ul class="xmb_col">
        <ul class="xmb_col_header">
            <img :src='`/xmb-icons/`+parsedColName+`/xmb-`+parsedColName+`.png`' alt="xmb_home" class="xmb_col_icons">

            <li class="xmb_col_title" :class="{active: props.index == selectedIndexStore.selectedColIndex}">
                {{props.wantedCol.charAt(0).toUpperCase()+props.wantedCol.slice(1)}}
            </li>
        </ul>

        <XmbColBody :class="{active: props.index == selectedIndexStore.selectedColIndex}" :wantedRow="props.wantedCol" :colIndex="props.index"/>

    </ul>
</template>

<style lang="sass">

    .xmb_col
        position: relative
        width: 10%
        margin-right: 10px

    .xmb_col_header
        list-style: none
        display: flex
        width: fit-content
        flex-direction: column
        align-items: center
        margin-bottom: 70px

    .xmb_col_icons
        position: relative
        height: 90px
        width: 90px
        object-fit: contain
        margin-bottom: 15px

    .xmb_col_title
        visibility: hidden
        font-size: 18px
        max-width: 90px
        text-align: center

    .active
        visibility: visible

</style>