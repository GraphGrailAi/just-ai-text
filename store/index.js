export const state = () => ({
    data: {
        text_start: '',
        key_words: '',
        num_words: 200,
        topk: 5,
    },
    response: {},
    list: []
});

export const getters = {
    data : state => state.data,
    response: state => state.response,
    list: state => state.list,
};

export const mutations = {
    SET_DATA(state, payload) {
        state.data[payload.key] = payload.value;
    },
    SET_RESPONSE(state, payload) {
        state.response = payload;
    },
    CLEAR_RESPONSE(state) {
        state.response = {};
    },
    SET_LIST(state, payload) {
        state.list = payload;
    },
    FILL_DATA_FROM_ROW(state, payload) {
        state.data = payload;
    }
};

export const actions = {
    AI_SEND: async function ({state, commit}) {
        try {
            commit('CLEAR_RESPONSE');
            const response = await this.$axios.$post('http://109.248.175.145:5011/aiseo/api/generate_article',
                {
                    'text_start': state.data.text_start,
                    'key_words': state.data.key_words,
                    'num_words': `${state.data.num_words}`,
                    'topk': `${state.data.topk}`
                }, {
                    'Content-Type': 'application/json'
                });
            commit('SET_RESPONSE', response);
        } catch (error) {
            this.$notify.error(error);
        }
    },
    async LOAD_FROM_JSON({ commit }) {
        try {
            const response = await this.$axios.$get('http://109.248.175.145/promt.json');
            commit('SET_LIST', response);
        } catch (error) {
            this.$notify.error(error);
        }
    }
};
