import{s as a,a as i,b as s,j as t,t as o}from"./index-d0ebe4d1.js";import{B as n}from"./BackgroundWrapper-50df7cc5.js";const m=a.section`
  width: 100%;
  height: calc(100vh - 128px);

  @media ${i} {
    position: relative;
    display: flex;
    margin-bottom: 0;
    width: 100%;
  }
`,p=a.h1`
  z-index: 20;
  margin-top: 60px;
  font-family: ${e=>e.theme.fonts.main.bold};
  font-size: ${e=>e.theme.fontSizes.xxxl};
  line-height: 1.4;
  color: ${e=>e.theme.colors.text};
  text-align: left;

  @media ${s} {
    margin-top: 80px;
    margin-bottom: 27px;

    width: 588px;
    height: 200px;
    font-size: ${e=>e.theme.fontSizes.gigantic};
  }

  @media ${i} {
    margin-top: 188px;
    margin-bottom: 248px;

    width: 501px;
    height: 264px;
    font-family: ${e=>e.theme.fonts.main.extraBold};
    line-height: 1.3;
  }
`,r=a.img`
  position: absolute;
  width: 100%;
  left: 0px;

  @media ${s} {
    transform: translateY(-10%);
  }

  @media ${i} {
    width: auto;
    height: calc(100vh - 70px);
    left: auto;
    right: 0px;
    transform: none;
  }
`,x="/react_node_fs_67_NMarkhotsky/assets/mp-mobile2x-1d663d35.webp",d="/react_node_fs_67_NMarkhotsky/assets/mp-tablet2x-8a72873c.webp",h="/react_node_fs_67_NMarkhotsky/assets/mp-desktop1x-e906f32d.webp",l="/react_node_fs_67_NMarkhotsky/assets/mp-desktop2x-fc2e63e4.webp";function f(){return t.jsxs(t.Fragment,{children:[t.jsx(n,{}),t.jsxs(m,{children:[t.jsx(p,{children:o("main_hero_title")}),t.jsxs("picture",{children:[t.jsx("source",{srcSet:x,media:"(max-width: 767px)",type:"image/png",alt:"mobile image"}),t.jsx("source",{srcSet:d,media:"(min-width: 768px) and (max-width: 1279px)",type:"image/png",alt:"tablet image"}),t.jsx("source",{srcSet:l,media:"(min-width: 1280px)",type:"image/png",alt:"desktop image"}),t.jsx(r,{srcSet:h,alt:"puppy"})]})]})]})}export{f as default};
