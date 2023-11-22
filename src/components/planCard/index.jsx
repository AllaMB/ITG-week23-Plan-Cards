        import React, { useState } from "react";
        import classnames from "classnames";
        import styles from "./planCard.module.scss";

        function PlanCard({ name, price, speed, theme, selected, onClick }) {
            const cardTitle = classnames(styles.card__title, theme.card__title);
            const cardPrice = classnames(styles.card__price, theme.card__price);
            const card = classnames(styles.card, {
            [styles.selected]: selected,
            });
        
            return (
            <div className={card} onClick={onClick}>
        
            <div className={styles.card__body}>
                <div className={cardTitle}>
                <h2>{name}</h2>
                </div>
                <div className={cardPrice}>
                <p>руб</p>
                <p className={styles.card__priceBig}>{price}</p>
                <p className={styles.card__priceBottom}>/мес</p>
                </div>
                <div className={styles.card__speed}>
                <p className={styles.card__text}>до {parseFloat(speed)} Мбит/сек</p>
                </div>
            </div>
            <div className={styles.card__footer}>
                <p className={styles.card__text}>
                Объем включенного трафика не ограничен
                </p>
            </div>
            </div>
        );
        }

        export { PlanCard };
