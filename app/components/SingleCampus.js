import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import store from '../store';

export default class SingleCampus extends Component {

  constructor(props) {
    super(props);
    this.state = { campus: {} };
  }
  componentDidMount() {
    const campusId = this.props.match.params.campusId;
    axios.get(`/api/campuses/${campusId}`).then(res=>res.data)
    .then(campus=>this.setState({campus}))
  }


  render() {
    const campus = this.state.campus;
    const campusStudents = this.props.allStudents.filter((student) => student.campusId === campus.id);
    const handleStudentCreate = this.props.handleStudentCreate;
    return (
      <div>
        <h2>{campus.name}</h2>
          <img src={campus.image} alt={campus.name} />
          <h2>Current members of {campus.name}!</h2>
          <h5>maybe...</h5>
          <ul>
            {
              campusStudents.map((student)=>{
                return <li key={student.id}><Link to={`/students/${student.id}`}>{student.name}</Link></li>
              })
            }
          </ul>

        <br/>

        <Link to={`/campuses/${campus.id}/edit`}>Edit Campus Info</Link>
      </div>
    )
  }
}