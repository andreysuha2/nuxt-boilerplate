<template>
    <div class="app">
        <div class="app--content">
            <app-header class="app--header"/>
            <div class="app--page">
                <Nuxt />
            </div>
        </div>
        <app-footer class="app--footer"/>
    </div>
</template>

<script>
import AppHeader from "@globalComponents/AppHeader";
import AppFooter from "@globalComponents/AppFooter";

export default {
    components: {
        "app-header": AppHeader,
        "app-footer": AppFooter
    }
};
</script>

<style lang="scss" scoped>
.app {
    display: flex;
    flex-direction: column;
    min-height: 100%;

    &--content {
        flex: 1 0 auto;
    }

    &--footer {
        flex: 0 0 auto;
    }
}
</style>

<style lang="scss">
.app {
    &--header {
        border-bottom: 1px solid #000;
    }

    &--footer {
        border-top: 1px solid #000;
    }

    &--footer,
    &--header {
        padding: 10px;
    }
}
</style>