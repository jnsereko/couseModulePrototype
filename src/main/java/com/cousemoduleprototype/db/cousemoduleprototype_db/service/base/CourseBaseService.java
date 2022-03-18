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

import com.cousemoduleprototype.db.cousemoduleprototype_db.entity.Course;
import com.cousemoduleprototype.db.cousemoduleprototype_db.service.CourseService;

//IMPORT RELATIONS

@Service
public class CourseBaseService {

	private static NamedParameterJdbcTemplate jdbcTemplate;
	
		@Autowired
	public void setDataSource(DataSource dataSource) {
		jdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
	}
	


    //CRUD METHODS
    
    //CRUD - CREATE
    	
	public Course insert(Course obj) {
		Long id = jdbcTemplate.queryForObject("select max(_id) from `course`", new MapSqlParameterSource(), Long.class);
		obj.set_id(id == null ? 1 : id + 1);
		String sql = "INSERT INTO `course` (`_id`, `cName`) VALUES (:id,:cName)";
			SqlParameterSource parameters = new MapSqlParameterSource()
		    .addValue("id", obj.get_id())
			.addValue("cName", obj.getCName());
		
		jdbcTemplate.update(sql, parameters);
		return obj;
	}
	
    	
    //CRUD - REMOVE
    
	public void delete(Long id) {
		String sql = "DELETE FROM `Course` WHERE `_id`=:id";
		SqlParameterSource parameters = new MapSqlParameterSource()
			.addValue("id", id);
		
		jdbcTemplate.update(sql, parameters);
	}

    	
    //CRUD - FIND BY CName
    	
	public List<Course> findBycName(Long idcName) {
		
		String sql = "select * from `Course` WHERE `cName` = :idcName";
		
	    SqlParameterSource parameters = new MapSqlParameterSource()
		.addValue("idcName", idcName);
	    
	    return jdbcTemplate.query(sql, parameters, new BeanPropertyRowMapper(Course.class));
	}
    	
    //CRUD - GET ONE
    	
	public Course get(Long id) {
	    
		String sql = "select * from `Course` where `_id` = :id";
		
	    SqlParameterSource parameters = new MapSqlParameterSource()
			.addValue("id", id);
	    
	    return (Course) jdbcTemplate.queryForObject(sql, parameters, new BeanPropertyRowMapper(Course.class));
	}


    	
        	
    //CRUD - GET LIST
    	
	public List<Course> getList() {
	    
		String sql = "select * from `Course`";
		
	    SqlParameterSource parameters = new MapSqlParameterSource();
	    return jdbcTemplate.query(sql, parameters, new BeanPropertyRowMapper(Course.class));
	    
	    
	}

    	
    //CRUD - EDIT
    	
	public Course update(Course obj, Long id) {

		String sql = "UPDATE `Course` SET `cName` = :cName  WHERE `_id`=:id";
		SqlParameterSource parameters = new MapSqlParameterSource()
			.addValue("id", id)
			.addValue("cName", obj.getCName());
		jdbcTemplate.update(sql, parameters);
	    return obj;
	}
	
    	
    
    


    
    /*
     * CUSTOM SERVICES
     * 
     *	These services will be overwritten and implemented in CourseService.java
     */
    

}
