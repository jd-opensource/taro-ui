
<script setup lang="ts">
import { useRoute } from 'vitepress'
import { computed } from 'vue'
import DefaultTheme from 'vitepress/theme'
import pageRoute from '../../page-route'

const { Layout } = DefaultTheme
const route = useRoute()

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
    const path = route.path
    const depth = path.split('/').filter(Boolean).length
    const prefix = depth === 0 ? './' : '../'.repeat(depth)
    return `${prefix}h5/index.html#/pages/${demoPath.value}/index`
})

const iframeBg = computed(() => {
    const path = route.path
    const depth = path.split('/').filter(Boolean).length
    const prefix = depth === 0 ? './' : '../'.repeat(depth)
    return `${prefix}iframe_iphonex.png`
})
</script>

<template>
    <Layout>
        <template #doc-top>
            <div v-if="demoPath" class="demo-iframe-wrapper" :style="{ backgroundImage: `url('${iframeBg}')` }">
                <iframe :src="iframeSrc" frameborder="0"></iframe>
            </div>
        </template>
    </Layout>
</template>
