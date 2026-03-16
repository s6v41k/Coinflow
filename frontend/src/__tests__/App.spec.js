import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '../App.vue';

describe('App', () => {
  it('renders CoinFlow content', () => {
    const wrapper = mount(App);

    expect(wrapper.text()).toContain('CoinFlow');
    expect(wrapper.text()).toContain('Round up everyday purchases into a rainy day pot.');
  });
});
