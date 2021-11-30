import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Gratuit',
    Svg: require('../../static/img/ananas.svg').default,
    description: (
      <>
        Gratuit et libre d'accès.
      </>
    ),
  },
  {
    title: 'Grandir',
    Svg: require('../../static/img/ananas.svg').default,
    description: (
      <>
        De zéro à héros, Ananas t'accompagne dans ta progression.
      </>
    ),
  },
  {
    title: 'Mise à jour',
    Svg: require('../../static/img/ananas.svg').default,
    description: (
      <>
        Mise à jour régulière du contenu.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
