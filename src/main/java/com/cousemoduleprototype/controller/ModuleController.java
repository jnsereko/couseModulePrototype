package com.cousemoduleprototype.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.context.annotation.PropertySource;

import com.cousemoduleprototype.controller.base.ModuleBaseController;

@RestController
@PropertySource("classpath:${configfile.path}/couseModulePrototype.properties")
@RequestMapping(value="${endpoint.api}", headers = "Accept=application/json")
public class ModuleController extends ModuleBaseController {

	//OVERRIDE HERE YOUR CUSTOM CONTROLLER

}
