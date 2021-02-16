<template>
    <footer class="app-footer flex justify-center">
        <span class="app-footer--copy">&copy; {{ year }}</span>
    </footer>
</template>

<script>
export default {
    data() {
        return { year: new Date().getFullYear() };
    }
};
</script>