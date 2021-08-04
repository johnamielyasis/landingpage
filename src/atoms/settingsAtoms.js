import { atom } from 'recoil';

export const settingsAtom = atom({
  key: 'settingsState',
  default: {
    primaryColor: 'yellow',
    darkMode: false,
    smSpace: 2,
    mdSpace: 4,
    lgSpace: 8,
  }
})