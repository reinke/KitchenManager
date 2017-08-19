Ext.define('KitchenManager.view.main.model.GridModel', {
    extend: 'Ext.data.Model',

    field: [
        {
            name: 'id',
            type: 'int'
        },{
            name: 'status',
            type: 'auto'
        },{
            name: 'cientName',
            type: 'string'
        },{
            name: 'address',
            type: 'string'
        },{
            name: 'items',
            type: 'auto'
        }
    ]
});