package com.cousemoduleprototype.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.context.annotation.PropertySource;

import com.cousemoduleprototype.controller.base.CourseBaseController;

@RestController
@PropertySource("classpath:${configfile.path}/couseModulePrototype.properties")
@RequestMapping(value="${endpoint.api}", headers = "Accept=application/json")
public class CourseController extends CourseBaseController {

	//OVERRIDE HERE YOUR CUSTOM CONTROLLER

}
