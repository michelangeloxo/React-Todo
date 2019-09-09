import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';

const todoData = [ 
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: true
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
 constructor(){

  super();
  this.state = {
    todos: todoData,
  }
 }

 filterCompleted = () => {

this.setState({
  todos: this.state.todos.filter(todo => {
 return !todo.completed; 
  })
})


 }


 toggleCompleted = (id) => {
  this.setState({
    todos: 
  this.state.todos.map(todo => {
     if (id === todo.id) {
     return {...todo, completed: !todo.completed}; 
    } else {
       return todo;
     }
   }) });
 }

 addTodo = task => {
   this.setState({
     todos: [...this.state.todos, {
       task: task,
       id: Date.now(),
       completed: false
     }]
   })
 }

 onMouseOver = event => {
  const el = event.target;
  let colorhex = [
    "#7AF377",
    "#3498DB",
    "#F1C530",
    "#F29C29",
    "#8E44AD",
    "#4AA086",
    "#E74C3C",
    "#65CC71",
    "#D3541B",
    "#EB4367",
    "#74F7D9",
    "#DDA8FC"
  ];
  el.style.color = colorhex[Math.floor(Math.random() * 12)];
};

  render() {
   
    return (
      <div>
        <h2 onMouseOver={this.onMouseOver}>Welcome to your Todo App!</h2>

        <TodoList todos={this.state.todos} 
        toggleCompleted={this.toggleCompleted} /> 
        <TodoForm addTodo={this.addTodo} filterTodos={this.filterCompleted} />
      </div>
    );
  }
}

export default App;
