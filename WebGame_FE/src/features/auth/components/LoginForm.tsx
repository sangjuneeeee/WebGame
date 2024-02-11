import * as stylex from '@stylexjs/stylex';
import { Link } from 'react-router-dom';

import { Layout } from './Layout';
import { InputField } from '../../../components/Form/InputField';
import { Button } from '../../../components/Elements/Button/Button';

import { colors } from '../../../styles/colors.stylex';

const styles = stylex.create({
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyItems: 'center',
    width: '70%',
    marginBottom: '3rem',
  },
  buttonContainer: {
    display: 'flex',
    justifyItems: 'center',
    marginTop: '.1875rem',
  },
  input: {
    margin: '0 0 .625rem 0',
    fontSize: '1.5rem',
  },
  button: {
    borderRadius: '.3125rem',
    margin: '.1875rem',
    width: '100%',
    fontSize: '1rem',
  },
  registerWrapper: {
    display: 'block',
    textAlign: 'center',
    justifyContent: 'center',
    borderRadius: '.3125rem',
    margin: '.1875rem',
    padding: '.1875rem',
    width: '100%',
    backgroundColor: colors.p2,
  },
  registerLink: {
    color: colors.p4,
    fontSize: '1rem',
    textDecoration: 'none',
    cursor: 'default',
    display: 'block',
    width: '100%',
    height: '100%',
  },
});

export const LoginForm = () => {
  return (
    <>
      <Layout>
        <div {...stylex.props(styles.inputContainer)}>
          <InputField placeholder="ID" placeholderSize="1.5rem" style={styles.input} />
          <InputField
            type="password"
            placeholder="Password"
            placeholderSize="1.5rem"
            style={styles.input}
          />
        </div>
        <div {...stylex.props(styles.buttonContainer)}>
          <div {...stylex.props(styles.registerWrapper)}>
            <Link to="../register" {...stylex.props(styles.registerLink)}>
              register
            </Link>
          </div>
          <Button style={styles.button}>submit</Button>
        </div>
      </Layout>
    </>
  );
};

// TODO:
// 1. zod 스키마로 유효성 검사
// 2. 버튼 누르면 컴포넌트 진동 후 로딩 표시 후 메인페이지로 라우팅
