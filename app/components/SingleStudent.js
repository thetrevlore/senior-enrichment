import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class SingleStudent extends Component {

  constructor(props) {
    super(props);
    this.state = { student: {}, studentCampus: {} };
  }
  componentDidMount() {
    const studentId = this.props.match.params.studentId
    axios.get(`/api/students/${studentId}`).then(res=>res.data)
    .then(student => {
      this.setState({student})
      return student.campusId;
    })
    .then((campusId) => {
      axios.get(`/api/campuses/${campusId}`).then(res=>res.data)
      .then(studentCampus=>this.setState({studentCampus}));
    })
  }

  render() {
    const student = this.state.student;
    const campus = this.state.studentCampus;
    return (
      <div>
        <ul><h2>{student.name}</h2>
          <li><h4>{student.email}</h4></li>
        </ul>
        <h3>{`${student.name} goes to `}<Link to={`/campuses/${campus.id}`}>{`${campus.name}!`}</Link></h3>
      </div>
    )
  }
}