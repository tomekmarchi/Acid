import acid from '../namespace/index';
import { assign } from '../internal/object';
const protocol = location.protocol;
const protocolSocket = (protocol === 'http:') ? 'ws' : 'wss';
const hostname = location.hostname;
export const info = {
  host: {
    protocol,
    protocolSocket,
    name: hostname
  },
  hardware: {
    cores: navigator.hardwareConcurrency
  }
};
assign(acid, {
  info
});
