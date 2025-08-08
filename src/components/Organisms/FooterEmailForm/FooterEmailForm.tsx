import React from 'react';
import styles from './FooterEmailForm.module.scss';

export const FooterEmailForm: React.FC = () => {
  return (
    <form
      action="https://buttondown.com/api/emails/embed-subscribe/artbloomsclub"
      method="post"
      target="popupwindow"
      onSubmit={() =>
        window.open('https://buttondown.com/artbloomsclub', 'popupwindow')
      }
      className={styles.form}
    >
      <label htmlFor="bd-email" className={styles.label}>
        Subscribe to our newsletter
      </label>
      <div className={styles.inputRow}>
        <input
          type="email"
          name="email"
          id="bd-email"
          required
          className={styles.input}
          placeholder="Email"
        />
        <input type="submit" value="Join" className={styles.submit} />
      </div>
    </form>
  );
};
