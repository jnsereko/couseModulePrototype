// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Utils from "../utils/utils";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// Custom Actions


// START IMPORT ACTIONS
import ModuleActions from "../redux/actions/ModuleActions";

// END IMPORT ACTIONS

/** APIs

* actionsModule.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsModule.list
*	@description CRUD ACTION list
*
* actionsModule.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsModule.create
*	@description CRUD ACTION create
*
* actionsModule.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*

**/

class ModuleEdit extends Component {
  // Init module
  constructor(props) {
    super(props);
    this.state = {
      module: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsModule.loadModule(this.props.match.params.id);
    }
    
  }

  // Insert props module in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      module: props.module
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.module._id) {
      this.props.actionsModule.saveModule(this.state.module).then(data => {
        this.props.history.push("/");
      });
    } else {
      this.props.actionsModule.createModule(this.state.module).then(data => {
        this.props.history.push("/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Module Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="mDescription"
            label="MDescription"
            value={this.state.module.mDescription || ""}
            onChange={Utils.handleChange.bind(this, "module")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.module.mDescription && this.state.module.mDescription === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="mName"
            label="MName"
            value={this.state.module.mName || ""}
            onChange={Utils.handleChange.bind(this, "module")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.module.mName && this.state.module.mName === ""
              ? { error: true }
              : {})}
          />
          

          {/* Footer */}
          <div className="footer-card">
            <Link to="/">Back to list</Link>

            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsModule: bindActionCreators(ModuleActions, dispatch),
  };
};

// Validate types
ModuleEdit.propTypes = { 
  actionsModule: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    module: state.ModuleEditReducer.module
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModuleEdit);
