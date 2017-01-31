import React, {Component} from 'react';
import NewEpicForm from './NewEpicForm.js';
import EpicsList from './EpicsList.js';

class App extends Component {
  render() {
    return (
      <div>
        <h1>{'Let\'s boil the next technical epic'}</h1>
        <NewEpicForm />
        <EpicsList />
      </div>
    );
  }
}
App.propTypes = {};
export default App;
