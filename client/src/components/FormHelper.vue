<template>
    <form id="form-helper">
        <div id="form-header">
            <slot name="form-header"></slot>
        </div>
        <div id="form-content">
            <slot name="form-content"></slot>
        </div>
        <div id="form-buttons">
            <slot name="form-buttons"></slot>
        </div>
        <div id="form-links">
            <ul>
                <li><a href="">Link 1</a></li>
                <li><a href="">Link 2</a></li>
                <li><a href="">Link 3</a></li>
            </ul>
        </div>

    </form>
</template>
<script>
export default {

}
</script>
