var React = require('react');

var AddTodo = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();

    var todoTest = this.refs.todoTest.value;
    if(todoTest.length > 0){
      this.refs.todoTest.value = '';
      this.props.onAddTodo(todoTest);
    }else{
      this.refs.todoTest.focus();
    }
  },
  render: function () {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todoTest" placeholder="What do you need to?"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
