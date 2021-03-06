// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import DialogDelete from "../components/DialogDelete";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import Button from "@material-ui/core/Button";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";

// Table
import EnhancedTable from "../components/EnhancedTable";

// Custom Actions


// START IMPORT ACTIONS
import CourseActions from "../redux/actions/CourseActions";

// END IMPORT ACTIONS

/** APIs

* actionsCourse.list
*	@description CRUD ACTION list
*
* actionsCourse.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsCourse.findBycName
*	@description CRUD ACTION findBycName
*
* actionsCourse.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsCourse.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsCourse.create
*	@description CRUD ACTION create
*
* actionsCourse.list
*	@description CRUD ACTION list
*
* actionsCourse.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*

**/


class CourseList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsCourse.loadCourseList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsCourse.deleteCourse(this.state.idDelete).then(data => {
      this.props.actionsCourse.loadCourseList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "cName",
        type: "string",
        label: "CName"
      },
    ];
    const link = "/courses/";

    return (
      <div>
        <h1>Course List</h1>

        <EnhancedTable
          data={this.props.list}
          columns={columns}
          link={link}
          onDelete={this.delete.bind(this)}
        />

        <DialogDelete
          open={this.state.openDialogDelete}
          onClose={this.closeDialogDelete.bind(this)}
          onConfirm={this.confirmDialogDelete.bind(this)}
        />

        {/*
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">CName</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/courses/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.cName }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/courses/new">
            <Button variant="contained" color="primary">
              Add
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsCourse: bindActionCreators(CourseActions, dispatch),
  };
};

// Validate types
CourseList.propTypes = { 
  actionsCourse: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.CourseListReducer.listCourse
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseList);
