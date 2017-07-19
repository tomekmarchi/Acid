import acid from '../namespace/index';
import { assign } from '../internal/object';
const protocol = location.protocol;
const protocolSocket = (protocol === 'http:') ? 'ws' : 'wss';
const hostname = location.hostname;
/**
  * Holds client hardware, browser, and host info.
  *
  * @memberof $
  * @property info
  * @type {Object}
*/
export const info = {
  hardware: {
    cores: navigator.hardwareConcurrency
  },
  host: {
    name: hostname,
    protocol,
    protocolSocket,
  }
};
assign(acid, {
  info
});
