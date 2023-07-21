// CLASS BASED COMPONENT
//class Header extends React.Component {
//   render() {
//     return (
//       <div className="title">
//         <h1>{this.props.title}</h1>
//       </div>
//     );
//   }
// }

//FUNCTION BASED COMPONENT
const Header = (props) => {
  return (
    <div className="title">
      <h1>{props.title}</h1>
    </div>
  );
};

ReactDOM.render(<Header title="Notes App" />, document.getElementById("app"));

//when we r not maintaining the state don't use class based components.USE FUNCTION BASED COMPONENTS
