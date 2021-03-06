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
            name: 'address',
            type: 'string'
        },{
            name: 'items',
            type: 'auto'
        },{
            name: 'cellCls',
            type: 'string',
            persist: false
        },{
            name: 'comments',
            type: 'string'
        }
    ]
});