import BigNumber from "bignumber.js";

const state: Accessabar.IState = {
    // Whether Accessabar has been hidden or not.
    abarHidden: false,

    magActive: false,
    magBorder: 4,
    magCanDrag: false,
    magHeight: new BigNumber(window.innerHeight).times(0.3).decimalPlaces(0).toNumber(), // Initialize at 30% of screen
    magHeightMin: 50,
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
    magWidth: new BigNumber(window.innerWidth).times(0.3).decimalPlaces(0).toNumber(),
    magWidthMin: 50,
    magCanResize: false,
    magResizeStartX: 0,
    magResizeStartY: 0,

    magSizeChangeStep: 0.1,
    magHeightOffset:  0,
    magWidthOffset: 0,

    // Feedback state Items
    feedbackProvided: false,
    feedbackActive: false,
    feedbackHeight: new BigNumber(window.innerHeight).times(0.3).decimalPlaces(0).toNumber(), // Initialize at 30% of screen
    feedbackHeightMin: 50,
    feedbackWidth: new BigNumber(window.innerWidth).times(0.3).decimalPlaces(0).toNumber(),
    feedbackWidthMin: 50,
    feedbackPosX:  new BigNumber(window.innerWidth).dividedBy(2).minus(new BigNumber(window.innerWidth).times(0.3).dividedBy(4)).toNumber(),
    feedbackPosY: new BigNumber(window.innerHeight).dividedBy(2).minus(new BigNumber(window.innerHeight).times(0.3).decimalPlaces(0).dividedBy(2)).toNumber(),

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
    ttsCurrentVoiceName: 'Click to choose voice',
    ttsHighlightSpeak: false,
    ttsHighlightTimeout: false,
    ttsHoverSpeak: false,
    ttsHoverTimeout: false,
    ttsInitiated: false,
    ttsLang: 'en',
    ttsPitch: '1',
    ttsRate: '1',
    ttsVoice: undefined,
    ttsVoiceActive: false,
    ttsVoiceListActive: false,
    ttsVoices: [],
    ttsVolume: '1',

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

    // Language state
    languageActive: false,

    languageCurrentKey: '',
    selectLanguageListActive: false,

    rulerOpsInnerMenuCurrent: 'reading',

    rulerEventActive: false,
    rulerMouseX: 0,
    rulerMouseY: 0,
    rulerPinholeActive: false,
    rulerPinholeCentreHeight: 48,
    rulerPinholeCentreHeightMax: 144,
    rulerPinholeCentreHeightMin: 12,
    rulerPinholeCentreHeightStep: 12,
    
    rulerPinholeMaskColourCurrent: '#000',
    rulerPinholeMaskColourCustomCurrent: '#000',
    rulerPinholeMaskCustomActive: false,

    rulerPinholeColourCurrent: '#000',
    rulerPinholeColourCustomCurrent: '#000',
    rulerPinholeCustomActive: false,

    rulerPinholeOpacity: '0.6',
    rulerPinholeOpacityMax: 0.9,
    rulerPinholeOpacityMin: 0.2,
    rulerPinholeOpacityStep: 0.05,
    rulerReadingActive: false,
    rulerReadingOffset: 8,
    rulerReadingOpacity: '0.9',
    rulerReadingOpacityMax: 1,
    rulerReadingOpacityMin: 0.2,
    rulerReadingOpacityStep: 0.05,

    // Reading ruler size updates
    rulerHeight: 48,
    rulerHeightMax: 200,
    rulerHeightMin: 12,
    rulerHeightStep: 12,

    selectFontListActive: false,

    settingsHidden: true,

    aboutHidden: true,

    srActive: false,
    srLang: 'en',
    srLangName: 'English',
    srLangListActive: false,
    srRuntime: false,
};

export default state;
