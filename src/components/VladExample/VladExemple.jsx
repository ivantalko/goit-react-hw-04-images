// import { Component } from 'react';
// import PropTypes from 'prop-types';
// const ID_LOCAL_KEY = 'active-id';
// export class Tabs extends Component {
//   state = {
//     id: this.props.description[0].id,
//   };

//   componentDidMount() {
//     const savedId = localStorage.getItem(ID_LOCAL_KEY);
//     if (savedId) {
//       this.setState({ id: savedId });
//     }
//   }
//   componentDidUpdate(_, prevState) {
//     const { id } = this.state;
//     if (prevState.id !== id) {
//       localStorage.setItem(ID_LOCAL_KEY, id);
//     }
//   }

//   handekClick = e => {
//     this.setState({
//       id: e.target.id,
//     });
//   };

//   render() {
//     return (
//       <div className="tabs">
//         <ul className="tabs__caption">
//           {this.props.description.map((item, index) => (
//             <li
//               className={item.id === this.state.id && 'active'}
//               onClick={this.handekClick}
//               id={item.id}
//               key={item.id}
//             >
//               Вкладка номер {index + 1}
//             </li>
//           ))}
//         </ul>
//         {this.props.description.map(({ descriptions, id }) => (
//           <div
//             className={`tabs__content ${id === this.state.id && 'active'}`}
//             key={id}
//           >
//             {descriptions.map(elem => (
//               <p key={elem}>{elem}</p>
//             ))}
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

// Tabs.propTypes = {
//   description: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       descriptions: PropTypes.arrayOf(PropTypes.string).isRequired,
//     })
//   ),
// };
