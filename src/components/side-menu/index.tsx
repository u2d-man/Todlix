import {css} from '@emotion/react';

export function SideMenu() {
  return (
    <nav css={styles.container}>
      <h2 css={styles.titleText}>title</h2>
      <ul css={styles.list}>
        <p>item</p>
      </ul>
    </nav>
  );
}

const styles = {
  container: css`
    position: relative;
    background-color: #f2f2f2;
    border: 1px solid #dcdcdc;
    border-left: none;
    min-width: 101px;
    z-index: 2;
    font-size: 11px;
    color: black;
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 60px);
    gap: 10px;
  `,
  titleText: css`
    padding: 10px;
  `,
  list: css`
    font-size: 11px;
    font-size: 1.1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f2f2f2;
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;
  `,
};
