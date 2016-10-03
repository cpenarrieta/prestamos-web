import synchronous from './synchronous';
import asynchronous from './asynchronous';

const actions = Object.assign({}, synchronous, asynchronous);

export default actions;
