import {h} from 'hyperapp';
import {
  aceAddTippy,
  aceSpeakTooltip,
  handleButtonNavigation,
} from '../actions/ace.actions';
import {
  thumbsUpFeedback,
  thumbsDownFeedback,
  tellMeMore,
  closeFeedback,
} from '../actions/feedback.actions';

const feedback = ({feedbackActive}: Ace.State) => {
  return h(
    'ab-feedback-menu',
    {
      'aria-label': 'Feedback Dialog',
      class: `ab-feedback-menu ab-draggable  ${!feedbackActive && 'ab-hide'}`,
      id: 'ab-feedback-menu',
    },
    [
      h(
        'ab-feedback-prompt-text',
        {
          'aria-label': 'Are you enjoying ACE?',
          class: 'ab-feedback-prompt-text',
          id: 'ab-feedback-prompt-text',
        },
        ['Have you enjoyed using ACE?']
      ),
      h(
        'ab-feedback-actions-container',
        {
          class: 'ab-feedback-actions-container',
          id: 'ab-feedback-actions-container',
        },
        [
          h(
            'ab-feedback-action-thumbs-up',
            {
              'aria-label': 'Enjoying ACE',
              class: 'ab-feedback-action-thumbs-up',
              id: 'ab-feedback-action-thumbs-up',
              onclick: thumbsUpFeedback,
              onmouseover: [
                aceAddTippy,
                {id: '#ab-feedback-action-thumbs-up', content: 'Yes'},
              ],
              onkeydown: handleButtonNavigation,
              role: 'button',
              tabIndex: 1,
            },
            [
              h('ab-icon', {
                'aria-hidden': 'true',
                class: 'ab-icon ab-icon-thumbs-up',
              }),
            ]
          ),
          h(
            'ab-feedback-action-thumbs-down',
            {
              'aria-label': 'Not Enjoying ACE',
              class: 'ab-feedback-action-thumbs-down',
              id: 'ab-feedback-action-thumbs-down',
              onclick: thumbsDownFeedback,
              onmouseover: [
                aceAddTippy,
                {id: '#ab-feedback-action-thumbs-down', content: 'No'},
              ],
              onkeydown: handleButtonNavigation,
              role: 'button',
              tabIndex: 1,
            },
            [
              h('ab-icon', {
                'aria-hidden': 'true',
                class: 'ab-icon ab-icon-thumbs-down',
              }),
            ]
          ),
        ]
      ),
      h(
        'ab-feedback-actions-contaner',
        {
          class: 'ab-feedback-actions-container',
          id: 'ab-feedback-buttons-container',
        },
        [
          h(
            'ab-feedback-tell-me-more-button',
            {
              'aria-controls': 'ab-feedback-tell-me-more-button',
              'aria-label': 'Tell Me More',
              class: 'ab-feedback-tell-me-more-button',
              id: 'ab-feedback-tell-me-more-button',
              onmouseover: [
                aceAddTippy,
                {
                  id: '#ab-feedback-tell-me-more-button',
                  content: 'Tell Me More',
                },
              ],
              onclick: tellMeMore,
              role: 'button',
            },
            ['Tell Me More']
          ),
          h(
            'ab-feedback-close-button',
            {
              'aria-controls': 'ab-feedback-close-button',
              'aria-label': 'Close feedback',
              class: 'ab-feedback-close-button',
              id: 'ab-feedback-close-button',
              onmouseover: [
                aceAddTippy,
                {id: '#ab-feedback-close-button', content: 'Close feedback'},
              ],
              onclick: closeFeedback,
              role: 'button',
            },
            ['Close']
          ),
        ]
      ),
    ]
  );
};

export default feedback;
export {feedback};
