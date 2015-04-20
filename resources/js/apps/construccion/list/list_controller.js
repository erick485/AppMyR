define(["app", "apps/construccion/list/list_view"], function(ErzaManager, View){
    ErzaManager.module('ConstruccionApp.List',function(List, ErzaManager,Backbone, Marionette, $, _){
        List.Controller = {
            listModulos: function(){
                var ConstruccionListLayout = new View.Layout();

                ErzaManager.mainRegion.show(ConstruccionListLayout);
            }
        }
    });

    return ErzaManager.ConstruccionApp.List.Controller;
});