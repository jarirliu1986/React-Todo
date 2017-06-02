var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'walk the dog'
        },
        {
          id: 2,
          text: 'clean the yard'
        },
        {
          id: 3,
          text: 'play video games'
        }
      ]
    }
  },
  render: function () {
    var {todos} = this.state;
    return (
      <div>
        TodoApp .jsx
        <TodoList todos={todos}/>
      </div>
    );
  }
});

module.exports = TodoApp;
