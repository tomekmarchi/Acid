const protocol = location.protocol;
acid.info = {
  host: {
    protocol,
    protocolSocket: ('protocol' === 'http:') ? 'ws' : 'wss',
    name: location.hostname
  },
  hardware: {
    cores: navigator.hardwareConcurrency
  }
};
