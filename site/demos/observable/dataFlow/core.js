(function() {

    $.module({
        import: [$, 'base', 'router', 'component', 'model', '/site/scripts/models/css/css.js', '/site/scripts/models/libs/hl.js'],
        invoke: function($, base, router, component, model, css, hl) {
            //load css
            css();
            //load highlight code
            hl();

            //dataFlow database
            base('mainBase', {
                data: {
                    text: '',
                    title: ''
                }
            });

            //dataFlow router
            router('mainRouter', {
                state: model('mainBase').data,
                text: function(change) {
                    change.origin.unshift('mainBase');
                    this.notifyModel('dataFlow', change);
                    console.log('text routed to dataFlow');
                },
                title: function(change) {
                    change.origin.unshift('mainBase');
                    this.notifyModel('dataFlow', change);
                    console.log('Title routed to dataFlow');
                },
                routerStatus: function() {
                    console.log('METHOD ROUTER ONLINE');
                }
            });

            //dataFlow component
            var dataFlow=component('dataFlow', {
                share: 'mainBase',
                template: `<div>
                    <div class="w-25 left pad_box">
                    <b>Change title on mainBase</b>
                    <input placeholder="Title" data-keyup="this.onChangetitle">
                    <b data-node="titleOrigin"></b>
                    <code><pre data-node="title" class="pad_box"></pre></code>
                    </div>
                    <div class="w-25 left pad_box">
                    <b>Change text on mainBase</b>
                    <input placeholder="Text" data-keyup="this.onChange">
                    <b data-node="textOrigin"></b>
                    <code><pre data-node="text" class="pad_box"></pre></code>
                    </div>
                </div>`,
                onChange: function(obj) {
                    this.share.mainBase.data.text = obj.value;
                },
                onChangetitle: function(obj) {
                    this.share.mainBase.data.title = obj.value;
                },
                text: function(change) {

                    if (this.share.mainBase.data.text.length == 0) {
                        this.nodes.text.clear();
                        return this.nodes.textOrigin.clear();
                    }

                    var text = change.origin.join(' > ');
                    this.nodes.textOrigin.tc('Arrivals & Departures:' + text);

                    var text = change.stringify();
                    this.nodes.text.tc(JSON.stringify(JSON.parse(text), null, 2));
                    hljs.highlightBlock(this.nodes.text);
                },
                title: function(change) {

                    if (this.share.mainBase.data.title.length == 0) {
                        this.nodes.title.clear();
                        return this.nodes.titleOrigin.clear();
                    }

                    var text = change.origin.join(' > ');
                    this.nodes.titleOrigin.tc('Arrivals & Departures:' + text);

                    var text = change.stringify();
                    this.nodes.title.tc(JSON.stringify(JSON.parse(text), null, 2));
                    hljs.highlightBlock(this.nodes.title);
                }
            });
            //generate a component from the factory
            $('#wrapper').ap(dataFlow.render().mount()).ap(dataFlow.render().mount());

            console.log('Module Finished');
        },
        modelName: 'core'
    });
})();