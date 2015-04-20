define(["marionette"], function(Marionette){

	var ErzaManager = new Marionette.Application();

	ErzaManager.addRegions({
		mainRegion: "#main"
	});

	ErzaManager.navigate = function(route,  options){
		options || (options = {});
		Backbone.history.navigate(route, options);
	};

	ErzaManager.getCurrentRoute = function(){
		return Backbone.history.fragment
	};

	ErzaManager.on("initialize:after", function(){
		if(Backbone.history){
			require(["apps/inicio/inicio_app","apps/construccion/construccion_app"], function () {       //para cada modulo agregar la url donde se encuentra apps/planillas/planillas_app
				Backbone.history.start();

				if(ErzaManager.getCurrentRoute() === ""){
					ErzaManager.trigger("iniciar:list");   //inicia con contratos
				}
			});
		}
	});

	return ErzaManager;
});
