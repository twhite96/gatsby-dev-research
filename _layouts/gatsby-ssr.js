import React from "react";

const headComponents = [
  <>
    <script
      src='https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/prism.min.js'
      integrity='sha512-axJX7DJduStuBB8ePC8ryGzacZPr3rdLaIDZitiEgWWk2gsXxEFlm4UW0iNzj2h3wp5mOylgHAzBzM4nRSvTZA=='
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
    <link rel='stylesheet' href='./css/styles.css' key='custom' />,
    <link rel='stylesheet' href='./css/laserwave.css' key='custom' />,
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
