//dataFlow router
$.router('pushRouter', {
    pushStateRouter: true,
    privateData: {
        root: '/site/demos/observable/todoMVC/'
    },
    stateChange: function(data) {
        var currentPath = data.currentPath;
        var isIndex = data.isIndex;
        var page = currentPath;
        if (isIndex) {
            var page = 'index';
        } else if (currentPath.match(/\/active\//g)) {
            var page = 'active';
        } else if (currentPath.match(/\/completed\//g)) {
            var page = 'completed';
        }
        this.data.appState = {
            index: isIndex,
            currentPath: currentPath,
            page: page
        };
    },
    pushState: function(node, event) {
        var url = node.attr('data-href');
        this.push(url);
    },
    routerStatus: function() {
        console.log('ROUTER ONLINE');
    }
});