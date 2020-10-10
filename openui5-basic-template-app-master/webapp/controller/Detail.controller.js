sap.ui.define([ "sap/ui/core/mvc/Controller" ], function(Controller) {
	"use strict";

	return Controller.extend("sap.ui.demo.basicTemplate.controller.Detail", {

		onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);
		},
		_onObjectMatched: function (oEvent) {
			this.getView().bindElement({
				path: "/" + oEvent.getParameter("arguments").clientPath,
				model: "client"});	
		},
		onSave: function(){
			
			var oData = {
					"Indeks": parseInt($("#basicTemplate---detail--Index-inner").val()),
					"Name": $("#basicTemplate---detail--Name-inner").val(),
					"Surname": $("#basicTemplate---detail--Surname-inner").val(),
					"Age": parseInt($("#basicTemplate---detail--Age-inner").val())
			}
			var model = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZTEST001_SRV");
				var id = $("#basicTemplate---detail--Index-inner").val();
				model.update("/TestSet("+ id +")", oData)
				var oRouter = sap.ui.core.UIComponent
				.getRouterFor(this);
				oRouter.navTo("overview");	
		},
		onBack: function() {
			var oRouter = sap.ui.core.UIComponent
			.getRouterFor(this);
			oRouter.navTo("overview");	
		},
		onDelete: function() {
			
			var model = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZTEST001_SRV");
			var id = parseInt($("#basicTemplate---detail--Index-inner").val());
			model.remove("/TestSet("+ id +")")
			var oRouter = sap.ui.core.UIComponent
			.getRouterFor(this);
			oRouter.navTo("overview");
		}
	});

});
