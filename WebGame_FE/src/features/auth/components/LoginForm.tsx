import * as stylex from '@stylexjs/stylex';

import { InputField } from '../../../components/Form/InputField';
import { Button } from '../../../components/Elements/Button/Button';

import { colors } from '../../../styles/colors.stylex';

const styles = stylex.create({
  container: {
    width: '100vw',
    height: '100vh',
  },
  formContainer: {
    backgroundColor: colors.p3,
    display: 'flex',
    flexDirection: 'column',
    justifyItems: 'center',
    borderRadius: '5px',
    padding: '10px',
    width: '250px',
  },
  input: {
    borderRadius: '5px',
    margin: '3px',
  },
  button: {
    borderRadius: '5px',
    margin: '3px',
  },
});

export const LoginForm = () => {
  return (
    <>
      <div {...stylex.props(styles.container)}>
        <div {...stylex.props(styles.formContainer)}>
          <InputField placeholder="ID를 입력하세요." style={styles.input} />
          <InputField type="password" placeholder="PW를 입력하세요." style={styles.input} />
          <InputField type="password" placeholder="PW를 재입력하세요." style={styles.input} />
          <Button style={styles.button}>submit</Button>
        </div>
      </div>
    </>
  );
};
