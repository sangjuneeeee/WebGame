import * as stylex from '@stylexjs/stylex';
import { StyleXStyles } from '@stylexjs/stylex';
import { ReactNode } from 'react';

import { colors } from '../../../styles/colors.stylex';

interface ButtonProps {
  type?: 'button' | 'submit';
  children: ReactNode;
  style?: StyleXStyles;
}

const styles = stylex.create({
  variants: {
    backgroundColor: colors.p2,
    color: colors.p4,
  },
  size: {
    fontSize: '10px',
  },
  span: {
    textAlign: 'center',
  },
});

export const Button = (props: ButtonProps) => {
  const { type = 'submit', style } = props;
  return (
    <button type={type} {...stylex.props(styles.variants, styles.size, style)}>
      <span {...stylex.props(styles.span)}>{props.children}</span>
    </button>
  );
};
