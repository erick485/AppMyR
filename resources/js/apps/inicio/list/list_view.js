define(["app", "hbs!apps/inicio/list/templates/submodulos","bootstrap","aplication","landing"], function (ErzaManager, layoutTpl) {
    ErzaManager.module('InicioApp.List.View', function (View, ErzaManager, Backbone, Marionette, $, _,aplication) {

        View.Layout = Marionette.Layout.extend({
            template: layoutTpl
        });
    });
    return ErzaManager.InicioApp.List.View;
});