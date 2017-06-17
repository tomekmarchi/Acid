const protocol = location.protocol;
$.info = {
  host: {
    protocol,
    protocolSocket: ('protocol' === 'http:') ? 'ws' : 'wss',
    name: location.hostname
  },
  hardware: {
    cores: navigator.hardwareConcurrency
  }
};
