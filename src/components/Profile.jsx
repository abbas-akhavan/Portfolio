import React from 'react'
import styles from './Profile.module.scss'

const Profile = () => {
  return (
    <div className={`${styles.profile}`}>
    <img src="/images/Abbas.jpg" alt="" />
    <h1>
        <span>&#129505; Abbas Akhavan &#129505;</span>
        <span>Professional FrontEnd Developer &#128526;</span>
    </h1>
    <span>Coming soon</span>
    </div>
  )
}

export default Profile