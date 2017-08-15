sap.ui.define([
    "sap/ui/core/Control"              
], function(Control) {
	"use strict";
	return Control.extend("zbc45CControl.controls.CustomTile", {
		
		metadata : {
					
			aggregations : {				
				items : {
					type 	 	 : "zbc45CControl.controls.CustomTileItem",
					multiple 	 : true,
					singularName : "item"
				}
			
			},
			
		},
		
		renderer : function(oRm, oControl) {
		
			oRm.write("<div");

			// = Render the control information which handles your sId
			// = We have to do this for our control to be properly tracked by ui5
			oRm.writeControlData(oControl);
						
			// = Render CSS classes			
			oRm.addClass("custom-container");
			oRm.writeClasses();
			
			oRm.write(">");					
			oRm.write("<ul>");
			
			$.each(oControl.getItems(), function(sId, oValue) {
				oRm.renderControl(oValue);
				
			});
						
			oRm.write("</ul>");			
			oRm.write("</div>");			
			
		}
		
	});
	
});