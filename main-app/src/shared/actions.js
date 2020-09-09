import { initGlobalState } from "qiankun";
import initState from './state';
import store from '../store'
import { mapState } from "vuex";

console.log('store111',store.state.user, mapState(['user']));
const actions = initGlobalState(initState);

export default actions;