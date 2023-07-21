"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotesApp = function (_React$Component) {
  _inherits(NotesApp, _React$Component);

  function NotesApp(props) {
    _classCallCheck(this, NotesApp);

    // binding
    var _this = _possibleConstructorReturn(this, (NotesApp.__proto__ || Object.getPrototypeOf(NotesApp)).call(this, props));

    _this.onAdd = _this.onAdd.bind(_this);
    _this.onRemove = _this.onRemove.bind(_this);

    // state
    _this.state = {
      //no need to have hard coded value
      notes: []
    };
    return _this;
  }

  _createClass(NotesApp, [{
    key: "onAdd",
    value: function onAdd(note) {
      this.setState(function (prevState) {
        var notes = prevState.notes;
        notes.push({
          id: prevState.notes.length + 1,
          title: note
        });
        return {
          // notes: [
          //   ...prevState.notes,    //rest operator
          //   {
          //     id: prevState.notes.length + 1,
          //     title: note,
          //   },
          // ],

          notes: notes
        };
      });
    }
  }, {
    key: "onRemove",
    value: function onRemove(noteToRemove) {
      this.setState(function (prevState) {
        return {
          notes: prevState.notes.filter(function (note) {
            return note.id != noteToRemove.id;
          })
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(Header, { title: this.props.title, subtitle: this.props.subtitle }),
        React.createElement(AddNote, { onAdd: this.onAdd }),
        this.state.notes.length > 0 && React.createElement(NotesList, { notes: this.state.notes, onRemove: this.onRemove })
      );
    }
  }]);

  return NotesApp;
}(React.Component);

// NotesApp default props


NotesApp.defaultProps = {
  title: "Notes App",
  subtitle: "what do you want to do today?"
};

//converting class based component to function based component
var Header = function Header(props) {
  return React.createElement(
    "div",
    { className: "title" },
    React.createElement(
      "h1",
      null,
      props.title
    ),
    React.createElement(
      "p",
      null,
      props.subtitle
    )
  );
};

// Header default props
Header.defaultProps = {
  title: "",
  subtitle: ""
};

var AddNote = function (_React$Component2) {
  _inherits(AddNote, _React$Component2);

  function AddNote(props) {
    _classCallCheck(this, AddNote);

    // binding
    var _this2 = _possibleConstructorReturn(this, (AddNote.__proto__ || Object.getPrototypeOf(AddNote)).call(this, props));

    _this2.onAdd = _this2.onAdd.bind(_this2);

    // state
    _this2.state = {
      isError: false
    };
    return _this2;
  }

  _createClass(AddNote, [{
    key: "onAdd",
    value: function onAdd(e) {
      var note = e.target.elements.note.value;
      e.preventDefault();

      if (note.length > 0) {
        // will call onAdd method of NotesApp class
        this.props.onAdd(note);
      }

      e.target.elements.note.value = "";
      this.setState({
        isError: note.length == 0
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "add-note" },
        React.createElement(
          "form",
          { onSubmit: this.onAdd },
          React.createElement(
            "div",
            { className: "input-group mb-3" },
            React.createElement("input", {
              type: "text",
              name: "note",
              className: "form-control",
              placeholder: "note title"
            }),
            React.createElement(
              "button",
              {
                className: "btn btn-outline-secondary",
                type: "submit",
                id: "button-addon2"
              },
              "Add"
            )
          ),
          this.state.isError && React.createElement(
            "div",
            { className: "text-danger" },
            "Title can not be empty"
          )
        )
      );
    }
  }]);

  return AddNote;
}(React.Component);

var NotesList = function (_React$Component3) {
  _inherits(NotesList, _React$Component3);

  function NotesList(props) {
    _classCallCheck(this, NotesList);

    // binding
    var _this3 = _possibleConstructorReturn(this, (NotesList.__proto__ || Object.getPrototypeOf(NotesList)).call(this, props));

    _this3.onRemove = _this3.onRemove.bind(_this3);
    return _this3;
  }

  _createClass(NotesList, [{
    key: "onRemove",
    value: function onRemove(note) {
      console.log("removing: ", note.title);
      this.props.onRemove(note);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return React.createElement(
        "div",
        { className: "notes-list" },
        this.props.notes.map(function (note) {
          return React.createElement(
            "div",
            { className: "input-group mb-3" },
            React.createElement(
              "span",
              { className: "form-control" },
              note.title
            ),
            React.createElement(
              "span",
              {
                onClick: function onClick() {
                  _this4.onRemove(note);
                },
                className: "input-group-text text-danger button-delete"
              },
              "Delete"
            )
          );
        })
      );
    }
  }]);

  return NotesList;
}(React.Component);

ReactDOM.render(React.createElement(NotesApp, { title: "My App" }), document.getElementById("app"));
