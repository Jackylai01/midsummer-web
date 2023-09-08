import Logo from '@public/Img/Logo/仲夏節LOGO-11.png';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from 'src/hook/useLanguage';

const PrivacyBar = () => {
  const { t, changeLanguage } = useLanguage();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className='navbar'>
      <header className='navbar__container' style={{ padding: '0rem 2rem' }}>
        <Link href='/' className='navbar__logo'>
          <article style={{ cursor: 'pointer' }}>
            <Image
              src={Logo}
              alt='2023台灣仲夏旅遊節Logo'
              width={80}
              height={80}
            />
          </article>
        </Link>
        <main>
          <ul>
            <li className='navbar__item'>
              <section
                className='navbar__icon'
                onClick={() => setDropdownOpen(!isDropdownOpen)}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
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
          </ul>
        </main>
      </header>
    </nav>
  );
};

export default PrivacyBar;
