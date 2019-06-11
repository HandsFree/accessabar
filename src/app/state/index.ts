const state: Accessabar.IState = {
    // Whether Accessabar has been hidden or not.
    abarHidden: false,

    magActive: false,
    magBorder: 4,
    magCanDrag: false,
    magHeight: 240,
    magMouseX: 0,
    magMouseY: 0,
    magMoveEvent: false,
    magPageContent: '',
    magPageOffsetX: 0,
    magPageOffsetY: 0,
    magPageX: 0,
    magPageY: 0,
    magPosX: 0,
    magPosY: 0,
    magScale: '1.5',
    magScaleMax: 5.0,
    magScaleMin: 0.5,
    magScaleStep: 0.1,
    magTranslateX: 0,
    magTranslateY: 0,
    magWidth: 400,

    maskActive: false,
    maskColourCurrent: '',
    maskColourCustomCurrent: '#fff',
    maskCustomActive: false,
    maskOpacity: '0.3',
    maskOpacityMax: 0.95,
    maskOpacityMin: 0.05,
    maskOpacityStep: 0.05,

    menuActive: false,
    // If it's possible to drag the menu (mouse button has been pressed).
    menuCanDrag: false,
    menuCurrent: '',
    menuEvent: false,
    menuHidden: true,
    menuMouseX: 0,
    menuMouseY: 0,
    menuPosX: false,
    menuPosY: false,
    menuTitle: '',

    ttsCurrentUtterCharIndex: 0,
    ttsCurrentUtterSentenceIndex: 0,
    ttsCurrentUtterSentenceWordIndex: 0,
    ttsCurrentUtterSentences: [],
    ttsCurrentUtterText: '',
    ttsCurrentUtterWordIndex: 0,
    ttsCurrentUtterWords: [],
    ttsHighlightSpeak: false,
    ttsHighlightTimeout: false,
    ttsHoverSpeak: false,
    ttsHoverTimeout: false,
    ttsInitiated: false,
    ttsLang: 'en',
    ttsPitch: 1,
    ttsRate: 1,
    ttsVoiceActive: false,
    ttsVoices: [],
    ttsVolume: 1,

    textOpsInnerMenuCurrent: 'font',

    fontActive: false,
    fontColourActive: false,
    fontColourCurrent: '',
    fontColourCustomCurrent: '#fff',
    fontCurrentKey: '',
    fontCustomActive: false,
    fontLetterSpacingActive: false,
    fontLetterSpacingCount: 0,
    fontLetterSpacingMax: 50,
    fontLetterSpacingStep: 1,
    fontLineSpacingActive: false,
    fontLineSpacingCount: 0,
    fontLineSpacingMax: 50,
    fontLineSpacingStep: 1,
    fontSizingActive: false,

    selectFontListActive: false,
};

export default state;
