import React from "react";

import Link from "next/link";

type props= {
  toggleDrawer: () => void;
}

const SidebarButton = ({ toggleDrawer }:props) => {
  const handleLinkClick = () => {
    toggleDrawer();
  };
  return (
    <div>
      {/* SIDEBAR */}
      <aside
        className="fixed top-0 left-0 z-40 w-[88%] h-screen min-[650px]:hidden">
        <div className="h-full px-3 py-4 overflow-y-auto bg-[#260821]">
          <ul className="space-y-2 font-medium">
            <p className="text-[35px] text-white font-[700] px-2" style={{ textShadow: '2px 2px 5px rgba(16, 229, 234)' }}>SAAD</p>
            <li>
              <Link href="/#home"
                onClick={handleLinkClick}
                className="flex items-center p-2 text-[#7d7d7d] rounded-lg dark:text-[#7d7d7d] hover:bg-[#0A96D4] dark:hover:bg-[#0A96D4] group">
                <svg width="33" height="30" stroke="#8b96a5" className="w-7 h-7 group-hover:stroke-white" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.17424 11.7664H1.75781L12.6317 1.69531L23.5056 11.7664H21.0892M4.17424 11.7664V19.5995C4.17424 20.193 4.42883 20.7623 4.88199 21.182C5.33516 21.6017 5.94979 21.8375 6.59066 21.8375H18.6728C19.3137 21.8375 19.9283 21.6017 20.3815 21.182C20.8346 20.7623 21.0892 20.193 21.0892 19.5995V11.7664" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M9.0061 21.8368V15.1228C9.0061 14.5292 9.26069 13.96 9.71386 13.5403C10.167 13.1206 10.7817 12.8848 11.4225 12.8848H13.839C14.4798 12.8848 15.0945 13.1206 15.5476 13.5403C16.0008 13.96 16.2554 14.5292 16.2554 15.1228V21.8368" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span className="ms-3 group-hover:text-white">Home</span>
              </Link>
            </li>
            <li>
              <Link href="/#about"
                onClick={handleLinkClick}
                className="flex items-center p-2 text-[#7d7d7d] rounded-lg dark:text-[#7d7d7d] hover:bg-[#0A96D4] dark:hover:bg-[#0A96D4] group">
                <svg width="24" height="24" stroke="#8B96A5" className="w-7 h-7 group-hover:stroke-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 9H13V7H11M12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM11 17H13V11H11V17Z" />
                </svg>
                <span className="ms-3 group-hover:text-white">About</span>
              </Link>
            </li>
            <li>
              <Link href="/#services"
                onClick={handleLinkClick}
                className="flex items-center p-2 text-[#7d7d7d] rounded-lg dark:text-[#7d7d7d] hover:bg-[#0A96D4] dark:hover:bg-[#0A96D4] group">
                <svg width="24" height="24" stroke="#8B96A5" className="w-7 h-7 group-hover:stroke-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 9H13V7H11M12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM11 17H13V11H11V17Z" />
                </svg>
                <span className="ms-3 group-hover:text-white">Services</span>
              </Link>
            </li>
            <li>
              <Link href="/#projects"
                onClick={handleLinkClick}
                className="flex items-center p-2 text-[#7d7d7d] rounded-lg dark:text-[#7d7d7d] hover:bg-[#0A96D4] dark:hover:bg-[#0A96D4] group">
                <svg width="24" height="24" stroke="#8B96A5" fill="none" className="w-7 h-7 group-hover:stroke-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 7C12.5523 7 13 6.55228 13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6C11 6.55228 11.4477 7 12 7Z" />
                  <path d="M6 17H18V19H6V17ZM10 11.83L12.792 14.624L16.724 10.689L18 12V8H14L15.31 9.275L12.791 11.794L10 9L6 13L7.414 14.414L10 11.83Z" />
                  <path d="M19 3.00007H15.702C15.603 2.85282 15.4961 2.71096 15.382 2.57507L15.372 2.56307C14.637 1.70764 13.6034 1.16475 12.482 1.04507C12.1635 0.984977 11.8365 0.984977 11.518 1.04507C10.3966 1.16475 9.36298 1.70764 8.628 2.56307L8.618 2.57507C8.5039 2.71063 8.39708 2.85216 8.298 2.99907V3.00007H5C4.20459 3.00086 3.44199 3.31719 2.87956 3.87963C2.31712 4.44206 2.00079 5.20466 2 6.00007V20.0001C2.00079 20.7955 2.31712 21.5581 2.87956 22.1205C3.44199 22.6829 4.20459 22.9993 5 23.0001H19C19.7954 22.9993 20.558 22.6829 21.1204 22.1205C21.6829 21.5581 21.9992 20.7955 22 20.0001V6.00007C21.9992 5.20466 21.6829 4.44206 21.1204 3.87963C20.558 3.31719 19.7954 3.00086 19 3.00007ZM20 20.0001C20 20.2653 19.8946 20.5196 19.7071 20.7072C19.5196 20.8947 19.2652 21.0001 19 21.0001H5C4.73478 21.0001 4.48043 20.8947 4.29289 20.7072C4.10536 20.5196 4 20.2653 4 20.0001V6.00007C4 5.73485 4.10536 5.4805 4.29289 5.29296C4.48043 5.10543 4.73478 5.00007 5 5.00007H9.55C9.66476 4.43492 9.97136 3.92683 10.4179 3.56188C10.8644 3.19693 11.4233 2.99756 12 2.99756C12.5767 2.99756 13.1356 3.19693 13.5821 3.56188C14.0286 3.92683 14.3352 4.43492 14.45 5.00007H19C19.2652 5.00007 19.5196 5.10543 19.7071 5.29296C19.8946 5.4805 20 5.73485 20 6.00007V20.0001Z" />
                </svg>
                <span className="ms-3 group-hover:text-white">Projects</span>
              </Link>
            </li>
            <li>
              <Link href="/#contact"
                onClick={handleLinkClick}
                className="flex items-center p-2 text-[#7d7d7d] rounded-lg dark:text-[#7d7d7d] hover:bg-[#0A96D4] dark:hover:bg-[#0A96D4] group">
                <svg width="24" height="24" stroke="#8B96A5" className="w-7 h-7 group-hover:stroke-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_2266_27607)">
                    <path d="M21.2937 23.0125H5.29944C4.6295 23.0125 3.987 22.7464 3.51329 22.2727C3.03957 21.7989 2.77344 21.1564 2.77344 20.4865C2.77344 19.8166 3.03957 19.1741 3.51329 18.7004C3.987 18.2266 4.6295 17.9605 5.29944 17.9605H19.6103M19.6103 17.9605C20.0568 17.9605 20.485 17.7831 20.8007 17.4674C21.1164 17.1517 21.2937 16.7236 21.2937 16.2771V2.80794C21.2937 2.36147 21.1164 1.93328 20.8007 1.61758C20.485 1.30187 20.0568 1.12451 19.6103 1.12451H5.29944C4.64145 1.12473 4.00953 1.38177 3.53822 1.84091C3.06691 2.30006 2.79343 2.92504 2.77601 3.5828V20.4188M19.6103 17.9605V23.0125" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12.8979 14.1188C13.4685 14.3605 14.1013 14.4141 14.7044 14.272C15.3076 14.1299 15.8499 13.7995 16.2527 13.3286L16.6744 12.9051C16.8585 12.7577 16.9785 12.5447 17.0091 12.3108C17.0398 12.0769 16.9789 11.8402 16.839 11.6503L15.4744 10.2874C15.2847 10.1474 15.0481 10.0861 14.8142 10.1165C14.5804 10.1468 14.3673 10.2664 14.2196 10.4503C14.0719 10.6336 13.8592 10.7529 13.6257 10.7833C13.3922 10.8136 13.1561 10.7527 12.9664 10.6131L10.7824 8.43428C10.6424 8.24452 10.5811 8.00797 10.6115 7.77409C10.6418 7.54022 10.7614 7.32714 10.9453 7.17942C11.1294 7.03195 11.2493 6.81898 11.28 6.5851C11.3107 6.35121 11.2497 6.11452 11.1099 5.92456L9.74528 4.55999C9.55532 4.42014 9.31864 4.35917 9.08475 4.38984C8.85086 4.42051 8.6379 4.54045 8.49043 4.72456L8.07043 5.14285C7.60098 5.54671 7.27149 6.08887 7.12921 6.69156C6.98692 7.29426 7.03916 7.92653 7.27843 8.4977C8.66138 10.8041 10.5914 12.7342 12.8979 14.1171V14.1188Z" stroke-linecap="round" stroke-linejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_2266_27607">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="ms-3 group-hover:text-white">Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default SidebarButton;