Ext.define('MagentoSenchaApp.controller.tablet.Category', {
    extend: 'MagentoSenchaApp.controller.Category',

    config: {
        refs: {
            productView: {
                autoCreate: true,
                xtype: 'product',
                selector: 'product'
            }
        }
    },

    init: function() {
        this.callParent();

        this.productsView = Ext.create('MagentoSenchaApp.view.ProductsList');
        this.productView = Ext.create('MagentoSenchaApp.view.tablet.Product');
    },

    /**
     * @inherit
     */
    getProductsView: function() {
        return this.productsView;
    },

    /**
     * @inherit
     */
    getProductView: function() {
        return this.productView;
    },

    /**
     * @inherit
     */
    onProductTap: function(view, record) {
        var productView = this.getProductView();

        productView.setData(record.data);

        if (!productView.getParent()) {
            Ext.Viewport.add(productView);
        }

        productView.show();
    }
});
