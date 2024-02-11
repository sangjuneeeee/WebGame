import * as stylex from '@stylexjs/stylex';
import { StyleXStyles } from '@stylexjs/stylex';

import { colors } from '../../../styles/colors.stylex';

interface LayoutProps {
  style?: StyleXStyles;
  children?: React.ReactElement[];
}

const pulse = stylex.keyframes({
  '0%': { transform: 'scale(1)' },
  '50%': { transform: 'scale(1.1)' },
  '100%': { transform: 'scale(1)' },
});

const styles = stylex.create({
  container: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.p2,
  },
  formContainer: {
    backgroundColor: colors.p3,
    display: 'flex',
    flexDirection: 'column',
    justifyItems: 'center',
    alignItems: 'center',
    borderRadius: '.3125rem',
    padding: '3.125rem',
    width: '30%',
    height: '55%',
    filter: 'drop-shadow(3px 5px 7px #392467)',
  },
  img: {
    display: 'inline-block',
    objectFit: 'contain',
    width: '50%',
    height: 'auto',
    marginBottom: '1rem',
    filter: 'drop-shadow(5px 8px 3px #392467)',
    ':hover': {
      transform: 'scale(1.2)',
      animationName: pulse,
      animationDuration: '1s',
      animationIterationCount: 'infinite',
    },
  },
});

export const Layout = (props: LayoutProps) => {
  const { style, children } = props;
  return (
    <div {...stylex.props(styles.container)}>
      <form {...stylex.props(styles.formContainer)}>
        <img src="../src/assets/logo.png" {...stylex.props(styles.img, style)} />
        {children}
      </form>
    </div>
  );
};
