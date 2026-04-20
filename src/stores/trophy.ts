import { defineStore } from 'pinia'

export const useTrophyStore = defineStore('trophyStore', {
    state: () => {
        return {
            unlocked: [] as string[]
        }
    },
    actions: {
        trophyUnlocked(name: string) {
            this.unlocked.push(name)
        }
    }
})