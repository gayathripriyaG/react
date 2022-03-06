import React from 'react'
import styles from "./table.module.css"

export const Table = ({tableData}) => {
  return (
    <div>
        <div  className={styles.tableborder}>
            <div>
        <tr className={styles.heading}>
            <th  className={styles.headingin}>name</th>
            <th  className={styles.headingin}>age</th>
            <th  className={styles.headingin}>address</th>
            <th  className={styles.headingin}>department</th>
            {/* <th  className={styles.headingin}>ismarried</th> */}
        </tr>
        </div>
        <div>
        <tr>
        <td className={styles.datain}>{tableData.name}</td>
        <td  className={styles.datain}>{tableData.age}</td>
        <td  className={styles.datain}>{tableData.address}</td>
        <td  className={styles.datain}>{tableData.Department}</td>
        <td  className={styles.datain}>{tableData.isMarried}</td>
        </tr>
        </div>
        </div>
    </div>
  )
}
