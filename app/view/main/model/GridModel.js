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
            name: 'created',
            type: 'date',
            dateFormat: 'Y-m-d H:i'
        },{
            name: 'clientName',
            type: 'string'
        },{
            name: 'address.name',
            type: 'string'
        },{
            name: 'items',
            type: 'auto'
        }
    ]
});