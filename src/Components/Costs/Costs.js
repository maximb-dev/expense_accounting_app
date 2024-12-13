import './Costs.css';
import Card from '../UI/Card';
import CostFilter from './CostFilter';
import {useState} from 'react';
import CostList from './CostList';
import CostsDiagram from './CostsDiagram';

const Costs = (props) => {

  const [selectedYear, setSelectedYear] = useState('2024');

  const changeYearHandle = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts = props.costs.filter(cost => {
    return cost.date.getFullYear().toString() === selectedYear;
  });

  return (
      <Card className="costs">
        <CostFilter year={selectedYear} onChangeYear={changeYearHandle}/>
        <CostsDiagram costs={filteredCosts}/>
        <CostList costs = {filteredCosts} />
      </Card>
  );
};

export default Costs;
