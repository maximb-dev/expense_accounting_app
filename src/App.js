import NewCost from './components/NewCost/NewCost';
import Costs from './components/Costs/Costs';
import {useState,useEffect} from 'react';

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

// Функция для преобразования объектов в строки перед сохранением
const formatCosts = (costs) => {
  return costs.map(cost => ({
    ...cost,
    date: cost.date.toISOString(),
  }));
};

// Функция для восстановления объектов из строк при загрузке
const parseCosts = (costs) => {
  return costs.map(cost => ({
    ...cost,
    date: new Date(cost.date),
  }));
};

const App = () => {

  // Изначально загружаем costs из local storage, если доступно, иначе используем INITIAL_COSTS
  const [costs, setCosts] = useState(() => {
    const storedCosts = localStorage.getItem('costs');
    return storedCosts ? parseCosts(JSON.parse(storedCosts)) : INITIAL_COSTS;
  });

  // Эффект для сохранения данных в local storage при изменении расходов
  useEffect(() => {
    localStorage.setItem('costs', JSON.stringify(formatCosts(costs)));
  }, [costs]);

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
