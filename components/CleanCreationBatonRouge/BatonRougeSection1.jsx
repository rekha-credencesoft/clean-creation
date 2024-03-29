import Link from 'next/link';
import React from 'react';
import styles from '../../styles/component-styles/CleanCreationBatonRouge/BatonRougeSection1.module.css';

function BatonRougeSection1() {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
      <h1>Food Creation BATON ROUGE</h1>
      <div className={styles.description}>
      <p>Living in Louisiana means you’re always surrounded by delicious foods, and when you’re busy, it can be easy to fall back on beignets, po’boys, and other hearty meals. But sometimes, you need something light, fresh, and nutritious, and Food Creation, Baton Rouge is here to help! </p>
      </div>
      <Link href={'/currentmenu'}>
      <div className={styles.button}>
          VIEW MENU
      </div>
      </Link>
      </div>
    </div>
  )
}

export default BatonRougeSection1
