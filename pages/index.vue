<template>
    <div class="index">
        <nav class="navbar navbar-dark ai-navbar" />
        <div class="container">
            <div class="row mb-5 ai-page-head">
                <h1 class="col col-12 ai-title">AI Генератор статей</h1>
                <the-promt />
            </div>
            <the-form />
            <div>
                <button v-if="!loader" class="btn ai-activate" @click="aiActivate">
                    Запустить модель
                    <svg width="12px" height="16px" viewBox="0 0 12 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="bi:lightning-charge" transform="translate(-2.000000, 0.000000)" fill="#34566F" fill-rule="nonzero">
                                <g id="Group" transform="translate(2.499789, 0.000000)">
                                    <path d="M8.75121076,0.0684565911 C8.95275755,0.185297955 9.04690417,0.425848807 8.97821076,0.648456591 L7.17721076,6.50045659 L10.5002108,6.50045659 C10.6998037,6.50037705 10.880324,6.61900842 10.9594457,6.80224897 C11.0385674,6.98548953 11.0011315,7.19823248 10.8642108,7.34345659 L2.86421076,15.8434566 C2.70481792,16.0129517 2.44957601,16.0501015 2.24848063,15.9330745 C2.04738524,15.8160475 1.95358838,15.5757754 2.02221076,15.3534566 L3.82321076,9.50045659 L0.500210764,9.50045659 C0.300617844,9.50053614 0.12009748,9.38190477 0.0409758154,9.19866421 C-0.0381458491,9.01542365 -0.0007100057,8.8026807 0.136210764,8.65745659 L8.13621076,0.157456591 C8.29539798,-0.0117945726 8.55020055,-0.0490827535 8.75121076,0.0674565911 L8.75121076,0.0684565911 Z M1.65721076,8.50045659 L4.50021076,8.50045659 C4.65889289,8.50042571 4.8081692,8.57571956 4.90246071,8.70334844 C4.99675221,8.83097732 5.02486331,8.99578735 4.97821076,9.14745659 L3.61021076,13.5904566 L9.34221076,7.50045659 L6.50021076,7.50045659 C6.34152863,7.50048747 6.19225233,7.42519362 6.09796082,7.29756474 C6.00366931,7.16993586 5.97555821,7.00512583 6.02221076,6.85345659 L7.39021076,2.41045659 L1.65721076,8.50045659 Z" id="Shape"></path>
                                </g>
                            </g>
                        </g>
                    </svg>
                </button>
                <div v-else class="col col-12 col-md-6 mt-5 offset-md-3">
                    <div class="spinner-border text-primary mx-auto d-block" role="status">
                        <span class="visually-hidden" />
                    </div>
                    <span class="ai-load_text">Подождите, ответ модели может занять 10-20 секунд</span>
                </div>
            </div>
            <the-response v-if="Object.keys(response).length" />
        </div>
        <div style="height: 200px;"></div>
    </div>
</template>

<script>
    import TheForm from '~/components/TheForm.vue';
    import TheResponse from "~/components/TheResponse.vue";
    import ThePromt from "~/components/ThePromt.vue";
    import { mapGetters, mapActions, mapMutations } from 'vuex';
    export default {
        name: 'index',
        data: () => ({
            loader: false,
        }),
        components: {
            TheForm,
            TheResponse,
            ThePromt,
        },
        computed: {
            ...mapGetters({
                data: 'data',
                response: 'response',
            }),
        },
        mounted() {
          this.$nextTick(() => {
              this.loadFromJSON();
          });
        },
        methods: {
            ...mapMutations({
                clearResponse: 'CLEAR_RESPONSE',
            }),
            ...mapActions({
                aiSend: 'AI_SEND',
                loadFromJSON: 'LOAD_FROM_JSON',
            }),
            aiActivate() {
                if (!this.data.text_start.length) {
                    this.$notify.error('Пожалуйста напишите подсказку');
                } else if (!this.data.key_words.length) {
                    this.$notify.error('Пожалуйста напишите ключевые слова');
                } else if (!this.data.num_words) {
                    this.$notify.error('Пожалуйста выберите количество слов');
                } else if (!this.data.topk) {
                    this.$notify.error('Пожалуйста выберите TOPK');
                } else {
                    this.clearResponse();
                    this.loader = true;
                    setTimeout(() => {
                        this.aiSend().then(() => {
                            this.loader = false;
                        });
                    }, 1000);
                }
            },
        }
    }
</script>
<style lang="scss">
    .ai {
        &-load_text {
            font-size: 14px;
            display: block;
            text-align: center;
            margin-top: 12px;
        }
        &-navbar {
            height: 60px;
            background: rgba(0,0,0,0);
        }
        &-title {
            font-size: 1.4em;
            text-align: center;
            margin: 1.2em 0 1.5em;
        }
        &-activate {
            display: block;
            margin-left: auto;
            margin-right: auto;
            margin-top: 30px;
            border: 1px solid #47494e;
            &:focus {
                box-shadow: none;
            }
        }
    }
    .form-range {
        display: flex;
        flex-direction: column;
        &-value {
            display: block;
            width: 100%;
        }
    }
</style>
