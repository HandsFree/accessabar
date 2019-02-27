import {
    div,
    header,
    span,
    button,
    i,
} from '@hyperapp/html';
import * as menus from './menus.component';
import tippy from 'tippy.js';

const menuNames = new Map([
    ['tts', menus.ttsMenu],
    ['textOptions', menus.textOptionsMenu],
    ['magOptions', menus.magOptionsMenu],
]);

const placeholderEl = (state: Accessabar.IState, actions: Accessabar.IActions) => {
    return div();
};

const menu = (state: Accessabar.IState, actions: Accessabar.IActions) => {
    const menuEl = menuNames.has(state.menuCurrent)
        ? menuNames.get(state.menuCurrent) || placeholderEl
        : placeholderEl;

    return div(
        {
            class: `ab-menu ab-draggable ${state.menuHidden ? 'ab-hide' : ''}`,
            id: 'ab-menu',
            oncreate: (el: HTMLElement) => {
                actions.menuUpdatePosition(el);
            },
            style: {
                left: state.menuPosX !== false ? `${ state.menuPosX }px` : null,
                top: state.menuPosY !== false ? `${ state.menuPosY }px` : null,
            },
        },
        [
            header(
                {
                    class: 'ab-menu-header ab-flex',
                    onmousedown: (event) => {
                        actions.menuStartDrag(event);
                    },
                    onmouseup: () => {
                        actions.menuStopDrag();
                    },
                    ontouchcancel: () => {
                        actions.menuStopDrag();
                    },
                    ontouchend: () => {
                        actions.menuStopDrag();
                    },
                    ontouchstart: (event) => {
                        actions.menuStartDrag(event);
                    },
                },
                [
                    span({ class: 'ab-menu-header-text' }, state.menuTitle),
                    button(
                        {
                            'aria-label': 'Close menu',
                            class: 'ab-menu-close',
                            id: 'ab-menu-close',
                            onclick: () => {
                                actions.menuClose();
                            },
                            oncreate: () => {
                                tippy('#accessabar #ab-menu-close', {
                                    arrow: true,
                                    content: 'Close Menu',
                                    placement: 'bottom',
                                    theme: 'ab',
                                });
                            },
                            tabIndex: 1,
                        },
                        [
                            i({
                                'aria-hidden': true,
                                class: 'ab-icon ab-icon-cross',
                            }),
                        ],
                    ),
                ],
            ),
            menuEl(state, actions),
        ],
    );
};

export default menu;
export {
    menu,
};
