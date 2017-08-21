Ext.define('KitchenManager.view.main.Main', {
    extend: 'Ext.panel.Panel',

    requires: [
        'KitchenManager.view.main.OrderGrid',
        'KitchenManager.view.main.MainController',
        'Ext.SegmentedButton',
        'KitchenManager.view.detail.DetailView'
    ],

    controller: 'main',

    cls: 'kitchen-main-view',

    layout: {
        type: 'card'
    },

    items: [
        {
            xtype: 'panel',
            reference: 'mainCardPanel',
            layout: {
                type: 'card'
            },
            items: [
                {
                    xtype: 'ordergrid'
                },
                {
                    xtype: 'gridAll'
                }
            ],

            tbar: {
                ui: 'transparent',
                padding: '5 8',
                layout: {
                    type: 'hbox',
                    align: 'stretch',
                    pack: 'center'
                },
                items: [
                    {width:200},
                    {flex:1},
                    {
                        xtype: 'segmentedbutton',
                        width: 300,
                        value: 0,
                        ui: 'action',
                        shadow: true,
                        defaults: {
                            flex: 1,
                            ui: 'action'
                        },
                        items: [
                            {
                                text: 'Neue',
                                value: 0

                            }, {
                                text: 'Alle',
                                value: 1
                            }
                        ],
                        listeners: {
                            change: 'onChange'
                        }
                    },
                    {flex:1},
                    {
                        xtype: 'searchfield',
                        width: 200,
                        listeners: {
                            keypress: 'onSearch'
                        },
                        shadow: false
                    }
                ]
            }
        },
        {
            xtype: 'detailview',
            reference: 'detailCardPanel'
        }
    ]
});
