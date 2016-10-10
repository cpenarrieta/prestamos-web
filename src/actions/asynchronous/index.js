import signin from './signin';
import persistAuthToken from './persistAuthToken';
import quoteSubmit from './quoteSubmit';
import finishQuote from './finishQuote';

const actions = Object.assign({}, {
  signin,
  persistAuthToken,
  quoteSubmit,
  finishQuote,
});

export default actions;
