import React from "react";

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <>
      <script
        src='https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js'
        integrity='sha512-7Z9J3l1+EYfeaPKcGXu3MS/7T+w19WtKQY/n+xzmw4hZhJ9tyYmcUS+4QqAlzhicE5LAfMQSF3iFTK9bQdTxXg=='
        crossorigin='anonymous'
        referrerpolicy='no-referrer'
      ></script>
      <script
        src='https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-jsx.min.js'
        integrity='sha512-m3JYEI6gx5fh9jF10FjGoMzVKcV2N6nchcDcqPCdI1L3R2WQV7br2XVNR8iTLb2daOMRl3zldbcfT40xU2ntVw=='
        crossorigin='anonymous'
        referrerpolicy='no-referrer'
      ></script>
      <script
        src='https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-python.min.js'
        integrity='sha512-AKaNmg8COK0zEbjTdMHJAPJ0z6VeNqvRvH4/d5M4sHJbQQUToMBtodq4HaV4fa+WV2UTfoperElm66c9/8cKmQ=='
        crossorigin='anonymous'
        referrerpolicy='no-referrer'
      ></script>
      <script
        src='https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-tsx.min.js'
        integrity='sha512-xjGCJ9YxyZBfYTCHsEjkOZMoOse1W3cKMXv1szXrxs68myuXt0YTj3/xKPar6iDMlXzTUSEqwUxprWcyp+plaw=='
        crossorigin='anonymous'
        referrerpolicy='no-referrer'
      ></script>
    </>,
  ]);
};
