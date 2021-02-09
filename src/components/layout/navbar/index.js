import React from 'react'
import { Link } from 'gatsby'
import styles from '../header.module.css'

export default ({ buttons }) => {

  return (
        <div className={styles.navbar}>
          {buttons.map(button => (
            <div key={button} className={styles.button}>
              <Link to={`/${button}`}>{button}</Link>
            </div>
          ))}
        </div>
  )
}
