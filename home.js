import React from 'react'

import Script from 'dangerous-html/react'

import ActiveUsers from './active-users'
import YouTube from './you-tube'
import Testimonal from './testimonal'
import projectStyles from '.style.module.css'
import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <section className={styles['hero']}>
        <div className={styles['menu']}>
          <div id="mobile-menu" className={styles['mobile-navigation']}>
            <img
              alt="pastedImage"
              src="/pastedimage-no9b-1500h.png"
              className={styles['logo']}
            />
            <div className={styles['links']}>
              <span className={projectStyles['link']}>Solutions</span>
              <span className={projectStyles['link']}>How it works</span>
              <span className={projectStyles['link']}>Prices</span>
            </div>
            <div id="close-mobile-menu" className={styles['close-mobile-menu']}>
              <svg
                viewBox="0 0 804.5714285714286 1024"
                className={styles['icon']}
              >
                <path d="M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z"></path>
              </svg>
            </div>
          </div>
          <div className={styles['desktop-navigation']}>
            <nav className={styles['centered']}>
              <div className={styles['left']}>
                <img
                  alt="pastedImage"
                  src="/image/gitcatLOGO.png"
                  className={styles['logo1']}
                />
                <div className={styles['links1']}>
                  <span className={projectStyles['link']}>Solutions</span>
                  <span className={projectStyles['link']}>How it works</span>
                  <span className={projectStyles['link']}>Prices</span>
                </div>
              </div>
              <div className={styles['right']}>
                <span
                  className={` ${styles['sign-in']} ${projectStyles['link']} `}
                >
                  Sign in
                </span>
                <div className={styles['get-started']}>
                  <span className={styles['text006']}>Get started</span>
                </div>
                <div id="open-mobile-menu" className={styles['burger-menu']}>
                  <img
                    alt="pastedImage"
                    src="/pastedimage-yxbd.svg"
                    className={styles['mobile-menu-button']}
                  />
                </div>
              </div>
            </nav>
          </div>
          <div>
            <div className={styles['container02']}>
              <Script
                html={`<script>
/*
Mobile menu - Code Embed
*/

// Mobile menu
const mobileMenu = document.querySelector("#mobile-menu")

// Buttons
const closeButton = document.querySelector("#close-mobile-menu")
const openButton = document.querySelector("#open-mobile-menu")

// On openButton click, set the mobileMenu position left to -100vw
openButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(0%)"
})

// On closeButton click, set the mobileMenu position to 0vw
closeButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(100%)"
})
</script>`}
              ></Script>
            </div>
          </div>
        </div>
        <header className={styles['header']}>
          <h1 className={styles['oooo']}>
            Take your projects to the next level
          </h1>
          <p className={styles['text007']}>work like an ai</p>
          <div className={styles['get-started1']}>
            <span className={styles['text008']}>Get started</span>
          </div>
        </header>
        <div className={styles['dashboard-preview']}>
          <div className={styles['outline']}>
            <img
              alt="pastedImage"
              src="/pastedimage-cdo-1400w.png"
              loading="lazy"
              className={styles['image']}
            />
          </div>
        </div>
      </section>
      <section className={styles['features']}>
        <div className={styles['title']}>
          <span className={styles['text009']}>
            <span>let&apos;s create projects that </span>
            <br></br>
            <span>redefine there fields </span>
          </span>
        </div>
        <div className={styles['cards']}>
          <div className={styles['container03']}>
            <div className={projectStyles['card']}>
              <img
                alt="pastedImage"
                src="/pastedimage-fii6m-200h.png"
                className={styles['icon02']}
              />
              <span className={styles['text013']}>Schedule</span>
            </div>
            <div className={` ${styles['publish']} ${projectStyles['card']} `}>
              <img
                alt="pastedImage"
                src="/pastedimage-mimg-200h.png"
                className={styles['icon03']}
              />
              <span className={styles['text014']}>Publish</span>
            </div>
          </div>
          <div className={styles['container04']}>
            <div className={` ${projectStyles['card']} ${styles['analyze']} `}>
              <img
                alt="pastedImage"
                src="/pastedimage-l6p-200h.png"
                className={styles['icon04']}
              />
              <span className={styles['text015']}>Analyze</span>
            </div>
            <div className={projectStyles['card']}>
              <img
                alt="pastedImage"
                src="/pastedimage-vyi5-200h.png"
                className={styles['icon05']}
              />
              <span className={styles['text016']}>initialize workflows</span>
            </div>
          </div>
        </div>
      </section>
      <section className={styles['quote-container']}>
        <div className={styles['quote']}>
          <span className={styles['message']}>
            “Scale your content, grew lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.”
          </span>
          <div className={styles['author']}>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fGdpcmx8ZW58MHx8fHwxNjY0ODA5MjE1&amp;ixlib=rb-1.2.1&amp;w=200"
              className={styles['avatar']}
            />
            <span className={styles['quote1']}>
              <span className={styles['text017']}>—  Peter McPau</span>
              <span>, Founder and CEO, Active</span>
            </span>
          </div>
        </div>
      </section>
      <section className={styles['statistics']}>
        <div className={styles['container05']}>
          <ActiveUsers Caption="— Active users" Statistic="3.5M"></ActiveUsers>
          <ActiveUsers Caption="— Brands" Statistic="50k"></ActiveUsers>
          <ActiveUsers
            Caption="— Accounts Managed"
            Statistic="250K"
          ></ActiveUsers>
          <ActiveUsers Caption="— Active leads" Statistic="30M"></ActiveUsers>
        </div>
      </section>
      <section className={styles['banners']}>
        <div className={styles['banner-manage']}>
          <div className={styles['container06']}>
            <div className={styles['left1']}>
              <span className={projectStyles['sub-title']}>
                Content Management
              </span>
              <span
                className={` ${styles['text020']} ${projectStyles['title']} `}
              >
                Manage all your platforms in just one place.
              </span>
              <span className={styles['text021']}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. vv
              </span>
              <div
                className={` ${styles['get-started2']} ${projectStyles['template-button']} `}
              >
                <span className={styles['text022']}>Get started</span>
              </div>
            </div>
            <div className={styles['image-container']}>
              <img
                alt="pastedImage"
                src="/pastedimage-wvmq%201-1200w.png"
                className={styles['cards-image']}
              />
            </div>
          </div>
        </div>
        <div className={styles['banner-advanced-analytics']}>
          <div className={styles['centered-container']}>
            <div className={styles['image-container1']}>
              <img
                alt="pastedImage"
                src="/test-1200w.png"
                className={styles['cards-image1']}
              />
            </div>
            <div className={styles['right1']}>
              <span className={projectStyles['sub-title']}>
                Reporting Metrics
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <h2
                className={` ${styles['text024']} ${projectStyles['title']} `}
              >
                Advanced analytics, easy to understand.
              </h2>
              <div className={styles['category']}>
                <span className={styles['text025']}>Power reports</span>
                <span className={styles['text026']}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  vv
                </span>
                <span className={styles['text027']}>Example -&gt;</span>
              </div>
              <div className={styles['category1']}>
                <span className={styles['text028']}>Power reports</span>
                <span className={styles['text029']}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  vv
                </span>
                <span className={styles['text030']}>Example -&gt;</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles['banner']}>
          <div className={styles['container07']}>
            <div className={styles['left2']}>
              <span className={styles['text031']}>Improve Scheduling</span>
              <h2
                className={` ${styles['text032']} ${projectStyles['title']} `}
              >
                Powerful scheduler that saves you time
              </h2>
              <span className={styles['text033']}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. vv
              </span>
              <div
                className={` ${styles['get-started3']} ${projectStyles['template-button']} `}
              >
                <span className={styles['text034']}>Get started</span>
              </div>
            </div>
            <div className={styles['image-container2']}>
              <img
                alt="pastedImage"
                src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                className={styles['cards-image2']}
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles['integrations']}>
        <div className={styles['centered-container1']}>
          <div className={styles['heading']}>
            <span className={projectStyles['sub-title']}>Integrations</span>
            <span className={projectStyles['title']}>
              Integrated with the tools you know and love
            </span>
            <span className={styles['text037']}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. vv
            </span>
          </div>
          <div className={styles['pills-container']}>
            <div className={styles['pills']}>
              <div className={styles['container08']}>
                <YouTube></YouTube>
                <YouTube pastedImage_src="/group%201012-200h.png"></YouTube>
                <YouTube pastedImage_src="/layer1-200h.png"></YouTube>
                <YouTube pastedImage_src="/group-200h.png"></YouTube>
              </div>
              <div className={styles['container09']}>
                <YouTube pastedImage_src="/pinterest%20logo-200h.png"></YouTube>
                <YouTube pastedImage_src="/group%201014-200h.png"></YouTube>
                <YouTube pastedImage_src="/group%201015-200h.png"></YouTube>
                <YouTube pastedImage_src="/group%201017-200h.png"></YouTube>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles['how-it-works']}>
        <div className={styles['centered-container2']}>
          <div className={styles['heading1']}>
            <span className={styles['text038']}>How it works</span>
            <span
              className={` ${styles['text039']} ${projectStyles['title']} `}
            >
              Being social and getting leads has never been easier
            </span>
          </div>
          <div className={styles['category2']}>
            <div className={styles['headng']}>
              <span className={styles['text040']}>
                1 — Sign up
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className={styles['text041']}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. vv
              </span>
              <div
                className={` ${styles['get-started4']} ${projectStyles['template-button']} `}
              >
                <span className={styles['text042']}>Get started</span>
              </div>
            </div>
            <div className={styles['container10']}>
              <img
                alt="pastedImage"
                src="/pastedimage-k5xi%201-1200w.png"
                className={styles['pasted-image']}
              />
            </div>
          </div>
          <div className={styles['row']}>
            <div className={styles['category3']}>
              <div className={styles['headng1']}>
                <span className={styles['text043']}>2 — Act</span>
                <span className={styles['text044']}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  vv
                </span>
              </div>
              <img
                alt="pastedImage"
                src="/pastedimage-ibg-1200w.png"
                className={styles['pasted-image1']}
              />
            </div>
            <div className={styles['category4']}>
              <div className={styles['headng2']}>
                <span className={styles['text045']}>2 — Act</span>
                <span className={styles['text046']}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  vv
                </span>
              </div>
              <img
                alt="pastedImage"
                src="/pastedimage-3c4o-1200w.png"
                className={styles['pasted-image2']}
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles['pricing']}>
        <div className={styles['centered-container3']}>
          <div className={styles['heading2']}>
            <span
              className={` ${styles['text047']} ${projectStyles['title']} `}
            >
              Pricing for all kind of businesses
            </span>
            <span className={styles['text048']}>
              Create next-generation solutions for small business customers with
              pricing options that accommodate everyone.
            </span>
            <div className={styles['selection']}>
              <span className={styles['text049']}>Monthly</span>
              <span className={styles['text050']}>Yearly</span>
            </div>
          </div>
          <div className={styles['cards1']}>
            <div className={styles['card']}>
              <span className={styles['text051']}>Free</span>
              <span className={styles['text052']}>
                Unlimited lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed doliqua.
              </span>
              <div
                className={` ${styles['get-started5']} ${projectStyles['template-button']} `}
              >
                <span className={styles['text053']}>Start for free</span>
              </div>
              <span className={styles['text054']}>What&apos;s included</span>
              <div className={styles['bullet-points']}>
                <div className={styles['point']}>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className={styles['icon06']}
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className={styles['text055']}>
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
                <div className={styles['point01']}>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className={styles['icon08']}
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className={styles['text056']}>
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
              </div>
            </div>
            <div className={styles['card1']}>
              <span className={styles['text057']}>Pay as you go</span>
              <span className={styles['text058']}>
                <span>Launch your lorem for $49/mo</span>
                <br></br>
                <span>lorem ipsum dolor sit amet, consectetur adipiscing.</span>
              </span>
              <div
                className={` ${styles['get-started6']} ${projectStyles['template-button']} `}
              >
                <span className={styles['text062']}>
                  <span>Upgrade now</span>
                  <br></br>
                </span>
              </div>
              <span className={styles['text065']}>What&apos;s included</span>
              <div className={styles['bullet-points1']}>
                <div className={styles['point02']}>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className={styles['icon10']}
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className={styles['text066']}>
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
                <div className={styles['point03']}>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className={styles['icon12']}
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className={styles['text067']}>
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
                <div className={styles['point04']}>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className={styles['icon14']}
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className={styles['text068']}>
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
                <div className={styles['point05']}>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className={styles['icon16']}
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className={styles['text069']}>
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
              </div>
            </div>
            <div className={styles['card2']}>
              <span className={styles['text070']}>Enterprise</span>
              <span className={styles['text071']}>
                <span>
                  Custom-built lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed doliqua.
                </span>
                <br></br>
              </span>
              <div
                className={` ${styles['get-started7']} ${projectStyles['template-button']} `}
              >
                <span className={styles['text074']}>
                  <span>Contact us</span>
                  <br></br>
                </span>
              </div>
              <span className={styles['text077']}>What&apos;s included</span>
              <div className={styles['bullet-points2']}>
                <div className={styles['point06']}>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className={styles['icon18']}
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className={styles['text078']}>
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
                <div className={styles['point07']}>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className={styles['icon20']}
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className={styles['text079']}>
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
                <div className={styles['point08']}>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className={styles['icon22']}
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className={styles['text080']}>
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
                <div className={styles['point09']}>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className={styles['icon24']}
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className={styles['text081']}>
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles['testimonals']}>
        <div className={styles['left3']}>
          <span className={styles['text082']}>Testimonals</span>
          <span className={` ${styles['text083']} ${projectStyles['title']} `}>
            What people say about Active
          </span>
        </div>
        <div className={styles['right2']}>
          <div className={styles['column']}>
            <Testimonal
              Quote='"Pellentesque sodales libero nulla, ac imperdiet ante tincidunt vel. Fusce auctor augue sed massa finibus, et dictum sem mollis. In luctus.”'
              Avatar_src="/image552912-e3yq-200h.png"
            ></Testimonal>
            <Testimonal
              From="Social Club"
              Name="Jessica Smith"
              Quote="“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.\u2028 Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.”"
              Avatar_src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
            ></Testimonal>
            <Testimonal
              From="BeMe"
              Name="Logan Boy"
              Quote="“Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo..”"
              Avatar_src="/image502912-6wy-200h.png"
            ></Testimonal>
            <Testimonal
              From="Hello W."
              Name="Laraine Summers"
              Quote="“Rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.”"
              Avatar_src="/image202912-zekh-200h.png"
            ></Testimonal>
          </div>
          <div className={styles['column1']}>
            <Testimonal
              From="Handsly"
              Name="William McPau"
              Quote='"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”'
              Avatar_src="/image572912-0d3-200h.png"
            ></Testimonal>
            <Testimonal
              From="Share"
              Name="Mariah Mae"
              Quote="“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.”"
              Avatar_src="/image632913-swij-200h.png"
            ></Testimonal>
            <Testimonal
              From="Gather"
              Name="John Finati"
              Quote='"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”'
              Avatar_src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
            ></Testimonal>
            <Testimonal
              From="Zigo"
              Name="Mary Pau"
              Quote='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ”'
              Avatar_src="/image562913-ycff-200h.png"
            ></Testimonal>
          </div>
        </div>
        <span className={styles['text084']}>
          <span>Show more</span>
          <br></br>
        </span>
      </section>
      <section className={styles['action-bar']}>
        <div className={styles['action']}>
          <div className={styles['heading3']}>
            <span
              className={` ${styles['text087']} ${projectStyles['title']} `}
            >
              <span>Get leads now </span>
              <br></br>
              <span>with Active!</span>
            </span>
            <span className={styles['text091']}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
            <div
              className={` ${styles['get-started8']} ${projectStyles['template-button']} `}
            >
              <span className={styles['text092']}>
                <span>Start free</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className={styles['images']}>
            <img
              alt="image"
              src="/e564eaa3c4fab71792794d666a281742-1200w.png"
              className={styles['image1']}
            />
          </div>
        </div>
      </section>
      <section className={styles['faq']}>
        <div className={styles['heading4']}>
          <span className={` ${styles['text095']} ${projectStyles['title']} `}>
            Frequently asked questions
          </span>
          <span className={styles['text096']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. vv
          </span>
        </div>
        <div className={styles['accordion']}>
          <div
            data-faq="closed"
            className={projectStyles['accordion-container']}
          >
            <div className={styles['header1']}>
              <span className={styles['text097']}>
                — What is sit amet, consectetur adipiscing elit, sed do?
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <svg
                viewBox="0 0 1024 1024"
                className={projectStyles['accordion-icon']}
              >
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className={projectStyles['accordion-content']}>
              <span className={styles['text098']}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
          <div className={projectStyles['accordion-container']}>
            <div className={styles['header2']}>
              <span className={styles['text099']}>
                — Why is dolore magna aliqua excepteur sint
              </span>
              <svg
                viewBox="0 0 1024 1024"
                className={projectStyles['accordion-icon']}
              >
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className={projectStyles['accordion-content']}>
              <span className={styles['text100']}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
          <div
            data-faq="closed"
            className={projectStyles['accordion-container']}
          >
            <div className={styles['header3']}>
              <span className={styles['text101']}>
                — Is excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum?
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <svg
                viewBox="0 0 1024 1024"
                className={projectStyles['accordion-icon']}
              >
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className={projectStyles['accordion-content']}>
              <span className={styles['text102']}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
          <div
            data-faq="closed"
            className={projectStyles['accordion-container']}
          >
            <div className={styles['header4']}>
              <span className={styles['text103']}>
                — Who quasi architecto beatae vitae dicta sunt explicabo. Nemo
                enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                fugit, sed quia consequuntur magni
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <svg
                viewBox="0 0 1024 1024"
                className={projectStyles['accordion-icon']}
              >
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className={projectStyles['accordion-content']}>
              <span className={styles['text104']}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
          <div
            data-faq="closed"
            className={projectStyles['accordion-container']}
          >
            <div className={styles['header5']}>
              <span className={styles['text105']}>
                — Is minim veniam quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea commodo consequat.
              </span>
              <svg
                viewBox="0 0 1024 1024"
                className={projectStyles['accordion-icon']}
              >
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className={projectStyles['accordion-content']}>
              <span className={styles['text106']}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className={styles['container12']}>
            <Script
              html={`<script>
// Accordion - Code Embed

const accordionContainers = document.querySelectorAll(".accordionContainer"); // All accordion containers
const accordionContents = document.querySelectorAll(".accordionContent"); // All accordion content
const accordionIcons = document.querySelectorAll(".accordionIcon"); // All accordion icons

accordionContents.forEach((accordionContent) => {
    accordionContent.style.display = "none"; //Hides all accordion contents
});

accordionContainers.forEach((accordionContainer, index) => {
    accordionContainer.addEventListener("click", () => {
        accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
        });

        accordionIcons.forEach((accordionIcon) => {
            accordionIcon.style.transform = "rotate(0deg)"; // Resets all icon transforms to 0deg (default)
        });

        if (accordionContainer.classList.contains("accordion-open")) { // Checks if this container has class "accordion-open"
            accordionContainer.classList.remove("accordion-open"); // Removes class "accordion-open"
        } else {
            accordionContainers.forEach((accordionContainer) => {
                accordionContainer.classList.remove("accordion-open"); // Removes class "accordion-open" from all containers
            });

            accordionContainer.classList.add("accordion-open"); // Adds class "accordion-open" to this container
            accordionContents[index].style.display = "flex"; // Shows accordion content
            accordionIcons[index].style.transform = "rotate(180deg)"; // Rotates accordion icon 180deg
        }
    });
});

/*
Here's what the above is doing:
    1. Selects all accordion containers, contents, and icons
    2. Hides all accordion contents
    3. Adds an event listener to each accordion container
    4. When an accordion container is clicked, it:
        - Hides all accordion contents
        - Resets all icon transforms to 0deg (default)
        - Checks if this container has class "accordion-open"
            - If it does, it removes class "accordion-open"
            - If it doesn't, it:
                - Removes class "accordion-open" from all containers
                - Adds class "accordion-open" to this container
                - Shows accordion content
                - Rotates accordion icon 180deg
*/
</script>`}
            ></Script>
          </div>
        </div>
      </section>
      <footer className={styles['footer']}>
        <div className={styles['top']}>
          <div className={styles['left4']}>
            <span className={styles['text107']}>
              Subscribe to our newsletter
            </span>
            <div className={styles['subscription']}>
              <input
                type="email"
                placeholder="Enter your email"
                className={` ${styles['textinput']} ${projectStyles['input']} `}
              />
              <div className={styles['subscribe']}>
                <span className={styles['text108']}>Subscribe</span>
              </div>
            </div>
            <span className={styles['text109']}>
              By subscribing to our newsletter you agree with our Terms and
              Conditions.
            </span>
            <div className={styles['contact']}>
              <span className={styles['text110']}>Contact</span>
              <a
                href="mailto:use@active-app.com?subject=Support"
                className={styles['link']}
              >
                use@active-app.com
              </a>
            </div>
          </div>
          <div className={styles['right3']}>
            <div className={styles['category5']}>
              <span className={styles['text111']}>Solutions</span>
              <div className={styles['links2']}>
                <span className={styles['text112']}>Responsive Web Design</span>
                <span className={styles['text113']}>
                  Responsive Prototypesv
                </span>
                <span className={styles['text114']}>Design to Code</span>
                <span className={styles['text115']}>
                  Static Website Builder
                </span>
                <span className={styles['text116']}>
                  Static Website Generator
                </span>
              </div>
            </div>
            <div className={styles['category6']}>
              <span className={styles['text117']}>Company</span>
              <div className={styles['links3']}>
                <span className={styles['text118']}>About</span>
                <span className={styles['text119']}>Team</span>
                <span className={styles['text120']}>News</span>
                <span className={styles['text121']}>Partners</span>
                <span className={styles['text122']}>Careers</span>
                <span className={styles['text123']}>Press &amp; Media</span>
              </div>
            </div>
            <div className={styles['category7']}>
              <span className={styles['text124']}>Solutions</span>
              <div className={styles['links4']}>
                <span className={styles['text125']}>Twitter</span>
                <span className={styles['text126']}>Linkedin</span>
                <span className={styles['text127']}>Crunchbase</span>
                <span className={styles['text128']}>Instagram</span>
                <span className={styles['text129']}>Facebook</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles['bottom']}>
          <img
            alt="pastedImage"
            src="/pastedimage-no9b-1500h.png"
            className={styles['branding']}
          />
          <span className={styles['text130']}>Copyright © Active - 2022</span>
        </div>
      </footer>
    </div>
  )
}

export default Home
