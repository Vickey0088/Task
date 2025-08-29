import React, { useState, useEffect, useRef } from 'react';
import './FeatureShowcase.css';

const features = [
  {
    id: 1,
    title: 'Feature No.1 - TEXT HEADING DISPLAY',
    body: [
      'Lorem ipsum dolor: sit amet consectetur adipiscing elit, sed do eiusmod.',
      'Ut enim minim: veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.',
      'Sed ut perspiciatis: unde omnis iste natus error sit voluptatem accusantium doloremque.',
      'Excepteur sint occaecat: cupidatat non proident sunt in culpa qui officia deserunt mollit.'
    ],
    image: 'https://tse3.mm.bing.net/th/id/OIP.IHg8yVbad9GW5i5TtvQjDQHaGz?pid=Api&P=0&h=180'
  },
  {
    id: 2,
    title: 'Feature No.2 - TEXT HEADING DISPLAY',
    body: [
      'Feature 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Additional details about feature 2.',
      'More info about feature 2.',
      'Final point for feature 2.'
    ],
    image: 'https://tse3.mm.bing.net/th/id/OIP.sxrAUtK4uFpCln4pFFojsAHaO-?pid=Api&P=0&h=180'
  },
  {
    id: 3,
    title: 'Feature No.3 - TEXT HEADING DISPLAY',
    body: [
      'Feature 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Additional details about feature 3.',
      'More info about feature 3.',
      'Final point for feature 3.'
    ],
    image: 'https://tse3.mm.bing.net/th/id/OIP.IHg8yVbad9GW5i5TtvQjDQHaGz?pid=Api&P=0&h=180'
  },
  {
    id: 4,
    title: 'Feature No.4 - TEXT HEADING DISPLAY',
    body: [
      'Feature 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Additional details about feature 4.',
      'More info about feature 4.',
      'Final point for feature 4.'
    ],
    image: 'https://tse3.mm.bing.net/th/id/OIP.sxrAUtK4uFpCln4pFFojsAHaO-?pid=Api&P=0&h=180'
  },
  {
    id: 5,
    title: 'Feature No.5 - TEXT HEADING DISPLAY',
    body: [
      'Feature 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Additional details about feature 5.',
      'More info about feature 5.',
      'Final point for feature 5.'
    ],
    image: 'https://tse3.mm.bing.net/th/id/OIP.IHg8yVbad9GW5i5TtvQjDQHaGz?pid=Api&P=0&h=180'
  }
];

const FeatureShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  const nextFeature = () => {
    setActiveIndex((prev) => (prev + 1) % features.length);
  };

  const prevFeature = () => {
    setActiveIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  // Auto advance features every 5 seconds
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextFeature();
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, []);

  // Scroll sticky behavior handled by CSS position: sticky

  return (
    <section className="feature-showcase">
      <h2 className="feature-header">Feature Showcase</h2>
      <div className="feature-container">
        <div className="feature-left">
          <button className="arrow left-arrow" onClick={prevFeature} aria-label="Previous Feature">&#8592;</button>
          <div className="feature-content">
            <h3 className="feature-title">{features[activeIndex].title}</h3>
            <ul className="feature-body">
              {features[activeIndex].body.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
          <button className="arrow right-arrow" onClick={nextFeature} aria-label="Next Feature">&#8594;</button>
        </div>
        <div className="feature-center">
          <img
            src={features[activeIndex].image}
            alt={`Feature ${features[activeIndex].id} illustration`}
            className="feature-image"
          />
        </div>
        <div className="feature-right">
          <h4>Feature List</h4>
          <ul className="feature-points">
            {features.map((feature, idx) => (
              <li
                key={feature.id}
                className={idx === activeIndex ? 'active' : ''}
                onClick={() => setActiveIndex(idx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setActiveIndex(idx);
                  }
                }}
                aria-current={idx === activeIndex ? 'true' : 'false'}
              >
                <strong>Feature {feature.id} :</strong> {feature.title.split(' - ')[1]}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
