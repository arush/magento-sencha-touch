Ext.define('MagentoSenchaApp.view.tablet.Main', {
    extend: 'MagentoSenchaApp.view.Main',

    requires: [
        'MagentoSenchaApp.view.ProductsList',
        'MagentoSenchaApp.view.tablet.Product'
    ],

    config: {
        useTitleForBackButtonText: true
    }
});
