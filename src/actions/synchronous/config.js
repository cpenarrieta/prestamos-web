export const RECEIVE_CONFIG = 'config/RECEIVE';

export function receiveConfig(config) {
  return { type: RECEIVE_CONFIG, config };
}
