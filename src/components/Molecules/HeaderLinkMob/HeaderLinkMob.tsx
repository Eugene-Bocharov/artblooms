// Import necessary modules
import React from 'react';
import { Link as MuiLink } from '@material-ui/core';
import styles from './HeaderLinkMob.module.scss';

// Define HeaderLinkProps interface
interface HeaderLinkProps {
  text: string;
  href: string;
}

// Define HeaderLink component
export const HeaderLinkMob: React.FC<HeaderLinkProps> = ({ text, href }) => {
  return (
    <a
      href={href}
      className={styles.headerLink} // Add your styling class for the link
      color="inherit"
    >
      {text}
    </a>
  );
};
