import {css} from '@emotion/react';
import {SideMenuItem} from './side-menu-item';

export function SideMenu() {
  const sideMenuItemList = [
    {icon: '🏠', title: 'Home'},
    {icon: '💪', title: 'ダイエット'},
    {icon: '🖊️', title: 'PHPの勉強'},
  ];

  return (
    <nav css={styles.container}>
      <h2 css={styles.titleText}>title</h2>
      <ul css={styles.list}>
        {sideMenuItemList.map((item, index) => (
          <SideMenuItem key={index} icon={item.icon} title={item.title} />
        ))}
      </ul>
    </nav>
  );
}

const styles = {
  container: css`
    position: relative;
    background-color: #f2f2f2;
    border-radius: 10px;
    min-width: 101px;
    width: 250px;
    font-size: 11px;
    color: black;
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 60px);
    gap: 10px;
    padding: 20px;
  `,
  titleText: css`
    padding: 10px;
  `,
  list: css`
    font-size: 1.1em;
    list-style: none;
    padding: 0;
  `,
};
