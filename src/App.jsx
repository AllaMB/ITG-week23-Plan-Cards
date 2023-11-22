import React from "react";
import { planData } from './components/planData/data';
import { PlanCard} from './components/planCard/index';
import styles from './assets/styles/app.module.scss';

function App() {
  return (
      <div className={styles.app}>
        {planData.map((plan) => (
          <PlanCard
          key={plan.name}
          name={plan.name}
          price={plan.price}
          speed={plan.speed}
          theme={plan.theme}
          />
        ))}
      </div>
  );
}

export { App };
