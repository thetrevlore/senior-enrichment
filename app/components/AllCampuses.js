import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import store from '../store';


// export default function AllCampuses(props) {
//   const campuses = props.campuses;
//   const handleCampusDelete = props.handleCampusDelete;
  
//   return (
//     <div>
//       <h1>AllCampuses</h1>
//       <ul>
//       <tbody>
//         {
//           campuses.map((campus)=>{
//             return (
//               <tr key={campus.id}>
//                 <th><Link to={`/campuses/${campus.id}`}>{campus.name}</Link></th>
//                 <th><button onClick={()=>handleCampusDelete(campus)}>Delete Campus</button></th>
//               </tr>
//             )
//           })
//         }
//         </tbody>
//       </ul>
//     </div>
//   )
// }

export default class AllCampuses extends Component {

  constructor(props) {
    super(props);
    // this.state = store.getState();
  }

  // componentDidMount() {
  //   this.unsubscribe = store.subscribe(()=>this.setState(store.getState()));
  // }

  // componentWillUnmount() {
  //   this.unsubscribe();
  // }

  render() {
    const campuses = this.props.campuses;
    const handleCampusDelete = this.props.handleCampusDelete;
    
    return (
      <div>
        <h1>AllCampuses</h1>
        <ul>
        <tbody>
          {
            campuses.map((campus)=>{
              return (
                <tr key={campus.id}>
                  <th><Link to={`/campuses/${campus.id}`}>{campus.name}</Link></th>
                  <th><button onClick={()=>handleCampusDelete(campus)}>Delete Campus</button></th>
                </tr>
              )
            })
          }
          </tbody>
        </ul>
      </div>
    )
  }
}