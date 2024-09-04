import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="my-10 text-white">
      <h1 className="text-[35px] font-[700] text-center text-[#10e5ea] underline">Contact</h1>
      <div className="flex flex-col items-center gap-10 my-10">
        <div className="flex items-center gap-3 animate-slide-in-1 transform transition-transform duration-500 ease-in-out hover:-translate-y-2 cursor-pointer">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_6_180)">
              <path d="M24.2866 17.6661L18.8179 15.3223C18.5842 15.2227 18.3246 15.2018 18.078 15.2625C17.8315 15.3233 17.6113 15.4625 17.4507 15.6592L15.0288 18.6182C11.2279 16.8261 8.16904 13.7673 6.37695 9.96635L9.33594 7.54448C9.53305 7.38417 9.67256 7.164 9.73335 6.91731C9.79414 6.67062 9.7729 6.41083 9.67285 6.17729L7.3291 0.708542C7.21929 0.456788 7.02508 0.25124 6.77996 0.12734C6.53483 0.00344002 6.25416 -0.0310452 5.98633 0.0298307L0.908203 1.20171C0.649985 1.26133 0.419602 1.40672 0.254656 1.61415C0.0897096 1.82157 -5.94829e-05 2.07878 2.95713e-08 2.3438C2.95713e-08 14.8682 10.1514 25 22.6562 25C22.9213 25.0002 23.1787 24.9105 23.3862 24.7455C23.5937 24.5806 23.7392 24.3501 23.7988 24.0918L24.9707 19.0137C25.0312 18.7446 24.996 18.4628 24.8711 18.2168C24.7463 17.9708 24.5396 17.7761 24.2866 17.6661Z" fill="white" />
            </g>
            <defs>
              <clipPath id="clip0_6_180">
                <rect width="25" height="25" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <div className="leading-[20px]">
            <p>+321 5487675</p>
            <p>+321 5487675</p>
          </div>
        </div>
        <div className="flex items-center gap-3 animate-slide-in-2 transform transition-transform duration-500 ease-in-out hover:-translate-y-2 cursor-pointer">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.5264 9.31641C24.7168 9.16504 25 9.30664 25 9.5459V19.5312C25 20.8252 23.9502 21.875 22.6562 21.875H2.34375C1.0498 21.875 0 20.8252 0 19.5312V9.55078C0 9.30664 0.27832 9.16992 0.473633 9.32129C1.56738 10.1709 3.01758 11.25 7.99805 14.8682C9.02832 15.6201 10.7666 17.2021 12.5 17.1924C14.2432 17.207 16.0156 15.5908 17.0068 14.8682C21.9873 11.25 23.4326 10.166 24.5264 9.31641ZM12.5 15.625C13.6328 15.6445 15.2637 14.1992 16.084 13.6035C22.5635 8.90137 23.0566 8.49121 24.5508 7.31934C24.834 7.09961 25 6.75781 25 6.39648V5.46875C25 4.1748 23.9502 3.125 22.6562 3.125H2.34375C1.0498 3.125 0 4.1748 0 5.46875V6.39648C0 6.75781 0.166016 7.09473 0.449219 7.31934C1.94336 8.48633 2.43652 8.90137 8.91602 13.6035C9.73633 14.1992 11.3672 15.6445 12.5 15.625Z" fill="white" />
          </svg>
          <p>saad0306058@dmail.com</p>
        </div>
        <div className="flex items-center gap-3 animate-slide-in-3 transform transition-transform duration-500 ease-in-out hover:-translate-y-2 cursor-pointer">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.7051 0.171806L1.40331 9.54192C-0.938978 10.6352 -0.158216 14.0707 2.34032 14.0707H10.9297V22.6601C10.9297 25.1586 14.3652 25.9399 15.4585 23.5971L24.8286 3.29534C25.6094 1.42083 23.5791 -0.609444 21.7051 0.171806Z" fill="white" />
          </svg>
          <p>Zriabo,Ashulia,Saver,Dhaka</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;