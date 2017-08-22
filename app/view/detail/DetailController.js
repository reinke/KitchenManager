Ext.define('KitchenManager.view.detail.DetailController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.detail',

    control: {
        detailview: {
            show: 'onShow'
        }
    },

    onShow: function(){
        var rec = this.getView().getRec();
        this.getView().setData(rec.data);
    },

    onMainView: function(){
        this.getView().up().setActiveItem(0);
    },

    onPLay: function(){

    }

});