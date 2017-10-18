import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import store from '../store';


export default function AllCampuses(props) {
  const campuses = props.campuses;
  
  return (
    <div>
      <h1>AllCampuses</h1>
      <ul>
      {
        campuses.map((campus)=>{
          return <li key={campus.id}><Link to={`/campuses/${campus.id}`}>{campus.name}</Link></li>
        })
      }
      </ul>
    </div>
  )
}

// export default class AllCampuses extends Component {

//   constructor(props) {
//     super(props);
//     this.state = store.getState();
//   }

//   componentDidMount() {
//     this.unsubscribe = store.subscribe(()=>this.setState(store.getState()));
//   }

//   componentWillUnmount() {
//     this.unsubscribe();
//   }

//   render() {
//     const campuses = this.state.campuses;
//     return (
//       <div>
//         <h1>AllCampuses</h1>
//         <ul>
//         {
//           campuses.map((campus)=>{
//             return <li key={campus.id}><Link to={`/campuses/${campus.id}`}>{campus.name}</Link></li>
//           })
//         }
//         </ul>
//       </div>
//     )
//   }
// }