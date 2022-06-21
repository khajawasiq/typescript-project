import React , {useState} from 'react';
import Pic from './Pic.svg';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

 export interface IState {
  people: {
    name: string
    age: number
    url: string
    description?:string
  }[ ]
}
function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {name:"wasiq",
    age:22,
    url:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    description:"he is a good coder"
  }
  ])
  return (
    <div className="App">
    <h1>people invited to my party </h1>
    <List people={people} />
    <AddToList people={people} setPeople={setPeople} />
    {/* <img src={Pic} alt="" /> */}
    </div>
  );
}

export default App;
