// Third party
import template from 'lodash-es/template';

// Components and Assets
import { query } from '../../components/utils';
import { layout } from '../../components/layout';
import vanilla from '../../assets/images/vanilla.png';
import material from '../../assets/images/material.png';
import firebase from '../../assets/images/firebase.png';

// Home
import homeTpl from './home.html';
import homeStyl from './home.css';
import homeData from './home.json';
import homeDataZh from './home-zh.json';

// If you have different styles and pictures for different languages.
const imports = {
  'imports': {
    'style': homeStyl,
    'vanilla': vanilla,
    'material': material,
    'firebase': firebase
  }
};

export const common = (imports = null, datas = {}) => {
  query('#app').innerHTML = layout;
  query('#page').innerHTML = template(homeTpl, imports)(datas);
  componentHandler.upgradeAllRegistered();
};

export const loadHome = () => {
  common(imports, homeData);
};

export const loadHomeZh = () => {
  common(imports, homeDataZh);
};
