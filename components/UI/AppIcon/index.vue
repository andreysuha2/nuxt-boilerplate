<template>
    <i :class="classList"
        class="app-icon"></i>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        }
    },
    computed: {
        classList() {
            return [ `app-icon__${this.name}` ];
        }
    }
};
</script>

<style lang="scss">
.app-icon {
    font-family: $iconFont;
    font-style: normal;
}
</style>