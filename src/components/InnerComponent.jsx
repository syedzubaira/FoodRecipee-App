import styles from "./innercomponent.module.css";
import React from 'react'

function InnerComponent({ children }) {
  return (
    <div className={styles.innerContainer}>
      {children}
    </div>
  )
}

export default InnerComponent
