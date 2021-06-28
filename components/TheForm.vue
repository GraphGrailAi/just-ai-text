<template>
    <div class="ai-form">
        <div class="form-group">
            <textarea class="form-control" placeholder="Напишите подсказку" v-model="textStart" />
        </div>
        <div class="form-group">
            <input type="text" class="form-control" placeholder="Введите ключевые слова" v-model="keyWords">
        </div>
        <div class="row mt-5">
            <div class="col col-12 col-xl-2 col-md-4 col-sm-6">
                <div class="form-range">
                    <label for="num_word" class="form-label">Количество слов</label>
                    <input type="range" class="form-range" min="100" max="2000" step="1" id="num_word" v-model="numWords">
                    <div class="form-range-value text-center" v-html="data.num_words" />
                </div>
            </div>
            <div class="col col-12 col-xl-2 offset-xl-8 col-md-4 offset-md-4 col-sm-6">
                <div class="form-range">
                    <label for="topk" class="form-label text-center">TOPK</label>
                    <input ref="num_word" type="range" class="form-range" min="0" max="10" step="1" id="topk" v-model="topk">
                    <div class="form-range-value text-center" v-html="data.topk" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapMutations, mapGetters } from 'vuex';
    export default {
        name: "TheForm.vue",
        computed: {
            ...mapGetters({
                data: 'data',
            }),
            textStart: {
                get() { return this.$store.state.data.text_start; },
                set(value) { this.setData({ key: 'text_start', value: value }); }
            },
            keyWords: {
                get() { return this.$store.state.data.key_words; },
                set(value) { this.setData({ key: 'key_words', value: value }); }
            },
            numWords: {
                get() { return this.$store.state.data.num_words; },
                set(value) { this.setData({ key: 'num_words', value: value }); }
            },
            topk: {
                get() { return this.$store.state.data.topk; },
                set(value) { this.setData({ key: 'topk', value: value }); }
            }
        },
        methods: {
            ...mapMutations({
                setData: 'SET_DATA'
            }),
        },
    }
</script>

<style scoped lang="scss">
.ai-form {
    .form-group {
        textarea.form-control, input.form-control {
            border: 0;
            border-bottom: 2px solid #d8d8d8;
            appearance: none;
            resize: none;
            &:focus {
                box-shadow: none;
                border: 0;
                border-bottom: 2px solid #000000;
            }
        }
        input.form-control {
            margin-top: 30px;
        }
    }
}
</style>
