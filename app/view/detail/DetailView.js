Ext.define('KitchenManager.view.detail.DetailView', {
    extend: 'Ext.panel.Panel',

    alias: 'widget.detailview',

    requires: [
        'KitchenManager.view.detail.DetailController'
    ],

    controller: 'detail',

    config: {
        record: null
    },

    tbar: [
        {
            iconCls: 'x-fa fa-chevron-left big-icon',
            handler: 'onMainView',
            //flex:1
        },
        '->',
        {
            iconCls:'x-fa fa-play big-icon',
            style:{
                color:'green'
            }
        }
    ]
});

