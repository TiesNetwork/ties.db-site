import React, { createElement } from 'react';
import { connect } from 'react-redux';
import { compose, withStateHandlers } from 'recompose';

/** Views **/
import Desktop from './Desktop';
import Mobile from './Mobile';

const COLOR = {
  DARK: 'Dark',
}

const menu = [
  {
    id: 'about',
    items: [
      { link: '/', title: 'Features' },
      { link: '/', title: 'Roadmap' },
      { link: '/team', title: 'Team' },
    ],
    title: 'About',
  },
  {
    id: 'news',
    items: [
      { link: '/', title: 'Media' },
      { link: 'https://blog.ties.network/', title: 'Blog' },
    ],
    title: 'News',
  },
  {
    id: 'docs',
    items: [
      { link: '/', title: 'White paper' },
      { link: 'https://docs.google.com/document/d/1UwaaUgunnrFpL6jetA_DdNLQsbbqBx1HLcln07kLrUw', title: 'Yellow paper' },
      { link: 'https://cdn.ties.network/short-guide-eng.pdf', title: 'Short Guide' },
    ],
    title: 'Docs',
  },
  { link: 'https://kb.ties.network/', title: 'FAQ' },
  { link: '/', title: 'Contact' },
];

const Page = ({
  env: { isMobile },
  ...props,
}) => (
  <div>
    {createElement(isMobile ? Mobile : Desktop, {
      ...props,
      isMobile,
      menu,
    })}
  </div>
)

const mapStateToProps = ({ services }) => ({
  env: services.env,
});

export default compose(
  connect(mapStateToProps),
  withStateHandlers(
    props => ({ menuIsOpened: false }),
    {
      handleMenuToggle: state => () => ({ menuIsOpened: !state.menuIsOpened }),
    }
  )
)(Page);
export { COLOR };
