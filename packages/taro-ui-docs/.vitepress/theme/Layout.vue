
<script setup lang="ts">
import { useRoute, useData } from 'vitepress'
import { computed, onMounted, ref } from 'vue'
import DefaultTheme from 'vitepress/theme'
import pageRoute from '../../page-route'

const { Layout } = DefaultTheme
const route = useRoute()
const { site } = useData()
const base = computed(() => site.value.base || '/')

const nameToRoute: Record<string, string> = {
    'input-number': 'inputnumber',
    'search-bar': 'searchbar',
    'image-picker': 'imagepicker',
    'float-layout': 'floatlayout',
    'swipe-action': 'swipeaction',
    'segmented-control': 'segmentedcontrol',
    'load-more': 'loadmore',
    'activity-indicator': 'activityindicator',
    'action-sheet': 'actionsheet'
}

const demoPath = computed(() => {
    const path = route.path
    const match = path.match(/\/components\/([\w-]+)/)
    if (!match) return ''
    const fileName = match[1].toLowerCase()
    const routeKey = nameToRoute[fileName] || fileName
    const routeMap: Record<string, string> = pageRoute
    return routeMap[routeKey] || ''
})

const iframeSrc = computed(() => {
    if (!demoPath.value) return ''
    return `${base.value}h5/index.html#/pages/${demoPath.value}/index`
})

const iframeBg = computed(() => {
    return `${base.value}iframe_iphonex.png`
})

const hasH5Demo = ref(!import.meta.env.DEV)

onMounted(() => {
    if (!demoPath.value || !import.meta.env.DEV) return
    fetch(`${base.value}h5/index.html`)
        .then(r => { hasH5Demo.value = r.ok })
        .catch(() => { hasH5Demo.value = false })
})
</script>

<template>
    <Layout>
        <template #doc-top>
            <div v-if="demoPath && hasH5Demo" class="demo-iframe-wrapper" :style="{ backgroundImage: `url('${iframeBg}')` }">
                <iframe :src="iframeSrc" frameborder="0"></iframe>
            </div>
        </template>
    </Layout>
</template>
