Ext.define('KitchenManager.view.main.store.GridStore', {
    extend: 'Ext.data.Store',
    alias: 'store.gridstore',


    requires: [
        'KitchenManager.view.main.model.GridModel'
    ],

    model: 'KitchenManager.view.main.model.GridModel',

    autoLoad: true,
    remoteFilter: true,

    proxy: {
        type: 'ajax',
        url: 'resources/grid.json',
        reader: {
            type: 'json',
            rootProperty: "data",
            successProperty: "success"
        }
    }
});