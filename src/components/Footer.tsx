/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */

import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import '../styles/Footer.scss';
import '../styles/logo.scss';

const NAVIGATES = ['github', 'contacts', 'rights'];
const githubLink = 'https://github.com/yurii-shkrobut-m';

export const Footer: React.FC = () => {
  // const block = document.querySelector('.app');

  // let scroll = false;

  // const d = window.pageYOffset / pageXOffset;

  // const clientHeight = page?.clientHeight;
  // const clientHeight =

  //   console.log(clientHeight);

  const scrollTop = () => {
    window.scrollTo({ top: 0 });
  };

  const scroll = document.documentElement.scrollHeight;
  const client = document.documentElement.clientHeight;

  console.log(scroll === client);
  // console.log(document.documentElement.clientHeight);

  // if (document.body.scrollWidth === document.body.offsetWidth) {
  //   scroll = true;
  // }

  // console.log(scroll);
  // console.log(document.body.scrollWidth === document.body.offsetWidth);

  // useEffect(() => {
  //   console.log(document.documentElement.scrollHeight);
  //   console.log(document.documentElement.clientHeight);
  //   console.log(window.innerHeight);
  // }, []);

  return (
    <footer className="footer">
      <Link to="/" className="logo" />

      <div className="footer__nav-block">
        <ul className="footer__list">
          {NAVIGATES.map(item => (
            <li key={item}>
              <Link
                to={item === 'github' ? githubLink : item}
                className="footer__link"
                target={item === 'github' ? '_blank' : '_self'}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={cn('footer__back-top', {
          'footer__back-top--hidden': scroll === client,
        })}
      >
        <span className="footer__back-top--text">Back to top</span>

        <button
          type="button"
          className="footer__back-top--link"
          onClick={scrollTop}
        />
      </div>
    </footer>
  );
};
