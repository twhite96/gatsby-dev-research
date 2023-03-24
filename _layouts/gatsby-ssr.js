import React from "react";

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <>
      <script
        src='https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/prism.min.js'
        integrity='sha512-axJX7DJduStuBB8ePC8ryGzacZPr3rdLaIDZitiEgWWk2gsXxEFlm4UW0iNzj2h3wp5mOylgHAzBzM4nRSvTZA=='
        crossorigin='anonymous'
        referrerpolicy='no-referrer'
      ></script>
      <script
        src='https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/components/prism-jsx.min.js'
        integrity='sha512-KNvdEaPrmTihMKmH/8CeHfMskGdt5WaPyMoNWVkg39w9/itQA68/tNPi2zcczyr2RvRprXai8aH8zftj89Jg1g=='
        crossorigin='anonymous'
        referrerpolicy='no-referrer'
      ></script>
      <script
        src='https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/components/prism-python.min.js'
        integrity='sha512-nvWJ2DdGeQzxIYP5eo2mqC+kXLYlH4QZ/AWYZ/yDc5EqM74jiC5lxJ+8d+6zI/H9MlsIIjrJsaRTgLtvo+Jy6A=='
        crossorigin='anonymous'
        referrerpolicy='no-referrer'
      ></script>
      <script
        src='https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/components/prism-tsx.min.js'
        integrity='sha512-ueCte/ZwNI460xA3ipwvMk/emlgFYNZGBLlc3EMqZqJbQoLaOhoCpY1l6dHbfNz2p+A9E/sQoUdNRVvu/cqQEw=='
        crossorigin='anonymous'
        referrerpolicy='no-referrer'
      ></script>
      <script
        src='https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/components/prism-ruby.min.js'
        integrity='sha512-nw4lRvuD47DTW65G2USfNSu0VSPdl+vJSMz5sR+YQ3/HtG7w4S7pDvh1ygqVuOVSpHDHKqteZ2GroJAPke+3JQ=='
        crossorigin='anonymous'
        referrerpolicy='no-referrer'
      ></script>
      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/themes/prism.min.css'
        integrity='sha512-tN7Ec6zAFaVSG3TpNAKtk4DOHNpSwKHxxrsiw4GHKESGPs5njn/0sMCUMl2svV4wo4BK/rCP7juYz+zx+l6oeQ=='
        crossorigin='anonymous'
        referrerpolicy='no-referrer'
      />
      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/plugins/line-highlight/prism-line-highlight.min.css'
        integrity='sha512-nXlJLUeqPMp1Q3+Bd8Qds8tXeRVQscMscwysJm821C++9w6WtsFbJjPenZ8cQVMXyqSAismveQJc0C1splFDCA=='
        crossorigin='anonymous'
        referrerpolicy='no-referrer'
      />
    </>,
  ]);
};
