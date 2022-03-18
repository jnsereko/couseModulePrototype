package com.cousemoduleprototype.db.cousemoduleprototype_db.entity.base;

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
 *  FOR CUSTOMIZE ModuleBase PLEASE EDIT ../Module.java
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER CODE GENERATION --
 * 
 */
 

/**
 * This is the model of Module object
 * 
 */
 
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;
import java.math.BigDecimal;


import org.springframework.jdbc.core.RowMapper;
import com.cousemoduleprototype.db.cousemoduleprototype_db.entity.Module;

public class ModuleBase implements RowMapper<Module>{
	
	private Long _id;
	
	// Attributes
    private String mDescription;
    private String mName;
	
	
	
	@Override
	public Module mapRow(ResultSet rs, int rowNum) throws SQLException {
		
		Module obj = new Module();
		try {
			obj.set_id(rs.getLong("id"));
			obj.setMDescription(rs.getString("mDescription"));
			obj.setMName(rs.getString("mName"));
			
        	
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		return obj;
	}


	public Long get_id() {
		return _id;
	}

	public void set_id(Long _id) {
		this._id = _id;
	}
	
	public String getMDescription() {
		return mDescription;
	}


	public void setMDescription(String mDescription) {
		this.mDescription = mDescription;
	}
	public String getMName() {
		return mName;
	}


	public void setMName(String mName) {
		this.mName = mName;
	}
	
    
    
    
    
}