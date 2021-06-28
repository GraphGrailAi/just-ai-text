<template>
    <div class="ai-response">
        <div
                v-for="i in 3"
                :key="i"
                class="card"
                v-if="response[`article_generated${i}`]">
            <div class="card-body" v-html="response[`article_generated${i}`]" />
        </div>
    </div>
</template>

<script>
    import smoothscroll from 'smoothscroll-polyfill';
    import { mapGetters } from 'vuex';
    export default {
        name: "TheResponse",
        computed: {
            ...mapGetters({
                response: 'response'
            })
        },
        mounted() {
            this.$nextTick(() => {
                // kick off the polyfill!
                smoothscroll.polyfill();
                window.__forceSmoothScrollPolyfill__ = true;
                document.scrollingElement.scrollTop = this.$el.offsetTop;
            });
        }
    }
</script>

<style scoped lang="scss">
    body {
        scroll-behavior: smooth;
    }
.ai {
    &-response {
        margin-top: 100px;
        .card {
            &:not(&:last-child) {
                margin-bottom: 40px;
            }
        }
    }
}
</style>
