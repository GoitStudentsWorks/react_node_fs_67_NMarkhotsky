import{s as e,b as t,a as o,j as a}from"./index-8adebdcc.js";const s="/react_node_fs_67_NMarkhotsky/assets/bg_desktop-9087b7f4.webp",i="/react_node_fs_67_NMarkhotsky/assets/bg_desktop@2x-c4d85c9b.webp",r="/react_node_fs_67_NMarkhotsky/assets/bg_tablet-ff99c698.webp",n="/react_node_fs_67_NMarkhotsky/assets/bg_tablet@2x-7daf05ac.webp",b="/react_node_fs_67_NMarkhotsky/assets/bg_mobile-7969756c.webp",c="/react_node_fs_67_NMarkhotsky/assets/bg_mobile@2x-6ff8cc11.webp",d=e.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${b});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;

  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    background-image: url(${c});
  }

  @media ${t} {
    width: 100vw;
    height: 100vh;
    background-image: url(${r});
    background-position-y: -68px;

    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background-image: url(${n});
      background-position-y: -68px;
    }
  }

  @media ${o} {
    background-image: url(${s});
    background-position-y: -68px;
    height: 100vh;

    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background-image: url(${i});
      background-position-y: -68px;
    }
  }

  z-index: -1;
`,k=()=>a.jsx(d,{});export{k as B};
