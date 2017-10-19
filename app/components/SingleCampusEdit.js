import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class SingleCampusEdit extends Component {

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
    const handleStudentDelete = this.props.handleStudentDelete;
    const handleCampusEdit = this.props.handleCampusEdit;
    const handleCampusDelete = this.props.handleCampusDelete;
    const routeHistory = this.props.history;

    return (
      <div>
        <h1>{`Edit ${campus.name} Info`}</h1>
          <form onSubmit={(ev)=>handleCampusEdit(ev, campus.id)} key={campus.id}>
            <label>
              House Name: 
              <input type='text' name='campusName' defaultValue={campus.name} />
            </label>
            <input type='submit' value='Update House Name' />
          </form>

          <br/>

          <div>
            <button onClick={()=>handleCampusDelete(campus, routeHistory, campusStudents)}>Delete Campus</button>
            <br/>
          </div>

          <div>
          <br/>
            <img src={campus.image} alt={campus.name} />
            <br/>
          </div>

          <h2>Current members of {campus.name}!</h2>
          <h5>maybe...</h5>
            {
              campusStudents.map((student)=>{
                return (
                  <div key={student.id}>
                      <Link to={`/students/${student.id}`}>{student.name}</Link>
                        <br/>
                        <div><button onClick={()=>this.props.handleStudentDelete(student)}>{`Delete ${student.name}`}</button></div>
                        <br/>
                    <br />
                  </div>
                )
              })
            }

        <h1>Create a Member</h1>
          <form onSubmit={(ev)=>handleStudentCreate(ev, campus.id)}>
            <label>
              Name:
              <input type='text' name='studentName' />
            </label>

            <label>
              Email:
              <input type='text' name='studentEmail' />
            </label>

            <input type='submit' value='Create' />
          </form>

        <br/>
            <div><Link to={`/campuses/${campus.id}`}>Done Editing</Link></div>
      </div>
    )
  }
}