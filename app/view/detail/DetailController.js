Ext.define('KitchenManager.view.detail.DetailController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.detail',

    control: {
        detailview: {
            show: 'onShow'
        }
    },

    onShow: function(){
        this.getView().setHtml('Item ID: '+this.getView().getRecord().get('id'));
    },

    onMainView: function(){
        this.getView().up().setActiveItem(0);
    }

});