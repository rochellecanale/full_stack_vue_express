<template>
    <button
        v-bind:type="btnType"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <slot />
    </button>
</template>

<script>
export default {
    props: {
        btnType: {
            type: String
        }
    }
}
</script>