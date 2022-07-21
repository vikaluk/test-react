import React from 'react';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';

function App() {
  return (
    <div>
      <Card onClick={(num) => console.log('test item', num)} variant={CardVariant.outlined} width='200px' height='200px'>
        <div>
          <button>Click me!</button>
          <div>Test item</div>
        </div>
      </Card>
      <UserList users={}/>
    </div>
  );
}

export default App;
