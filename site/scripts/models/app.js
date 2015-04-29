
$.view('iframe', '<div class="container_minus_navbar top absolute fill show_gpu gpu_hide_top trans-all" data-node="hudNode">\
        <header class="side_panel nohl fadein theme theme_bg text_navigation navigation_bar" data-click="events/scroll.up">\
            <div class="glow"></div>\
            <a class="nav_item trans-all slideinfb" data-click="app.hudBack" data-mouseover="plugins/tip.unpack"  data-tooltip="Back">\
                <i class="icon icon-left-open"></i>\
            </a>\
            <a class="nav_item trans-all slideinfb" data-click="app.hudForward" data-mouseover="plugins/tip.unpack"  data-tooltip="Forward">\
                <i class="icon icon-right-open"></i>\
            </a>\
            <a class="nav_item right trans-all slideinfb" data-click="app.hudClose" data-mouseover="plugins/tip.unpack"  data-tooltip="Close HUD">\
                <i class="icon icon-cancel"></i>\
            </a>\
        </header>\
        <iframe class="container_minus_navbar absolute fill" data-node="hudiframe"></iframe>\
    </div>', function(data, node) {
    data.hudiframe.src = data.src;
    return data;
});

$.model.app = {
    iframeData: {},
    showArch: function() {
        $('.architecture').toggle('hide');
    },
    hudClose:function(){
        this.iframeData.rootNode.cl('gpu_hide_top');
    },
    hudForward:function(){
         this.iframeData.hudiframe.contentWindow.history.forward();
    },
    hudBack:function(){
         this.iframeData.hudiframe.contentWindow.history.back();
    },
    iframe: function(obj) {
        var url=obj.attr('data-href');
        if (this.iframeData.hudiframe) {
            this.iframeData.rootNode.apTo($('body')[0])
            this.iframeData.hudiframe.src = url;
        } else {
            this.iframeData = {
                src: url
            };
            $.view('iframe', this.iframeData);
            $('body')[0].ap(this.iframeData.rootNode);
        }
         this.iframeData.rootNode.clRemove('gpu_hide_top');
    }
};