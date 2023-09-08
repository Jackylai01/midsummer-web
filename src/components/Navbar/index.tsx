import { ARROW, CLOSE, FB, IG, MEUN, YT } from '@helpers/imageImports';
import { scrollTo } from '@helpers/scrollOptions';
import Logo from '@public/Img/Logo/仲夏節LOGO-11.png';
import { NextPage } from 'next';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from 'src/hook/useLanguage';

const NavBar: NextPage = () => {
  const { t, changeLanguage } = useLanguage();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isLinkDropdownOpen, setLinkDropdownOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 800) {
        setMenuOpen(false); // 當視窗寬度大於 800 時，設定選單為關閉狀態
        setLinkDropdownOpen(false); // 當視窗寬度大於 800 時，設定選單為關閉狀態
      }
    };

    window.addEventListener('resize', handleResize);

    // 在元件卸載時清理事件監聽器
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollTo('home', 0);
  };

  const scrollToLinkActivity = (e: React.MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    scrollTo('link-activity', 100);
  };

  const scrollToMainActivity = (e: React.MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    scrollTo('main-activity', 120);
  };

  const scrollToMidsummerActivity = (e: React.MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    scrollTo('midsummer-activity', 80);
  };

  const scrollToOrigin = (e: React.MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    scrollTo('origin', 130);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'navbar-active' : ''}`}>
      <article className='navbar__container'>
        <a href='#' id='home' className='navbar__logo' onClick={scrollToHome}>
          <Image
            src={Logo}
            alt='2023台灣仲夏旅遊節Logo'
            width={80}
            height={80}
          />
        </a>
        <main className='navbar__right-container' ref={menuRef}>
          <ul className='navbar__list'>
            <li className='navbar__item' onClick={scrollToOrigin}>
              <a href='#origin' className='navbar__link'>
                {t('nav.link5')}
              </a>
            </li>
            <li className='navbar__item' onClick={scrollToLinkActivity}>
              <a href='#link-activity' className='navbar__link'>
                {t('nav.link1')}
              </a>
            </li>
            <li className='navbar__item' onClick={scrollToMainActivity}>
              <a href='#main-activity' className='navbar__link'>
                {t('nav.link2')}
              </a>
            </li>
            <li className='navbar__item' onClick={scrollToMidsummerActivity}>
              <a href='#' className='navbar__link'>
                {t('nav.link3')}
              </a>
            </li>
            <li
              className='navbar__item'
              onMouseEnter={() =>
                windowWidth && windowWidth > 1080 && setLinkDropdownOpen(true)
              }
              onMouseLeave={() =>
                windowWidth && windowWidth > 1080 && setLinkDropdownOpen(false)
              }
            >
              <a
                className='navbar__link'
                style={{ cursor: 'pointer' }}
                onClick={() => setLinkDropdownOpen(!isLinkDropdownOpen)}
              >
                {t('nav.link4')}
                <Image src={ARROW} width={10} height={8} alt='相關網站' />
              </a>
              <ul
                className={`navbar__item-dropdown ${
                  isLinkDropdownOpen ? 'open' : ''
                }`}
              >
                <li>
                  <a
                    href='https://www.taiwan.net.tw/ '
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {t('nav.relevant')}
                  </a>
                </li>
                <li>
                  <a
                    href='https://admin.taiwan.net.tw/upload/contentFile/auser/b/annual_2018_htm/05_3_National-Scenic-Area-Administrations.html'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {t('nav.relevant1')}
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.taiwantrip.com.tw/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {t('nav.relevant2')}
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.taiwan.net.tw/m1.aspx?sNo=0001019'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {t('nav.relevant3')}
                  </a>
                </li>
                <li>
                  <a
                    href='https://taiwanstay.net.tw/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {' '}
                    {t('nav.relevant4')}
                  </a>
                </li>
                <li>
                  <a
                    href='https://gis.tbroc.gov.tw/TTE/legal.jsp'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {t('nav.relevant5')}
                  </a>
                </li>
              </ul>
            </li>
            <li className='navbar__item'>
              <section
                className='navbar__icon'
                onClick={() => setDropdownOpen(!isDropdownOpen)}
                onMouseEnter={() =>
                  windowWidth && windowWidth > 800 && setDropdownOpen(true)
                }
                onMouseLeave={() =>
                  windowWidth && windowWidth > 800 && setDropdownOpen(false)
                }
              >
                Language
                {isDropdownOpen && (
                  <ul className='navbar__dropdown'>
                    <li
                      className='navbar__dropdown-item'
                      onClick={() => changeLanguage('zh')}
                    >
                      繁體中文
                    </li>
                    <li
                      className='navbar__dropdown-item'
                      onClick={() => changeLanguage('en')}
                    >
                      English
                    </li>
                    <li
                      className='navbar__dropdown-item'
                      onClick={() => changeLanguage('ja')}
                    >
                      日本語
                    </li>
                    <li
                      className='navbar__dropdown-item'
                      onClick={() => changeLanguage('ko')}
                    >
                      한국어
                    </li>
                  </ul>
                )}
              </section>
            </li>
            <li className='navbar__item'>
              <a
                href='https://www.facebook.com/timefortaiwan101'
                className='navbar__item--community'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Image src={FB} alt='faceBook' width={30} height={30} />
              </a>
              <a
                href='https://www.instagram.com/taiwan/?hl=zh-tw&__coig_restricted=1'
                className='navbar__item--community'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Image src={IG} alt='Instagram' width={30} height={30} />
              </a>
              <a
                href='https://www.youtube.com/@TheTbroc'
                className='navbar__item--community'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Image src={YT} alt='Youtube' width={30} height={30} />
              </a>
            </li>
          </ul>
          <span
            id='menu-bar'
            className={
              isMenuOpen ? 'navbar__menu-btn-active' : 'navbar__menu-btn'
            }
            onClick={() => {
              setMenuOpen(!isMenuOpen);
            }}
          >
            <aside className='icon-container'>
              {isMenuOpen ? (
                <Image src={CLOSE} alt='close-list' width={20} height={20} />
              ) : (
                <Image src={MEUN} alt='menu' width={50} height={35} />
              )}
            </aside>
          </span>
        </main>
      </article>
    </nav>
  );
};

export default NavBar;
