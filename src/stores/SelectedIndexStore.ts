import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSelectedIndexStore = defineStore('selectedIndex', () => {
    const selectedRowIndex = ref(0),
        selectedColIndex = ref(0),
        locked = ref(true);

    function changeRowIndex(sign: '+' | '-', maxRowForCurrentCol?: number) {
        if (sign == '-' && selectedRowIndex.value > 0) {
            selectedRowIndex.value--
        } else if (sign == '+' && maxRowForCurrentCol !== undefined && selectedRowIndex.value < maxRowForCurrentCol - 1) {
            selectedRowIndex.value++
        }
    }

    function changeColIndex(sign: '+' | '-', maxCol?: number) {
        if (sign == '-' && selectedColIndex.value > 0) {
            selectedColIndex.value--
            selectedRowIndex.value = 0 // reset row between each col
        } else if (sign == '+' && maxCol !== undefined && selectedColIndex.value < maxCol-1) {
            selectedColIndex.value++
            selectedRowIndex.value = 0 // reset row between each col
        }
    }

    return {
        selectedRowIndex,
        selectedColIndex,
        locked,
        changeRowIndex,
        changeColIndex,
    }
})
