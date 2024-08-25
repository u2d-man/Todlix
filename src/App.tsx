import {css} from '@emotion/react';
import {SideMenu} from './components/side-menu';

function App() {
  return (
    <>
      <div css={styles.main}>
        <SideMenu />
      </div>
    </>
  );
}

export default App;

const styles = {
  main: css`
    display: flex;
    align-items: inherit;
    height: 100%;
    min-width: 1280px;
    width: 100%;
    float: none;
    overflow: hidden;
    background-color: #fff;
  `,
};
