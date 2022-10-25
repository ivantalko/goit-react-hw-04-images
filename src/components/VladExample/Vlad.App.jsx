// import { Component } from 'react';
// import actors from '../data/acter.json';
// import { Actors } from '../components/ActerList/Acter.jsx';
// import { ProductsList } from './ProductsList';
// import { Tabs } from './Tabs/Tabs';
// import { Section } from './Section/Section';
// import description from '../data/description.json';
// import { Albums } from './Albums/Albums';

// class App extends Component {
//   state = {
//     actors: actors,
//     activeEl: null,
//   };

//   handleBold = e => {
//     this.setState({ activeEl: e.target.id });
//   };
//   actorDelete = event => {
//     console.log(event.target.id);
//     this.setState(prevState => {
//       return {
//         actors: prevState.actors.filter(actor => actor.id != event.target.id),
//       };
//     });
//   };

//   render() {
//     return (
//       <>
//         <Section title={'Actors'}>
//           <Actors actors={this.state.actors} actorDelete={this.actorDelete} />
//         </Section>

//         <Section title={'Products'}>
//           <ProductsList
//             actors={this.state.actors}
//             activeEl={this.state.activeEl}
//             handleBold={this.handleBold}
//           />
//         </Section>

//         <Section title={'Tabs'}>
//           <Tabs description={description} />
//         </Section>
//         <Section title={'Albums'}>
//           <Albums />
//         </Section>
//       </>
//     );
//   }
// }

// export default App;
