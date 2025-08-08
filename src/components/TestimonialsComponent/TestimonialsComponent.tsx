import React from 'react';
import styles from './TestimonialsComponent.module.scss';

export const TestimonialsComponent: React.FC = () => {
  const testimonials = [
    {
      quote:
        'Art Blooms Club has become a true source of joy, inspiration, and personal growth for our family. We’ve noticed not only artistic progress in our child, but also meaningful changes in his behavior — he’s calmer, more focused, and much more self-assured. He proudly shares his creations with us and eagerly talks about what he’s learned after each class. Art has become a natural part of his life thanks to this wonderful club, and we couldn’t be more grateful.',
      author: 'Oksana, Mama of Milana',
    },
    {
      quote:
        'Art Blooms Club offers so much more than just art lessons—it’s a place where children can build community, express themselves, and develop confidence through creativity. The staff goes above and beyond to connect with each child personally, making sure everyone feels valued and encouraged. Over time, I have seen my child grow not only artistically but also socially, developing friendships and teamwork skills in a positive setting. The experience has been truly transformative for our family, and I am grateful to the entire team at Art Blooms for their dedication and passion.',
      author: 'Maria, Mama of Oliver',
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
    {
      quote:
        'Having access to amazing teachers and amazing professionals makes such a difference in letting students find their voice.',
      author: 'KINARA FLAGG',
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Student & Alumni Testimonials</h2>
      <div className={styles.testimonialsGrid}>
        {testimonials.map((testimonial, index) => {
          // Alternate colors: even-red, odd-green
          const color = index % 2 === 0 ? 'red' : 'green';
          return (
            <div key={index} className={styles.testimonialCard}>
              <p className={styles.quote}>&ldquo;{testimonial.quote}&rdquo;</p>
              <p className={styles.author} style={{ color }}>
                - {testimonial.author}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
