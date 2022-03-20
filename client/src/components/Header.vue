<template>
    <header class="w-full bg-gray-100 py-8">
        <div class="container mx-auto relative flex justify-content items-center p-2 border">
            <a href="" class="text-gray-500 flex-none w-auto text-2xl hover:underline">My Works ></a>
            <div class="grow"></div>
            <button class="w-auto bg-sky-400 hover:btn-hover text-white px-4 py-2 rounded text-sm">Login</button>
        </div>
    </header>
</template>
<script>

import { bus } from '../main'

export default {
    props: {
        title: {
            type: String
        }
    },
    data() {
        return {
            pageTitle: this.title
        }
    },
    methods: {
        changeTitle() {
            //this.$emit('changeTitle', 'Vue Wizards')
            this.pageTitle = 'Vue Wizards'
            bus.$emit('titleChanged', 'Vue Wizards')
        }
    }
}
</script>
<style scoped>

</style>
