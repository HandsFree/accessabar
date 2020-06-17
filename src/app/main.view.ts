import {h} from 'hyperapp';
import buttonArea from './components/button_area.component';
import {hideButton} from './components/buttons.component';
import menuArea from './components/menu_area.component';
import ttsPrompt from './components/tts_prompt.component';
import funcArea from './components/function_area.component';
import settingsMenu from './components/settings.component';

const innerBar = state => {
  return h('ab-inner-bar', {class: 'ab-bar ab-growable'}, [
    h('ab-logo', {class: 'ab-logo', 'aria-label': 'Ace logo'}, [
      h('ab-logo-img', {class: 'ab-logo-img', alt: 'Ace Logo'}),
    ]),
    h('ab-button-area-container', {class: 'ab-bar-container ab-growable'}, [
      buttonArea(state),
    ]),
  ]);
};

const underBar = state => {
  return h('ab-underbar', {class: 'ab-underbar'}, [
    h('ab-hide-button-container', {class: 'ab-hide-button-container ab-flex'}, [
      hideButton(state),
    ]),
    ttsPrompt(state),
  ]);
};

/**
 * Main container for all Ace elements
 */
const mainView = state => {
  return h('ab-grid', {class: 'ab-bar-grid'}, [
    innerBar(state),
    underBar(state),
    funcArea(state),
    menuArea(state),
    settingsMenu(state),
  ]);
};

export default mainView;