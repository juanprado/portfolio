import { AppBar, Toolbar, Typography } from '@mui/material';

import styles from './header.module.scss';

function Header() {
  return (
    <AppBar className={styles.root} position="fixed">
      <Toolbar className={styles.toolbar}>
        <Typography variant="h5" component="h1">Juan Fernando Prado</Typography>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li>Home</li>
            <li>Case Studies</li>
            <li>Works</li>
            <li>Resume</li>
          </ul>
        </nav>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
