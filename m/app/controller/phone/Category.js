Ext.define('MagentoSenchaApp.controller.phone.Category', {
    extend: 'MagentoSenchaApp.controller.Category',

    config: {

    },

    init: function() {
        this.callParent();

        this.productsView = Ext.create('MagentoSenchaApp.view.phone.ProductsList');
        this.productView = Ext.create('MagentoSenchaApp.view.tablet.Product');
    }
});
