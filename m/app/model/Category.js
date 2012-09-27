Ext.define('MagentoSenchaApp.model.Category', {
    extend: 'Ext.data.Model',
    requires: ['MagentoSenchaApp.model.Product'],

    config: {
        fields: [
            'urlId',
            'label'
        ],

        proxy: {
            type: 'ajax',
            url: 'categories.json'
        },

        associations: [
            {
                type: 'hasMany',
                model: 'MagentoSenchaApp.model.Product',
                name: 'products',
                store: {
                    pageSize: 100,
                    clearOnPageLoad: false
                }
            }
        ]
    },


    toUrl: function() {
        return this.get('urlId');
    }
});


// Ext.define('MagentoSenchaApp.model.Category', {
//     extend: 'Ext.data.Model',
//     requires: ['MagentoSenchaApp.model.Product', 'MagentoSenchaApp.proxy.ShopSense'],

//     config: {
//         fields: [
//             'id',
//             'name',
//             'parentId'
//         ],

//         proxy: {
//             type: 'shopsense'
//         },

//         associations: [
//             {
//                 type: 'hasMany',
//                 model: 'MagentoSenchaApp.model.Category',
//                 name: 'categories',
//                 foreignKey: 'parentId',
//                 autoLoad: true
//             },
//             {
//                 type: 'hasMany',
//                 model: 'MagentoSenchaApp.model.Product',
//                 name: 'products',
//                 store: {
//                     pageSize: 100,
//                     clearOnPageLoad: false
//                 }
//             },
//             {
//                 type: 'belongsTo',
//                 model: 'MagentoSenchaApp.model.Category',
//                 name: 'category',
//                 foreignKey: 'parentId'
//             }
//         ]
//     },

//     toUrl: function() {
//         var parent = this,
//             url = parent.get('id'),
//             id;

//         console.log(parent.get('id'), parent.getCategory(), parent.getCategory().getCategory());

//         while ((parent = parent.getCategory())) {
//             id = parent.get('id');
//             if (id !== "clothes-shoes-and-jewelry") {
//                 url = parent.get('id') + '/' + url;
//             }
//         }

//         return url;
//     }
// });
