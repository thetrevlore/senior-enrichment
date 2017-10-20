import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AllCampuses extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const campuses = this.props.campuses;
    const handleCampusCreate = this.props.handleCampusCreate;
    
    return (
      <div>
        <h1>AllCampuses</h1>
        <tbody>
          {
            campuses.map((campus)=>{
              return (
                <tr key={campus.id}>
                  <th><Link to={`/campuses/${campus.id}`}><h2>{campus.name}</h2></Link></th>
                  <th><Link to={`/campuses/${campus.id}`}><img src={campus.image} alt={campus.name} /></Link></th>
                </tr>
              )
            })
          }
          </tbody>
          <h1>Create a House</h1>
          <form onSubmit={(ev)=>handleCampusCreate(ev)}>
            <label>
              Name:
              <input type='text' name='campusName'/>
            </label>
            <input type='submit' value='Create'/>
          </form>
          <br/>
      </div>
    )
  }
}