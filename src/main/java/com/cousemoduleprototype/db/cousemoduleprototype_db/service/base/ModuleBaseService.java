package com.cousemoduleprototype.db.cousemoduleprototype_db.service.base;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Service;

import com.cousemoduleprototype.db.cousemoduleprototype_db.entity.Module;
import com.cousemoduleprototype.db.cousemoduleprototype_db.service.ModuleService;

//IMPORT RELATIONS

@Service
public class ModuleBaseService {

	private static NamedParameterJdbcTemplate jdbcTemplate;
	
		@Autowired
	public void setDataSource(DataSource dataSource) {
		jdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
	}
	


    //CRUD METHODS
    
    //CRUD - CREATE
    	
	public Module insert(Module obj) {
		Long id = jdbcTemplate.queryForObject("select max(_id) from `module`", new MapSqlParameterSource(), Long.class);
		obj.set_id(id == null ? 1 : id + 1);
		String sql = "INSERT INTO `module` (`_id`, `mDescription`,`mName`) VALUES (:id,:mDescription,:mName)";
			SqlParameterSource parameters = new MapSqlParameterSource()
		    .addValue("id", obj.get_id())
			.addValue("mDescription", obj.getMDescription())
			.addValue("mName", obj.getMName());
		
		jdbcTemplate.update(sql, parameters);
		return obj;
	}
	
    	
    //CRUD - REMOVE
    
	public void delete(Long id) {
		String sql = "DELETE FROM `Module` WHERE `_id`=:id";
		SqlParameterSource parameters = new MapSqlParameterSource()
			.addValue("id", id);
		
		jdbcTemplate.update(sql, parameters);
	}

    	
    //CRUD - FIND BY MDescription
    	
	public List<Module> findBymDescription(Long idmDescription) {
		
		String sql = "select * from `Module` WHERE `mDescription` = :idmDescription";
		
	    SqlParameterSource parameters = new MapSqlParameterSource()
		.addValue("idmDescription", idmDescription);
	    
	    return jdbcTemplate.query(sql, parameters, new BeanPropertyRowMapper(Module.class));
	}
    	
    //CRUD - GET ONE
    	
	public Module get(Long id) {
	    
		String sql = "select * from `Module` where `_id` = :id";
		
	    SqlParameterSource parameters = new MapSqlParameterSource()
			.addValue("id", id);
	    
	    return (Module) jdbcTemplate.queryForObject(sql, parameters, new BeanPropertyRowMapper(Module.class));
	}


    	
        	
    //CRUD - GET LIST
    	
	public List<Module> getList() {
	    
		String sql = "select * from `Module`";
		
	    SqlParameterSource parameters = new MapSqlParameterSource();
	    return jdbcTemplate.query(sql, parameters, new BeanPropertyRowMapper(Module.class));
	    
	    
	}

    	
    //CRUD - EDIT
    	
	public Module update(Module obj, Long id) {

		String sql = "UPDATE `Module` SET `mDescription` = :mDescription,`mName` = :mName  WHERE `_id`=:id";
		SqlParameterSource parameters = new MapSqlParameterSource()
			.addValue("id", id)
			.addValue("mDescription", obj.getMDescription())
			.addValue("mName", obj.getMName());
		jdbcTemplate.update(sql, parameters);
	    return obj;
	}
	
    	
    
    


    
    /*
     * CUSTOM SERVICES
     * 
     *	These services will be overwritten and implemented in ModuleService.java
     */
    

}
