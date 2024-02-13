import { createStore } from 'vuex';

import * as actions from './actions';
import state from './state';
import * as mutations from './mutations';

const store = createStore({
    state,
    mutations,
    actions
})

export default store;