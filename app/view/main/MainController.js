Ext.define('KitchenManager.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    control: {
        ordergrid: {
            painted: {
                single: true,
                fn: 'startTimer'
            }
        }
    },

    startTimer: function(){
        var grid = this.getView().down('ordergrid');

        if(this.timer){
            this.destroy();
        }

        this.timer = Ext.interval(function () {
            grid.refresh();
        }, 1000);
    },

    onChange: function(seg, val){
        this.getView().lookup('mainCardPanel').setActiveItem(val);
    },

    onDetailView: function(grid, info){
        this.getView().lookup('detailCardPanel').setRecord(info.record);
        this.getView().setActiveItem(1);
    },

    destroy: function() {
        Ext.uninterval(this.timer);
    },

    onSearch: function(field, e){
        if(e.getKey() == e.ENTER){
            var store = this.getView().lookup('gridall').getStore();

            store.addFilter({
                property: 'all',
                value: field.getValue()
            });
        }
    }
});
