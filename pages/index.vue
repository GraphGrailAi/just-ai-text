<template>
    <div class="index">
        <nav class="navbar navbar-dark" />
        <div class="container">
            <div class="row mb-5">
                <h1 class="col col-12">AI Form</h1>
            </div>
            <template v-if="!emptyResponse">
                <div class="row">
                    <div class="col col-12">
                        <div class="card">
                            <div class="card-body">
                                <p>
                                    {{ Response.article_generated1 }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col col-12">
                        <div class="card">
                            <div class="card-body">
                                <p>
                                    {{ Response.article_generated2 }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col col-12">
                        <div class="card">
                            <div class="card-body">
                                <p>
                                    {{ Response.article_generated3 }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
            <div class="row mt-5" v-if="emptyResponse">
                <div class="col col-12">
                    <div class="form-group">
                        <textarea ref="text_start" placeholder="Text start" class="form-control" v-model="text_start" />
                    </div>
                    <div class="form-group">
                        <input ref="key_words" placeholder="Key words" class="form-control" v-model="key_words" />
                    </div>
                </div>
                <div class="col col-12 col-xl-2 col-md-4 col-sm-6">
                    <div class="form-range">
                        <label for="num_word" class="form-label">Num Word</label>
                        <input ref="num_word" type="range" class="form-range" min="100" max="2000" step="1" id="num_word" v-model="num_word">
                        <div class="form-range-value text-center" v-html="num_word" />
                    </div>
                </div>
                <div class="col col-12 col-xl-2 offset-xl-8 col-md-4 offset-md-4 col-sm-6">
                    <div class="form-range">
                        <label for="num_word" class="form-label text-center">Topk</label>
                        <input ref="num_word" type="range" class="form-range" min="0" max="10" step="1" id="num_word" v-model="topk">
                        <div class="form-range-value text-center" v-html="topk" />
                    </div>
                </div>
                <div v-if="!loader" class="col col-12 col-md-6 mt-5 offset-md-3">
                    <button class="btn btn-primary w-100 btn-lg" @click="Send">Send</button>
                </div>
                <div v-else class="col col-12 col-md-6 mt-5 offset-md-3">
                    <div class="spinner-border text-primary mx-auto d-block" role="status">
                        <span class="visually-hidden" />
                    </div>
                </div>
            </div>
        </div>
        <div style="height: 200px;"></div>
    </div>
</template>

<script>
    export default {
        name: 'index',
        data: () => ({
            num_word: 200,
            topk: 5,
            text_start: 'test',//
            key_words: 'test',
            loader: false,
            Response: {}
        }),
        computed: {
          emptyResponse() {
              if (typeof this.Response === 'string') return this.Response.length ? false : true;
              if (typeof this.Response === 'object') return !Object.keys(this.Response).length;
          }
        },
        methods: {
            async Send() {
                this.Response = {};
                if (!this.num_word || !this.topk || !this.text_start.length || !this.key_words.length) {
                    alert('Please fill this form');
                } else {
                    this.loader = true;
                    try {
                        const response = await this.$axios.$post('http://109.248.175.145:5011/aiseo/api/generate_article',
                            {
                                'text_start': this.text_start,
                                'key_words': this.key_words,
                                'num_words': `${this.num_word}`,
                                'topk': `${this.topk}`
                            }, {
                            'Content-Type': 'application/json'
                        });
                        this.Response = response;
                        this.loader = false;
                    } catch (error) {
                        console.log('error: ', error.message);
                        this.Response = error.message;
                        this.loader = false;
                    }
                }
            },
        }
    }
</script>
<style lang="scss">
    .form-range {
        display: flex;
        flex-direction: column;
        &-value {
            display: block;
            width: 100%;
        }
    }
</style>
