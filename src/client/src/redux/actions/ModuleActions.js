import actionsFunction from "./generated/ModuleActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import ModuleApi from "../../api/ModuleApi";
 
 actionsFunction.loadModuleList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return ModuleApi
     .getModuleList()
     .then(list => {
       dispatch(actionsFunction.loadModuleSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
