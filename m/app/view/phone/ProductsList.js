Ext.define('MagentoSenchaApp.view.phone.ProductsList', {
    extend: 'MagentoSenchaApp.view.ProductsList',
    requires: ['MagentoSenchaApp.view.phone.Products'],

    config: {
        count: 1,

        innerItemConfig: {
            xclass: 'MagentoSenchaApp.view.phone.Products'
        },

        directionLock: true
    }
});
