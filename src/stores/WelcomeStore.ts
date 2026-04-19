import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useWelcomeStore = defineStore('welcome', () => {
    const isWelcomeValid = ref(false);

    function changeIsValid() {
        isWelcomeValid.value = !isWelcomeValid.value;
    }

    return {
        isWelcomeValid,
        changeIsValid
    }
})
