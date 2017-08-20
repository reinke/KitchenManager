Ext.define('KitchenManager.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onChange: function(seg, val){
        this.getView().lookup('mainCardPanel').setActiveItem(val);
    },

    onDetailView: function(grid, info){
        this.getView().lookup('detailCardPanel').setRecord(info.record);
        this.getView().setActiveItem(1);
    }
});
