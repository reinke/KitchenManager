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
                        handler: 'onDetailView',
                        cls: 'row-action-right'
                    }
                }
            }
        }
    ]
});