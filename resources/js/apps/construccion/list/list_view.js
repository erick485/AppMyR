define(["app", "hbs!apps/construccion/list/templates/layout","bootstrap"], function (ErzaManager, layoutTpl) {
    ErzaManager.module('ConstruccionApp.List.View', function (View, ErzaManager, Backbone, Marionette, $, _) {

        View.Layout = Marionette.Layout.extend({
            template: layoutTpl
        });
    });
    return ErzaManager.ConstruccionApp.List.View;
});