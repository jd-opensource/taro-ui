<script setup lang="ts">
import ICONS from '../../../components/iconlist/icons.js'

interface Props {
    type?: string
}

const props = withDefaults(defineProps<Props>(), {
    type: 'main'
})

const iconList = ICONS[props.type as keyof typeof ICONS] || []
</script>

<template>
    <div class="icon-list">
        <div v-for="icon in iconList" :key="icon" class="icon-list-item">
            <i :class="`at-icon at-icon-${icon}`"></i>
            <span>{{ icon }}</span>
        </div>
    </div>
</template>
