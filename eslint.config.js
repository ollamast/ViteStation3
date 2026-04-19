import pluginVue from 'eslint-plugin-vue'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import prettierConfig from 'eslint-config-prettier'

export default [
    {
        ignores: ['dist/', 'public/'],
    },
    ...defineConfigWithVueTs(
        pluginVue.configs['flat/essential'],
        vueTsConfigs.recommended,
        prettierConfig
    ),
    {
        rules: {
            '@typescript-eslint/no-explicit-any': 'off'
        }
    }
]
