Ext.define('MagentoSenchaApp.profile.Tablet', {
    extend: 'Ext.app.Profile',

    config: {
        name: 'tablet',
        namespace: 'tablet',
        controllers: ['Category'],
        views: ['Main']
    },

    isActive: function() {
        return !Ext.os.is.Phone;
    },

    launch: function() {
        Ext.create('MagentoSenchaApp.view.tablet.Main');
    }
});
