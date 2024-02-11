import * as stylex from '@stylexjs/stylex';

import { Layout } from './Layout';
import { InputField } from '../../../components/Form/InputField';
import { Button } from '../../../components/Elements/Button/Button';

const styles = stylex.create({
  img: {
    width: '30%',
  },
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
});

export const RegisterForm = () => {
  return (
    <>
      <Layout style={styles.img}>
        <div {...stylex.props(styles.inputContainer)}>
          <InputField placeholder="ID" placeholderSize="1.5rem" style={styles.input} />
          <InputField placeholder="Name" placeholderSize="1.5rem" style={styles.input} />
          <InputField
            type="password"
            placeholder="Password"
            placeholderSize="1.5rem"
            style={styles.input}
          />
          <InputField
            type="password"
            placeholder="Re-Password"
            placeholderSize="1.5rem"
            style={styles.input}
          />
        </div>
        <div {...stylex.props(styles.buttonContainer)}>
          <Button style={styles.button}>submit</Button>
        </div>
      </Layout>
    </>
  );
};

// TODO:
// 1. zod 스키마로 유효성 검사
// 2. auth인증 후 메인페이지로 라우팅
