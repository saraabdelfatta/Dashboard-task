/**
 * StatsChart
 * What: "Hours Spend" card with a simple bar chart (pure CSS, no chart library).
 * Used in: App, top of the right column.
 *
 * Props:
 *  - total: number shown big at the top (e.g. 50)
 *  - values: number[] one hour value per bar
 *  - axisMax: number, the value that equals a 100%-tall bar (default 50)
 *  - startLabel / endLabel: text under the first and last bar
 *
 * Decision: bar heights are percentages of axisMax, so the chart scales
 * with whatever width the card has (works on phone and desktop).
 */
import Card from "../Card/Card";
import styles from "./StatsChart.module.css";

export default function StatsChart({ total, values, axisMax = 50, startLabel, endLabel }) {
  const ticks = [axisMax, axisMax / 2, 0]; // labels on the left axis, top to bottom

  return (
    <Card className={styles.card}>
      <p className={styles.total}>{total}</p>
      <p className={styles.caption}>Hours Spend</p>

      <div className={styles.chart}>
        <div className={styles.axis} aria-hidden="true">
          {ticks.map((t) => <span key={t}>{t}</span>)}
        </div>
        <div className={styles.bars}>
          {values.map((v, i) => (
            <div
              key={i}
              className={styles.bar}
              style={{ height: `${(v / axisMax) * 100}%` }}
              title={`${v} hours`}
            />
          ))}
        </div>
      </div>

      <div className={styles.range}>
        <span>{startLabel}</span>
        <span>{endLabel}</span>
      </div>
    </Card>
  );
}
