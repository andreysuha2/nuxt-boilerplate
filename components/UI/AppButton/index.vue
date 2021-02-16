<template>
    <button
        @click="$emit('click')"
        :class="classList"
        class="app-button">
        <app-icon v-if="icon" :name="icon"/>
        <slot v-else></slot>
    </button>
</template>

<script>
export default {
    props: {
        icon: {
            type: [ String, Boolean ],
            default: false
        }
    },
    computed: {
        classList() {
            return { "app-button__icon": this.icon };
        }
    }
};
</script>

<style lang="scss">
.app-button {
    font-family: $mainFont;

    &:not(:disabled) {
        cursor: pointer;
    }

    &__icon {
        display: inline-flex;
        padding: 0;
        line-height: normal;
        background: transparent;
        border: none;
    }
}
</style>