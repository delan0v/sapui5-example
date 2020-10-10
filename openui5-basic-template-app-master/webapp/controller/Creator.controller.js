sap.ui.define([ "sap/ui/core/mvc/Controller" ], function(Controller) {
	"use strict";

	return Controller.extend("sap.ui.demo.basicTemplate.controller.Creator", {

		onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("creator");
		},
		onSave: function(){
			
			var oData = {
					"Indeks": 0,	
					"Name": $("#basicTemplate---creator--Name2-inner").val(),
					"Surname": $("#basicTemplate---creator--Surname2-inner").val(),
					"Age": parseInt($("#basicTemplate---creator--Age2-inner").val())
			}
			var model = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZTEST001_SRV");
				model.create("/TestSet", oData)
				var oRouter = sap.ui.core.UIComponent
				.getRouterFor(this);
				oRouter.navTo("overview");
		},
		onBack: function() {
			var oRouter = sap.ui.core.UIComponent
			.getRouterFor(this);
			oRouter.navTo("overview");
		}
	});

});
