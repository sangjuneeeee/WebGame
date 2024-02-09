import * as stylex from '@stylexjs/stylex';
import { StyleXStyles } from '@stylexjs/stylex';

import { colors } from '../../styles/colors.stylex';

interface InputFieldProps {
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  style?: StyleXStyles;
}

const styles = stylex.create({
  variants: {
    backgroundColor: colors.p2,
    '::placeholder': {
      color: colors.p4,
    },
  },
  size: {
    fontSize: '10px',
  },
});

export const InputField = (props: InputFieldProps) => {
  // default = text
  const { type = 'text', placeholder = '입력하세요.', style } = props;
  return (
    <input
      type={type}
      {...stylex.props(styles.size, styles.variants, style)}
      placeholder={placeholder}
    ></input>
  );
};
