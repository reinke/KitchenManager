Ext.define('KitchenManager.view.detail.DetailView', {
    extend: 'Ext.panel.Panel',

    alias: 'widget.detailview',

    requires: [
        'KitchenManager.view.detail.DetailController'
    ],

    controller: 'detail',

    config: {
        rec: null
    },

    cls: 'detail-view-cls',

    scrollable: true,

    tbar: [
        {
            iconCls: 'x-fa fa-chevron-left big-icon',
            handler: 'onMainView'
        },
        '->',
        {
            iconCls:'x-fa fa-play big-icon',
            style:{
                color:'green'
            },
            handler: 'onPlay'
        }
    ],

    tpl: [
        '<tpl for="address">',
            '<div class="address-box address-detail">',
                '<div>',
                    '{name}<br />',
                    '{street}<br />',
                    '{zip} {city}',
                '</div>',
            '</div>',
        '</tpl>',
        '<div class="comment-box">',
            '<div>',
            '{comments}',
            '</div>',
        '</div>',
        '<hr />',

        '<div class="items-box">',
            '<tpl for="items">',
                '<div class="item-box detail-item">',
                    '{amount}x - {name}',
                '</div>',
                '<tpl if="specials.length &gt; 0">',
                    '<tpl for="specials">',
                        '<div class="special-box">',
                            '<div class="x-fa fa-',
                                '<tpl if="remove == true">minus minus-red',
                                '<tpl else>plus plus-green</tpl>',
                                '">',
                            '</div>',
                            '<div class="special-row">',
                                '<tpl if="remove == true">',
                                '<tpl else>',
                                    '{amount}x - ',
                                '</tpl>',
                                '{name}',
                            '</div>',
                        '</div>',
                    '</tpl>',
                    '<div class="item-separator"></div>',
                '</tpl>',
                '<tpl if="comments.length &gt; 0">',
                    '<div class="comment-box detail-comment">',
                        '<div>',
                            '{comments}',
                        '</div>',
                    '</div>',
                '</tpl>',
            '</tpl>',
        '</div>'
    ]
});

