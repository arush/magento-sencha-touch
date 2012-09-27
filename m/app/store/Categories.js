Ext.define('MagentoSenchaApp.store.Categories', {
    extend: 'Ext.data.TreeStore',
    requires: ['MagentoSenchaApp.model.Category'],

    config :{
        model: 'MagentoSenchaApp.model.Category',
        autoLoad: true,
        root: {
            expanded: true
        }
    }
});
