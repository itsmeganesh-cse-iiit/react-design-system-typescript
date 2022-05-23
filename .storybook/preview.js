import React from 'react'
import { addDecorator, addParameters } from '@storybook/react'
import { withConsole } from '@storybook/addon-console';
import { withKnobs } from '@storybook/addon-knobs'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

addDecorator(
  (Story) => (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
))
addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addDecorator(withKnobs)

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  a11y: {
    // Optional selector to inspect
    element: '#root',
    config: {
      rules: [
        {
          // The autocomplete rule will not run based on the CSS selector provided
          id: 'autocomplete-valid',
          selector: '*:not([autocomplete="nope"])',
        },
        {
          // Setting the enabled option to false will disable checks for this particular rule on all stories.
          id: 'image-alt',
          enabled: false,
        },
      ],
    },
    // Axe's options parameter
    options: {},
    // Optional flag to prevent the automatic check
    manual: false,
  },
})