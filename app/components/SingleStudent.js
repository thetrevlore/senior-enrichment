import React, { Component } from 'react';
// import store from '../store';
import axios from 'axios';

export default class SingleStudent extends Component {

  constructor(props) {
    super(props);
    this.state = { student: {} };
  }
  componentDidMount() {
    const studentId = this.props.match.params.studentId
    axios.get(`/api/students/${studentId}`).then(res=>res.data)
    .then(student=>this.setState({student}))
  }

  render() {
    const student = this.state.student
    return (
      <ul><h2>{student.name}</h2>
        <li><h3>{student.email}</h3></li>
      </ul>
    )
  }
}