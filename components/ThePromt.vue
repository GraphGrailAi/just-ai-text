<template>
    <div class="promt">
        <button
                type="button"
                class="btn promt-btn"
                data-toggle="modal" data-target="#promtList">
            Список подсказок
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" role="img" class="iconify iconify--fluent" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" style="transform: rotate(360deg);"><g fill="none"><path d="M2.747 15a.75.75 0 0 1 .743.648l.007.102v3.502l.007.128a1.25 1.25 0 0 0 1.115 1.116l.128.006h3.5l.102.007a.75.75 0 0 1 0 1.486l-.102.007h-3.5l-.167-.005a2.75 2.75 0 0 1-2.578-2.57l-.005-.175V15.75l.007-.102A.75.75 0 0 1 2.747 15zm18.5 0a.75.75 0 0 1 .743.648l.007.102v3.502a2.75 2.75 0 0 1-2.582 2.745l-.168.005h-3.5a.75.75 0 0 1-.102-1.493l.102-.007h3.5a1.25 1.25 0 0 0 1.244-1.122l.006-.128V15.75a.75.75 0 0 1 .75-.75zm-8.992.5a.75.75 0 0 1 .102 1.493l-.102.007H7.75a.75.75 0 0 1-.102-1.493l.102-.007h4.505zm3.995-4.25a.75.75 0 0 1 .102 1.493l-.102.007h-8.5a.75.75 0 0 1-.102-1.493l.102-.007h8.5zM8.247 2a.75.75 0 0 1 .102 1.493l-.102.007h-3.5a1.25 1.25 0 0 0-1.243 1.122l-.007.128v3.502a.75.75 0 0 1-1.493.102l-.007-.102V4.75A2.75 2.75 0 0 1 4.58 2.005L4.747 2h3.5zm11 0l.168.005a2.75 2.75 0 0 1 2.577 2.57l.005.175v3.502l-.007.102a.75.75 0 0 1-1.486 0l-.007-.102V4.75l-.006-.128a1.25 1.25 0 0 0-1.116-1.116l-.128-.006h-3.5l-.102-.007a.75.75 0 0 1 0-1.486L15.747 2h3.5zM16.25 7a.75.75 0 0 1 .102 1.493l-.102.007h-8.5a.75.75 0 0 1-.102-1.493L7.75 7h8.5z" fill="#34566f"></path></g></svg>
        </button>

        <!-- Modal -->
        <div class="modal fade ai-modal" id="promtList" tabindex="-1" aria-labelledby="promtListLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Список подсказок</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="promt-list">
                            <button class="promt-item" type="button"
                                v-for="(row, row_key) in list"
                                :key="row_key"
                                @click="fillDataFromRow(row)"
                                data-dismiss="modal">

                                <div class="promt-left">
                                    <div class="promt-row">
                                        <div class="promt-small font-weight-bold">Подсказка:</div>
                                        <div class="promt-value" v-html="row.text_start" />
                                    </div>
                                    <div class="promt-row">
                                        <div class="promt-small font-weight-bold">Ключевые слова:</div>
                                        <div class="promt-value" v-html="row.text_start" />
                                    </div>
                                    <div class="promt-row">
                                        <span class="font-weight-bold" style="font-size: 14px;">Количество слов:
                                            <span v-html="row.num_words" class="font-weight-normal" />
                                        </span>
                                        <span class="font-weight-bold" style="font-size: 14px;">TOPK:
                                            <span class="font-weight-normal" v-html="row.topk" />
                                        </span>
                                    </div>
                                </div>

                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex';
    export default {
        name: "ThePromt",
        computed: {
          ...mapGetters({
              list: 'list'
          }),
        },
        methods: {
            ...mapMutations({
                fillDataFromRow: 'FILL_DATA_FROM_ROW'
            }),
        }
    }
</script>

<style scoped lang="scss">
.promt {
    &-modal {
    }
    &-btn {
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-top: 30px;
        border: 1px solid #47494e;
        &:focus {
            box-shadow: none;
        }
    }
    &-list {

    }
    &-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        background: rgba(0,0,0,0);
        padding: 0;
        margin: 0;
        border: 0;
        &:not(&:last-child) {
            padding-bottom: 20px;
            border-bottom: 1px solid #47494e;
            margin-bottom: 20px;
        }
        &:hover {
            opacity: .6;
        }
    }
    &-left {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        flex-basis: 100%;
        width: 100%;
    }
    &-row {
        flex-basis: 100%;
        width: 100%;
    }
    &-small {
        margin-bottom: 2px;
        font-size: 14px;
    }
    &-value {
        margin-bottom: 4px;
    }
}
</style>
