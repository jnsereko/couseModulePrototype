package com.cousemoduleprototype.controller.base;

import java.util.List;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import java.util.ArrayList;
import org.springframework.security.access.annotation.Secured;
import org.springframework.beans.factory.annotation.Autowired;
import com.cousemoduleprototype.db.cousemoduleprototype_db.service.ModuleService;
import com.cousemoduleprototype.db.cousemoduleprototype_db.entity.Module;

//IMPORT RELATIONS

public class ModuleBaseController {
    
    @Autowired
	ModuleService moduleService;



//CRUD METHODS


    //CRUD - CREATE
    @Secured({ "ROLE_PRIVATE_USER" })
		@RequestMapping(value = "/module", method = RequestMethod.POST, headers = "Accept=application/json")
	public Module insert(@RequestBody Module obj) {
		Module result = moduleService.insert(obj);

	    
		
		return result;
	}

	
    //CRUD - REMOVE
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/module/{id}", method = RequestMethod.DELETE, headers = "Accept=application/json")
	public void delete(@PathVariable("id") Long id) {
		moduleService.delete(id);
	}
	

    //CRUD - FIND BY MDescription
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/module/findBymDescription/{key}", method = RequestMethod.GET, headers = "Accept=application/json")
	public List<Module> findBymDescription(@PathVariable("key") Long idmDescription) {
		List<Module> list = moduleService.findBymDescription(idmDescription);
		return list;
	}
	
    //CRUD - GET ONE
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/module/{id}", method = RequestMethod.GET, headers = "Accept=application/json")
	public Module get(@PathVariable Long id) {
		Module obj = moduleService.get(id);
		
		
		
		return obj;
	}
	
	
    //CRUD - GET LIST
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/module", method = RequestMethod.GET, headers = "Accept=application/json")
	public List<Module> getList() {
		return moduleService.getList();
	}
	
	

    //CRUD - EDIT
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/module/{id}", method = RequestMethod.POST, headers = "Accept=application/json")
	public Module update(@RequestBody Module obj, @PathVariable("id") Long id) {
		Module result = moduleService.update(obj, id);

	    
		
		return result;
	}
	


/*
 * CUSTOM SERVICES
 * 
 *	These services will be overwritten and implemented in  Custom.js
 */


	
}
