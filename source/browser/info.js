import acid from '../namespace/index';
import { assign } from '../internal/object';
const protocol = location.protocol;
export const info = {
  host: {
    protocol,
    protocolSocket: (protocol === 'http:') ? 'ws' : 'wss',
    name: location.hostname
  },
  hardware: {
    cores: navigator.hardwareConcurrency
  }
};
assign(acid, {
  info
});
