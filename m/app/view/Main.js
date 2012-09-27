Ext.define('MagentoSenchaApp.view.Main', {
    extend: 'Ext.navigation.View',
    xtype: 'main',

    requires: [
        'MagentoSenchaApp.view.Categories'
    ],

    config: {
        fullscreen: true,
        autoDestroy: false,

        navigationBar: {
            backButton: {
                iconCls: 'back'
            }
        }
    },

    pop: function() {
        this.fireEvent('beforepop', this);

        this.callParent(arguments);
    }
});
