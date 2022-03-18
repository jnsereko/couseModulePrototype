/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  TO CUSTOMIZE APIS IN ModuleApiGenerated.js PLEASE EDIT ../ModuleApi.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 
// Dependencies
import axios from "axios";
import { properties } from "../../config/properties";

class ModuleApiGenerated {

  static contextUrl = properties.endpoint + "/module";

  // CRUD METHODS

  /**
  * ModuleService.create
  *   @description CRUD ACTION create
  *
  */
  static createModule(module) {
    return axios.post(ModuleApiGenerated.contextUrl, module )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * ModuleService.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  static deleteModule(id) {
    return axios.delete(ModuleApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * ModuleService.findBymDescription
  *   @description CRUD ACTION findBymDescription
  *
  */
  static findBymDescription(id) {
    return axios.get(ModuleApiGenerated.contextUrl + "/findBymDescription/" + id )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * ModuleService.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  static getOneModule(id) {
    return axios.get(ModuleApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * ModuleService.list
  *   @description CRUD ACTION list
  *
  */
  static getModuleList() {
    return axios.get(ModuleApiGenerated.contextUrl)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * ModuleService.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  static saveModule(module) {
    return axios.post(ModuleApiGenerated.contextUrl + "/" + module._id, module )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }



    // Custom APIs
}

export default ModuleApiGenerated;