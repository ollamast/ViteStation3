<script setup lang="ts">
    import XmbRow from '@/components/XmbRow.vue'
    import { useRowsStore } from '@/stores/RowsStore'
    import { useSelectedIndexStore } from '@/stores/SelectedIndexStore'

    const props = defineProps(['wantedRow', 'colIndex']),
        rowsStore = useRowsStore(),
        selectedIndexStore = useSelectedIndexStore()

    rowsStore.maxRowsLength.push(rowsStore.rows[props.wantedRow].length) // setup the length of all the cols at creation
</script>

<template>
    <ul class="xmb_col_body">
        <template v-if="props.colIndex == selectedIndexStore.selectedColIndex">
            <XmbRow v-for="(row, index) in rowsStore.rows[props.wantedRow]" :key="index" :currentCol="props.wantedRow" :row="row" :index="index" />
        </template>
    </ul>
</template>

<style lang="sass">

    .xmb_col_body
        visibility: hidden
        position: relative
        transition: top .5s
        top: 0
</style>