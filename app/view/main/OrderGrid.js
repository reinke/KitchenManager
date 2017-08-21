Ext.define('KitchenManager.view.main.OrderGrid', {
    extend: 'Ext.grid.Grid',

    alias: 'widget.ordergrid',

    requires: [
        'KitchenManager.view.main.store.GridStore',
        'Ext.grid.plugin.RowExpander'
    ],

    hideHeaders: true,

    store: {
        type: 'gridstore',
        remoteFilter: false,
        filters: [
            {
                property: 'status',
                value: 'new',
                operator: '='
            }
        ]
    },

    striped: true,

    viewModel: true,

    itemConfig: {
        viewModel: {
            formulas: {
                cellCls: {
                    get: function(get) {
                        return get('record.cellCls');
                    }
                }
            }
        }
    },

    columns: [

        {
            dataIndex: 'created',
            cell: {
                bind: {
                    cls: '{cellCls}'
                },
                renderer: function(date, rec){
                    var oneHour = 3600000,
                        diff = new Date((new Date() - Ext.Date.parse(date, 'Y-m-d H:i')) - oneHour);

                    rec.set('cellCls', (diff.getTime()+oneHour > oneHour/2)?'cell-red':'cell-black');
                    return Ext.Date.format(diff, 'H:i:s');
                }
            }
        },
        {
            dataIndex: 'address',
            width: 200,
            tpl: [
                '<tpl for="address">',
                    '<div class="address-box">',
                        '<div>',
                            '{name}<br />',
                            '{street}<br />',
                            '{zip} {city}',
                        '</div>',
                    '</div>',
                '</tpl>'

            ],
            cell:{
                encodeHtml: false
            }
        },
        {
            flex: 1,
            xtype: 'templatecolumn',
            cell:{
                tpl: [
                    '<tpl for="items">',
                        '<tpl if="xindex &lt; 2">',
                            '<div class="item-box">',
                                '{amount}x - {name}',
                            '</div>',
                        '</tpl>',
                        '<div class="item-overflow">',
                            '<tpl if="xindex == 2">',
                                '+{[xcount]} weitere...',
                            '</tpl>',
                        '</div>',
                    '</tpl>'
                ],
                encodeHtml: false
            }
        },
        {
            cell: {
                align: 'center',
                tools: {
                    right: {
                        handler: 'onDetailView',
                        cls: 'row-action-right'
                    }
                },
                cls: 'action-cell'
            }
        }
    ]
});