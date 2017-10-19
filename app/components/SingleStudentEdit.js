import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class SingleStudentEdit extends Component {

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
    const studentCampus = this.state.studentCampus;
    const handleStudentEdit = this.props.handleStudentEdit;
    const handleStudentDelete = this.props.handleStudentDelete;
    const routeHistory = this.props.history;
    const allCampuses = this.props.campuses;

    return (
      <div>

        <h2>{`Edit ${student.name}'s Info`}</h2>
        <form onSubmit={(ev)=>handleStudentEdit(ev, student.id)} key={student.id}>
          
          <label>
            Member Name: 
            <input type='text' name='studentName' defaultValue={student.name} />
          </label>

          <label>
            Member Email: 
            <input type='text' name='studentEmail' defaultValue={student.email} />
          </label>

          <label>
            Member House: 
            <select name='studentCampus'>
              {
                allCampuses.map((campus)=>{
                  return studentCampus.id === campus.id
                  ? <option selected value={campus.id} key={campus.id}>{campus.name}</option>
                  : <option value={campus.id} key={campus.id}>{campus.name}</option>
                })
              }
            </select>
          </label>

          <input type='submit' value='Update Member' />
        </form>

        <br/>
        
        <div>
          <button onClick={()=>handleStudentDelete(student, routeHistory, student.campusId)}>Delete Member</button>
          <br/>
        </div>
        
        <h3>{`${student.name} is a member of `}<Link to={`/campuses/${studentCampus.id}`}>{`${studentCampus.name}`}</Link></h3>
        <Link to={`/campuses/${studentCampus.id}`}><img src={studentCampus.image} alt={studentCampus.name} /></Link>

        <Link to={`/students/${student.id}`}>Done Editing Member Info</Link>
      </div>
    )
  }
}