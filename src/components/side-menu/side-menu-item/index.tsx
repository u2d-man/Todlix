import {css} from '@emotion/react';

type Props = {
  readonly icon: string;
  readonly title: string;
};

export function SideMenuItem({icon, title}: Props) {
  return (
    <li css={style.wrap}>
      <span>{icon}</span>
      <span>{title}</span>
    </li>
  );
}

const style = {
  wrap: css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
    padding: 20px 0;
    font-size: 16px;
    text-align: left;
  `,
};
