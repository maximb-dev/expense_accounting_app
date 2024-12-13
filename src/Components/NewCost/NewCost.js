import CostForm from './CostForm';
import './NewCost.css';
import {useState} from 'react';

const NewCost = (props) => {

  const[isFormVisible,setFormVisible] = useState(false)

  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };
    props.onAddCost(costData);
    setFormVisible(false);
  };

  const inputFormVisibleHandler = () =>{
    setFormVisible(true);
  }
  const cancelCostHandler = () =>{
    setFormVisible(false);
  }
  return (
      <div className="new-cost">
        {!isFormVisible && <button onClick={inputFormVisibleHandler}>Добавитьновый расход</button> }
        {isFormVisible && <CostForm onSaveCostData={saveCostDataHandler} onCancel={cancelCostHandler}/> }
      </div>
  );
};

export default NewCost;
