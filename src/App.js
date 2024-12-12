import NewCost from './components/NewCost/NewCost';
import Costs from './components/Costs/Costs';
import {useState} from 'react';

const INITIAL_COSTS = [
  {
    id: 'c1',
    date: new Date(2024, 2, 12),
    description: 'Холодильник',
    amount: 999.99,
  },
  {
    id: 'c2',
    date: new Date(2024, 11, 25),
    description: 'MacBook',
    amount: 1254.72,
  },
  {
    id: 'c3',
    date: new Date(2023, 3, 1),
    description: 'Джинсы',
    amount: 49.99,
  },
];

const App = () => {

  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts(prevState => {
      return [cost,...prevState];
    })
  };

  return (
      <div>
        <NewCost onAddCost={addCostHandler}/>
        <Costs costs={costs}/>
      </div>
  );
};

export default App;
