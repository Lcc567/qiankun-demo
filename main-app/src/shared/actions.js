import { initGlobalState } from "qiankun";
import initState from './state'

const actions = initGlobalState(initState);

export default actions;