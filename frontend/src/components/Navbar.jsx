import React from "react";
import logo from "../assets/img/logo-black.svg";
import { Link, useNavigate, NavLink } from "react-router-dom";

const Navbar = () => {
  const Navigate = useNavigate();

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__branding">
            <Link to="/" className="header__branding__logo">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <nav className="header__menu">
            <ul className="header__nav">
              <li className="header__nav__item header__nav__item-active header__nav__item--mobile">
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "header__nav__link header__nav__link--underline header__nav__item-active"
                      : "header__nav__link"
                  }
                >
                  Dashboard
                </NavLink>
              </li>
              <li className="header__nav__item header__nav__item--mobile">
                <NavLink
                  to="/favorites"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "header__nav__link header__nav__link--underline"
                      : "header__nav__link"
                  }
                >
                  My favorites
                </NavLink>
              </li>
              <li className="header__nav__item header__nav__item--mobile">
                <NavLink
                  to="/upcoming-events"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "header__nav__link header__nav__link--underline"
                      : "header__nav__link"
                  }
                >
                  Upcoming events
                </NavLink>
              </li>
              <li className="header__nav__item header__nav__item--notifications">
                <Link className="header__nav__link">
                  <span className="icon-bell"></span>
                  {/* <!-- The below span will be displayed if there is any unread notification in the system othersie hide this --> */}
                  <span className="circle"></span>
                </Link>
                <div className="popup">
                  <h4 className="popup__title">
                    Hey Charlie
                    <span className="popup__icon">
                      <img src="./assets/img/hand.svg" alt="" />
                    </span>
                  </h4>
                  <p className="popup__content">
                    We noticed that you have changed your preferences. We have
                    added some new events keeping in mind your new settings.
                  </p>
                  <p className="popup__content">
                    Please visit the home page to check the new events and
                    activities!
                  </p>
                  <div className="popup__actions">
                    <button
                      className="popup__btn"
                      onClick={() => Navigate("/notifications")}
                    >
                      I want to see
                    </button>
                    <a className="popup__link">Remind me later</a>
                  </div>
                  <div className="popup__pointer"></div>
                  <div className="popup__close">
                    <svg
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      width="122.881px"
                      height="122.88px"
                      viewBox="0 0 122.881 122.88"
                      //   enable-background="new 0 0 122.881 122.88"
                      space="preserve"
                    >
                      <g>
                        <path d="M61.44,0c16.966,0,32.326,6.877,43.445,17.996c11.119,11.118,17.996,26.479,17.996,43.444 c0,16.967-6.877,32.326-17.996,43.444C93.766,116.003,78.406,122.88,61.44,122.88c-16.966,0-32.326-6.877-43.444-17.996 C6.877,93.766,0,78.406,0,61.439c0-16.965,6.877-32.326,17.996-43.444C29.114,6.877,44.474,0,61.44,0L61.44,0z M80.16,37.369 c1.301-1.302,3.412-1.302,4.713,0c1.301,1.301,1.301,3.411,0,4.713L65.512,61.444l19.361,19.362c1.301,1.301,1.301,3.411,0,4.713 c-1.301,1.301-3.412,1.301-4.713,0L60.798,66.157L41.436,85.52c-1.301,1.301-3.412,1.301-4.713,0c-1.301-1.302-1.301-3.412,0-4.713 l19.363-19.362L36.723,42.082c-1.301-1.302-1.301-3.412,0-4.713c1.301-1.302,3.412-1.302,4.713,0l19.363,19.362L80.16,37.369 L80.16,37.369z M100.172,22.708C90.26,12.796,76.566,6.666,61.44,6.666c-15.126,0-28.819,6.13-38.731,16.042 C12.797,32.62,6.666,46.314,6.666,61.439c0,15.126,6.131,28.82,16.042,38.732c9.912,9.911,23.605,16.042,38.731,16.042 c15.126,0,28.82-6.131,38.732-16.042c9.912-9.912,16.043-23.606,16.043-38.732C116.215,46.314,110.084,32.62,100.172,22.708 L100.172,22.708z" />
                      </g>
                    </svg>
                  </div>
                </div>
              </li>
              <li className="header__nav__item header__nav__item--menu">
                <Link className="header__nav__link">
                  <div className="header__nav__link__menu">
                    <span className="icon-menu"></span>
                    <div className="header__nav__link__user">
                      <div className="header__nav__link__user--init">S</div>
                      <div className="nav__link__user--pic"></div>
                    </div>
                  </div>
                </Link>
                <div className="dropdown-menu">
                  <ul className="nav">
                    <li className="nav__item nav__item--mobile">
                      <Link to="/" className="nav__link">
                        Dashboard
                      </Link>
                    </li>
                    <li className="nav__item nav__item--mobile">
                      <Link to="/favorites" className="nav__link">
                        My favorites
                      </Link>
                    </li>
                    <li className="nav__item nav__item--mobile">
                      <Link to="/upcoming-events" className="nav__link">
                        Upcomingevents
                      </Link>
                    </li>
                    <li className="nav__divider nav__item--mobile"></li>
                    <li className="nav__item">
                      <Link to="/edit-profile" className="nav__link">
                        Edit profiles
                      </Link>
                    </li>
                    <li className="nav__item">
                      <Link to="/feedback" className="nav__link">
                        Feedback
                      </Link>
                    </li>
                    <li className="nav__item">
                      <Link to="/setting" className="nav__link">
                        Settings
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="header__nav__item header__nav__item--languages">
                <div role="button" className="header__nav__link">
                  <span className="icon-globe"></span>
                </div>
                <div className="dropdown-menu dropdown-menu--sm">
                  <ul className="nav">
                    <li className="nav__item">
                      <Link
                        href="#english"
                        className="nav__link nav__link--selected"
                      >
                        English
                      </Link>
                    </li>
                    <li className="nav__item">
                      <Link href="#french" className="nav__link">
                        French
                      </Link>
                    </li>
                    <li className="nav__item">
                      <Link href="#arabic" className="nav__link">
                        Arabic
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
