sap.ui
		.define(
				[ "sap/ui/core/mvc/Controller" ],
				function(Controller) {
					"use strict";

					return Controller
							.extend(
									"sap.ui.demo.basicTemplate.controller.Table",
									{
										onEdit : function(oEvent) {

											this.mode = 'edit';
											var oTable = this.byId("ZTABLE5");
											var aContexts = this
											var selected = oTable.getSource().getBindingContext()
											if (selected == -1) {
												alert("Select a row");
											}
										},
										onPress : function(oEvent) {
											var oItem = oEvent.getSource();
											var oRouter = sap.ui.core.UIComponent
													.getRouterFor(this);
											oRouter.navTo("detail", {
												clientPath : oItem
														.getBindingContext(
																"client")
														.getPath().substr(1)
											});
										},
										onAdd : function(oEvent) {
											var oRouter = sap.ui.core.UIComponent
													.getRouterFor(this);
											oRouter.navTo("creator");
										}
									});

				});
