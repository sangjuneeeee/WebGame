import * as React from 'react';
import * as stylex from '@stylexjs/stylex';
import { StyleXStyles } from '@stylexjs/stylex';

import { colors } from '../../styles/colors.stylex';

interface InputFieldProps {
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  placeholderSize?: string;
  style?: StyleXStyles;
}

const styles = stylex.create({
  variants: {
    backgroundColor: colors.p3,
    color: colors.p4,
    borderColor: colors.p4,
  },
  size: {
    boxSizing: 'border-box', // input이 부모 요소를 넘어가지 않게 하기 위해
    width: '98%',
  },
  style: {
    outline: 'none',
    borderWidth: '0 0 .0625rem',
  },
  label: {
    display: 'inline-block',
    position: 'relative',
    color: colors.p4,
    top: '40%',
    transition: '0.3s',
    opacity: '0.8',
  },
  focusLabel: {
    display: 'inline-block',
    position: 'relative',
    color: colors.p4,
    transition: '0.3s',
    top: '5%',
    fontSize: '80%',
  },
});

export const InputField = (props: InputFieldProps) => {
  // default = text
  const { type = 'text', placeholder = '입력하세요.', placeholderSize = '1rem', style } = props;

  const [isFocus, setFocus] = React.useState(false);
  const [isValid, setValid] = React.useState(false);

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocus(false);
    setValid(e.target.value !== '');
  };

  return (
    <div>
      {/* input과 label을 연결하는 id를 placeholder로 했기 때문에 placeholder가 같을 경우 문제가 생김,
      따라서 부모 컴포넌트에서 id를 props로 따로 받던가 해야 함.
      uuid로 고유한 id값을 설정하게 할 수 있지만 SSR 진행 시 id값이 일치하지 않을 수 있음 */}
      <label
        htmlFor={placeholder}
        font-size={placeholderSize}
        {...stylex.props(isFocus || isValid ? styles.focusLabel : styles.label)}
      >
        {placeholder}
      </label>
      <input
        id={placeholder}
        type={type}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...stylex.props(styles.variants, styles.size, styles.style, style)}
        required
      ></input>
    </div>
  );
};

// TODO: div height = placeholderSize + 1rem
// useState해서 focus, valid 되면 조건부로 lable에 스타일 적용
