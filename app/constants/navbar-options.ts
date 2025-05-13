import { RiHome9Line } from 'react-icons/ri';
import { IconType } from 'react-icons';

export interface OptionsMenu {
  label: string;
  path: string;
  type: string;
  Icon: IconType;
}
export const optionsMenu: OptionsMenu[] = [
  {
    label: 'Home',
    path: '/',
    type: '',
    Icon: RiHome9Line,
  },
];
