<template>
    <header>
        <h1 @click="changeTitle"> {{ pageTitle }} </h1>
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
    header {
        background: lightgreen;
        padding: 10px;
    }
    h1 {
        color: #222;
        text-align: center;
    }
</style>
