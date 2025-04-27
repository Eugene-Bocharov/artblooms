import React from 'react';
import styles from './TestimonialsComponent.module.scss';

export const TestimonialsComponent: React.FC = () => {
  const testimonials = [
    {
      quote:
        'Having access to amazing teachers and amazing professionals makes such a difference in letting students find their voice.',
      author: 'KINARA FLAGG',
    },
    {
      quote:
        'Having access to amazing teachers and amazing professionals makes such a difference in letting students find their voice.',
      author: 'KATE NELSON',
    },
    {
      quote:
        'To have this perspective and mode of thinking really sheds new light onto topics that weve looked at in the same way for a very long time.',
      author: 'KINARA FLAGG',
    },
    {
      quote:
        'Having access to amazing teachers and amazing professionals makes such a difference in letting students find their voice.',
      author: 'KINARA FLAGG',
    },
    {
      quote:
        'Having access to amazing teachers and amazing professionals makes such a difference in letting students find their voice.',
      author: 'KATE NELSON',
    },
    {
      quote:
        'To have this perspective and mode of thinking really sheds new light onto topics that weve looked at in the same way for a very long time.',
      author: 'KINARA FLAGG',
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Student & Alumni Testimonials</h2>
      <div className={styles.testimonialsGrid}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.testimonialCard}>
            <p className={styles.quote}>&ldquo;{testimonial.quote}&rdquo;</p>
            <p className={styles.author}>- {testimonial.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
