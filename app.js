/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'KitchenManager.Application',

    name: 'KitchenManager',

    requires: [
        // This will automatically load all classes in the KitchenManager namespace
        // so that application classes do not need to require each other.
        'KitchenManager.*'
    ],

    // The name of the initial view to create.
    mainView: 'KitchenManager.view.main.Main'
});
