<template>
   <footer>
       <p>{{ copyright }} {{ pageTitle }}</p>
   </footer>
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
            pageTitle: this.title,
            copyright: "Copyright 2022"
        }
    },
    methods: {
    },
    created() {
        bus.$on('titleChanged', (data) => {
            this.pageTitle = data
        })
    }
}
</script>
<style scoped>
    footer {
        background: #222;
        padding: 6px;
    }
    p {
        color: lightgreen;
        text-align: center;
    }
</style>
