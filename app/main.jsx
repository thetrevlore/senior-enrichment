'use strict';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import AllCampuses from './components/AllCampuses';
import AllStudents from './components/AllStudents';
import SingleCampus from './components/SingleCampus';
import SingleStudent from './components/SingleStudent';

import { fetchCampuses } from './reducers/campusReducer';
import { fetchStudents, removeStudent } from './reducers/studentReducer';
import store from './store';

export default class Main extends React.Component {

  constructor(){
    super();
    this.state = store.getState();
  }

  componentDidMount() {
    this.stateUnsubscribe = store.subscribe(()=>this.setState(store.getState()));
    store.dispatch(fetchCampuses());
    store.dispatch(fetchStudents());
  }

  componentWillUnmount() {
    this.stateUnsubscribe();
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
          <Route exact path="/campuses" render={()=><AllCampuses campuses={campuses}/>}/>
          <Route path="/campuses/:campusId" render={(props)=><SingleCampus {...props} allStudents={students} />}/>
          <Route exact path="/students" render={()=> <AllStudents students={students} campuses={campuses} />}/>
          <Route path="/students/:studentId" component={SingleStudent}/>
        </Switch>
      </div>
    )
  }
}

