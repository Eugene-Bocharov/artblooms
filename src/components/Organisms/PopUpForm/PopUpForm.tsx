import React, { useState, useEffect } from 'react';
import styles from './PopUpForm.module.scss';

export const PopUpForm: React.FC = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleClose = () => setOpen(false);

  return (
    <>
      {/* Remove subscribe button, popup opens on page load */}
      {open && (
        <div className={styles.overlay} onClick={handleClose}>
          <div
            className={styles.popup + ' ' + styles.rightCorner}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeButton}
              onClick={handleClose}
              aria-label="Close"
            >
              &times;
            </button>
            <form
              action="https://buttondown.com/api/emails/embed-subscribe/artbloomsclub"
              method="post"
              target="popupwindow"
              onSubmit={() =>
                window.open(
                  'https://buttondown.com/artbloomsclub',
                  'popupwindow'
                )
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
          </div>
        </div>
      )}
    </>
  );
};
