Ext.define('KitchenManager.view.main.OrderGridAll.',{
    extend:'Ext.grid.Grid',
    alias:'widget.gridAll',

    store: {
        type: 'gridstore'
    },

    itemConfig: {
        viewModel: {
            formulas: {
                cellCls: {
                    get: function(get) {
                        var stat = get('record.status');
                        var cls = {
                            'neu': 'cell-bg-red',
                            'wird zubereitet': 'cell-bg-blue'
                        }
                        return cls[stat];
                    }
                }
            }
        }
    },

    hideHeaders: true,
    reference: 'gridall',

    columns:[
        {
            dataIndex: 'id',
            text:'Bestell Nr',
            width: 50,
            cell: {
                bind: {
                    value: '{record.id}',
                    cls: '{cellCls}'
                },
                style: {
                    fontWeight: 'bold',
                    fontSize: '16px',
                    color: 'white'
                }
            }
        },{
            dataIndex: 'created',
            type: 'date',
            text: 'Eingegangen',
            format: 'd.m.Y H:i',
            width: 140,
            cell: {
                renderer: function(val, rec){
                    var date = Ext.Date.parse(val, 'Y-m-d H:i');
                    return Ext.Date.format(date, this.format);
                }
            }
        },{
            dataIndex: 'address',
            text: 'Adresse',
            width: 150,
            cell: {
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
                encodeHtml: false
            }
        },{
            dataIndex: 'items',
            header: 'Bestellung',
            flex:1,
            cell: {
                tpl: [
                    '<tpl for="items">',
                    '<tpl if="xindex &lt; 2">',
                    '<div class="item-box">',
                    '{amount}x - {name}',
                    '</div>',
                    '</tpl>',
                    '<tpl if="xindex == 2">',
                    '...',
                    '</tpl>',
                    '</tpl>',
                ],
                encodeHtml: false
            }
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

    ],

    items: [
        {
            xtype: 'toolbar',
            docked: 'top',
            items: {
                xtype: 'searchfield',
                listeners: {
                    keypress: 'onSearch'
                }
            }
        }
    ]
})