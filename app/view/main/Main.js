/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 *
 * TODO - Replace the content of this view to suit the needs of your application.
 */

Ext.define('KitchenManager.view.main.Main', {
    extend: 'Ext.tab.Panel',

    requires: [
        'KitchenManager.view.main.OrderGrid',
        'KitchenManager.view.main.MainController'
    ],

    controller: 'main',

    bbar: [
        {
            xtype: 'button',
            text: 'test',
            iconCls: 'x-fa fa-right'
        }
    ],

    items: [
        {
            title: '<span style="font-weight: bold; color: #d32f2f">Neu</span>',
            layout: 'fit',
            items: {
                xtype: 'ordergrid'
            }
        }, {
            title: 'Alle',
            xtype: 'panel',
            html: 'This is tab 2 content.'
        }
    ]
});
