Ext.define('KitchenManager.view.detail.DetailView', {
    extend: 'Ext.panel.Panel',

    alias: 'widget.detailview',

    requires: [
        'KitchenManager.view.detail.DetailController'
    ],

    controller: 'detail',

    config: {
        record: null
    }
});