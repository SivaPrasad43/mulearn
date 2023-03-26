import React from "react"
import Tik from "./assets/Tik"
import styles from "./Onboarding.module.css"

type Props = {
  roleVerified: boolean
}

const Success = (props: Props) => {
  return (
    <div className={styles.success_page}>
      <div className={styles.tik}>
        <Tik />
      </div>
      <br />
      <br />
      <p>
        {props.roleVerified
          ? "Woooohh! You successfully registered."
          : "Onboarding Successful, You will be verified within 24 hours."}
      </p>
      <div className={styles.buttons}>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <button className={styles.button}>Join Whatsapp</button>
        </a>
        <a href="http://discord.mulearn.org" target="_blank" rel="noopener noreferrer">
          <button className={styles.button}>Discover Discord</button>
        </a>
      </div>
    </div>
  )
}

export default Success
