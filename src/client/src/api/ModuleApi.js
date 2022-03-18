import ModuleApiGenerated from "./generated/ModuleApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class ModuleApi extends ModuleApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Module List
  static getModuleList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/modules")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default ModuleApi;