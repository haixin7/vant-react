import { ReactElement } from 'react';

export interface IProps {
  title?: { text: string; fontSize: string };
  titleIcon?: { name: string; size: string };
  content?: { text: string; fontSize: string };
  contentIcon?: { name: string; size: string } | null;
  description?: { text: string; fontSize: string };
  checkbox?: { checkedColor: string };
  tag?: ReactElement;
  url?: string;
  replace?: boolean;
  round?: boolean;
  click?: Function;
}
