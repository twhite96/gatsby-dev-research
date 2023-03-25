import React from "react";

const headComponents = [
  <>
    <script
      src='https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js'
      integrity='sha512-7Z9J3l1+EYfeaPKcGXu3MS/7T+w19WtKQY/n+xzmw4hZhJ9tyYmcUS+4QqAlzhicE5LAfMQSF3iFTK9bQdTxXg=='
      crossorigin='anonymous'
      referrerpolicy='no-referrer'
    ></script>
    ,
    <link
      rel='stylesheet'
      href='https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/themes/prism.min.css'
      integrity='sha512-tN7Ec6zAFaVSG3TpNAKtk4DOHNpSwKHxxrsiw4GHKESGPs5njn/0sMCUMl2svV4wo4BK/rCP7juYz+zx+l6oeQ=='
      crossorigin='anonymous'
      referrerpolicy='no-referrer'
    />
    <link
      rel='stylesheet'
      href='https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css'
      integrity='sha512-tN7Ec6zAFaVSG3TpNAKtk4DOHNpSwKHxxrsiw4GHKESGPs5njn/0sMCUMl2svV4wo4BK/rCP7juYz+zx+l6oeQ=='
      crossorigin='anonymous'
      referrerpolicy='no-referrer'
    />
    <link rel='stylesheet' href='./assets/css/styles.css' />,
    <link rel='stylesheet' href='./assets/css/laserwave.css' />,
    <link
      rel='shortcut icon'
      href='images/favicon.svg'
      type='image/svg+xml'
      key='favicon'
    />
    ,
  </>,
];

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents(headComponents);
};
