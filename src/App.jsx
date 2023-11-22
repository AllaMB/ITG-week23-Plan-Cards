import React, { useState } from "react";
import { planData } from './components/planData/data';
import { PlanCard} from './components/planCard/index';
import styles from './assets/styles/app.module.scss';

function App() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePlanClick = (index) => {
    setSelectedPlan(index === selectedPlan ? null : index);
  };

  return (
      <div className={styles.app}>
        {planData.map((plan, index) => (
          <PlanCard
          key={plan.name}
          name={plan.name}
          price={plan.price}
          speed={plan.speed}
          theme={plan.theme}
          selected={index === selectedPlan}
          onClick={() => handlePlanClick(index)}
          />
        ))}
      </div>
  );
}

export { App };
