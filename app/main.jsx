'use strict';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import AllCampuses from './components/AllCampuses';
import AllStudents from './components/AllStudents';
import SingleCampus from './components/SingleCampus';
import SingleStudent from './components/SingleStudent';
import SingleCampusEdit from './components/SingleCampusEdit';
import SingleStudentEdit from './components/SingleStudentEdit';

import { fetchCampuses, removeCampus, addCampus, editCampusInfo } from './reducers/campusReducer';
import { fetchStudents, removeStudent, addStudent, editStudentInfo } from './reducers/studentReducer';
import store from './store';

export default class Main extends React.Component {

  constructor(){
    super();
    this.state = store.getState();
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(()=>this.setState(store.getState()));
    store.dispatch(fetchCampuses());
    store.dispatch(fetchStudents());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleStudentDelete(student, routeHistory, campusId) {
    store.dispatch(removeStudent(student));
    routeHistory.push(`/campuses/${campusId}`);
  }

  handleStudentDeletefromCampus(student) {
    store.dispatch(removeStudent(student));
  }

  handleStudentCreate(ev, campusId) {
    const student = { name: ev.target.studentName.value, email: ev.target.studentEmail.value, campusId };
    store.dispatch(addStudent(student));
  }

  handleStudentEdit(ev, studentId) {
    const name = ev.target.studentName.value;
    const email = ev.target.studentEmail.value;
    const id = studentId;
    const campusId = ev.target.studentCampus.value;
    const studentPropsToEdit = { name, email, id, campusId };
    store.dispatch(editStudentInfo(studentPropsToEdit));
  }

  handleCampusDelete(campus, routeHistory, campusStudents) {
    campusStudents.forEach((student) => store.dispatch(removeStudent(student)));
    store.dispatch(removeCampus(campus));
    routeHistory.push('/campuses');
  }

  handleCampusCreate(ev) {
    store.dispatch(addCampus(ev.target.campusName.value));
  }

  handleCampusEdit(ev, campusId) {
    const campusPropsToEdit = { name: ev.target.campusName.value, id: campusId }
    store.dispatch(editCampusInfo(campusPropsToEdit));
  }

  render() {
    const students = this.state.students;
    const campuses = this.state.campuses;
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/home" component={Home}/>
          <Route exact path="/campuses" render={()=><AllCampuses campuses={campuses} handleCampusDelete={this.handleCampusDelete} handleCampusCreate={this.handleCampusCreate}/>}/>
          <Route exact path="/campuses/:campusId" render={(props)=><SingleCampus {...props} allStudents={students} />}/>
          <Route exact path="/campuses/:campusId/edit" render={(props)=><SingleCampusEdit {...props} allStudents={students} handleStudentCreate={this.handleStudentCreate} handleStudentDelete={this.handleStudentDeletefromCampus} handleCampusEdit={this.handleCampusEdit} handleCampusDelete={this.handleCampusDelete}/>}/>
          <Route exact path="/students" render={()=> <AllStudents students={students} campuses={campuses} />}/>
          <Route exact path="/students/:studentId" component={SingleStudent}/>
          <Route exact path="/students/:studentId/edit" render={(props) => <SingleStudentEdit {...props} handleStudentEdit={this.handleStudentEdit} handleStudentDelete={this.handleStudentDelete} campuses={campuses} />}/>
        </Switch>
      </div>
    )
  }
}

