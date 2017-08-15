sap.ui.define([
    "sap/ui/core/Control",
    "sap/m/Button"
], function(Control, Button) {
	"use strict";
	return Control.extend("zbc45CControl.controls.CustomTileItem", {
		
		metadata : {
			
			properties : {
				title 			: { type : "string" },
				width 			: { type : "sap.ui.core.CSSSize", defaultValue : "200px" },
				height			: { type : "sap.ui.core.CSSSize", defaultValue : "200px" },
				backgroundColor : { type : "string" }
	
			},
			
			aggregations : {
				button : { type : "sap.m.Button", multiple : false, visiblity : "hidden" }
			
			},
			
			events : {
				press : { enablePreventDefault : true },
				
			}
			
		},
		
		init : function() {
			
            this.setAggregation("button", new Button({ press : this._onPress.bind(this) }));
            
		},
		
		_onPress : function(oEvent) {
			
            this.fireEvent("press", { });			
			
		},
		
		_setSplitterContent : function(oRenderer) {
			
			oRenderer.oRm.write("<div");
			oRenderer.oRm.addStyle("width",  oRenderer.width);
			oRenderer.oRm.addStyle("height", oRenderer.height);
			
			if (oRenderer.top) {
				oRenderer.oRm.addStyle("top",    oRenderer.top);
				oRenderer.oRm.addStyle("float",  oRenderer.float);	
				
			}
		
			oRenderer.oRm.writeStyles();
			oRenderer.oRm.write(">");						
			oRenderer.oRm.write("</div>");
			
		},
				
		renderer : function(oRm, oControl) {	
			
			oRm.write("<li");
			
			// = Render the control information which handles your sId
			// = We have to do this for our control to be properly tracked by ui5
			oRm.writeControlData(oControl);
			
			// = Render CSS classes list item	
			oRm.addClass("custom-container");			
			oRm.writeClasses();		
			
			// = Render styles properties tile item
			oRm.addStyle("width", 			 oControl.getWidth());
			oRm.addStyle("height", 			 oControl.getHeight());
			oRm.addStyle("background-color", oControl.getBackgroundColor());
			oRm.writeStyles();		
			
			oRm.write(">");		
								
			oRm.write("<a");
			oRm.addStyle("width",  oControl.getWidth());
			oRm.addStyle("height", oControl.getHeight());		
			oRm.writeStyles();
			
			oRm.writeControlData(oControl.getAggregation("button"));
			oRm.write(">");				
			
			oControl._setSplitterContent({ oRm : oRm, oControl : oControl, width : "100%", height : "50%" });			
			oControl._setSplitterContent({ oRm : oRm, oControl : oControl, width : "50%",  height : "50%", top : "50%", float : "left" });
			oControl._setSplitterContent({ oRm : oRm, oControl : oControl, width : "50%",  height : "50%", top : "50%", float : "right" });	
						
			oRm.write("</a>");		
			
			oRm.write("</li>");
			
		}	
		
	});
	
});