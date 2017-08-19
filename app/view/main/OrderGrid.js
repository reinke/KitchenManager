Ext.define('KitchenManager.view.main.OrderGrid', {
    extend: 'Ext.grid.Grid',

    alias: 'widget.ordergrid',

    requires: [
        'KitchenManager.view.main.store.GridStore',
        'Ext.grid.plugin.RowExpander'
    ],

    hideHeaders: true,

    store: {
        type: 'gridstore'
    },
    striped: true,

    columns: [
        {
            dataIndex: 'address',
            width: 200,
            tpl: [
                '<tpl for="address">',
                    '<div class="address-box">',
                        '{name}<br />',
                        '{street}<br />',
                        '{zip} {city}',
                    '</div>',
                '</tpl>'

            ],
            cell:{
                encodeHtml: false
            }
        },
        {
            flex: 1
        },
        {
            cell: {
                tools: {
                    right: {
                        //iconCls: 'x-fa fa-right',
                        handler: 'onApprove'
                    }
                }
            }
        }
    ]
});