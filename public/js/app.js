"use strict";

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
var Header = function Header(props) {
  return React.createElement(
    "div",
    { className: "title" },
    React.createElement(
      "h1",
      null,
      props.title
    )
  );
};

ReactDOM.render(React.createElement(Header, { title: "Notes App" }), document.getElementById("app"));

//when we r not maintaining the state don't use class based components.USE FUNCTION BASED COMPONENTS
