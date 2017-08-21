Ext.define('KitchenManager.view.main.OrderGridAll.',{
    extend:'Ext.grid.Grid',
    alias:'widget.gridAll',

    store: {
        type: 'gridstore'
    },

    itemConfig: {
        viewModel: {}
    },

    //plugins: 'gridfilters',

    columns:[
        {
            dataIndex: 'id',
            text:'Bestell Nr',
            flex :1
        },{
            dataIndex: 'status',
            text: 'Status',
            flex:1
        },{
            dataIndex: 'created',
            type: 'date',
            text: 'Eingegangen',
            flex:1
        },{
           // dataIndex: 'address',
            //xtype: 'textcolumn',
            text: 'Kunde',
            flex:1,
            cell: {
                bind: {
                    value: '{record.address.name}'
                }
            },
            filter:{
                type:'search'
            }
        },{
            dataIndex: 'address',
            text: 'Adresse',
            flex:1,
            cell: {
                bind: {
                    //value: '{record.address}'

                }
            }
        },{
            dataIndex: 'items',
            header: 'Bestellung',
            flex:1
        },
        {
            cell: {
                tools: {
                    right: {
                        handler: 'onDetailView',
                        cls: 'row-action-right'
                    }
                }
            }
        }

    ]
})