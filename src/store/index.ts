import { createStore } from 'vuex';

import * as actions from './actions';
import * as getters from './getters';
import {state} from './state';
import * as mutations from './mutations';

const store = createStore({
    state,
    getters,
    mutations,
    actions
})

export default store;