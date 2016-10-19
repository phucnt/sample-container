import React from 'react';
import { mount } from 'react-mounter';

FR.route('/', {
  name: 'SamplePage',
  action() {
    mount(MainLayout);
  }
});
FR.route('/test', {
  name: 'SamplePageTest',
  action() {
    mount(MainLayout, {
      content: <DemoContainer />
    });
  }
});
