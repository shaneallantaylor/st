import PropTypes from 'prop-types';
import Header from './Header';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="overscroll-none h-full max-w-full overflow-x-hidden px-16">
        {children}
      </main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.any,
};
