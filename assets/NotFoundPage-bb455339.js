import{s as a,a as s,b as o,j as e,N as i,I as n}from"./index-e449b0a6.js";import{B as c}from"./Btn.styled-e0612e21.js";import{B as r}from"./BackgroundWrapper-c46803dd.js";const d=a.div`
  @media ${s} {
    width: 100%;
    height: calc(100vh - 128px);
  }
`,x=a.h1`
  color: ${t=>t.theme.colors.black};
  font-family: ${t=>t.theme.fonts.main.bold};
  font-size: ${t=>t.theme.fontSizes.xl};
  text-align: center;
  line-height: 33px;
  margin: auto;
  padding: 80px 0;
  width: 280px;

  @media ${o} {
    padding-top: 60px;
    width: 450px;
    font-family: ${t=>t.theme.fonts.main.semiBold};
    font-size: ${t=>t.theme.fontSizes.xxxl};
    line-height: 41.6px;
  }

  @media ${s} {
  }
`,m=a.span`
  padding: 0 100px;
  @media screen and (min-width: 767px) {
    padding: 0;
  }
`,h=a.div`
  margin: auto;
  margin-bottom: 60px;

  @media ${o} {
    margin: auto;
    margin-bottom: 70px;
  }

  @media ${s} {
    margin: auto;
    margin-bottom: 18px;
  }
`,p=a.img`
  margin: auto;
  max-width: 280px;
  height: 123px;

  @media ${o} {
    max-width: 704px;
    height: 308px;
  }

  @media ${s} {
    max-width: 822px;
    height: 360px;
  }
`,l=a(c)`
  background: ${t=>t.theme.colors.blue};
  color: ${t=>t.theme.colors.textBtn};

  & > svg > use {
    fill: ${t=>t.theme.colors.textBtn};
  }

  &:hover,
  &:focus {
    background: ${t=>t.theme.colors.blueGradient};
  }
`,g="/react_node_fs_67_NMarkhotsky/assets/catdesktop-5f423fe7.png",f="/react_node_fs_67_NMarkhotsky/assets/catdesktop@2x-63410937.png",u="/react_node_fs_67_NMarkhotsky/assets/cattablet@2x-3747ec80.png",k="/react_node_fs_67_NMarkhotsky/assets/catmobile@2x-01c6e8a2.png",b=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{}),e.jsxs(d,{children:[e.jsxs(x,{children:[e.jsx(m,{children:"Ooops!"})," This page not found :("]}),e.jsx(h,{children:e.jsxs("picture",{children:[e.jsx("source",{srcSet:f,media:"(min-width: 1280px)"}),e.jsx("source",{srcSet:u,media:"(min-width: 768px) and (max-width: 1279px)"}),e.jsx("source",{srcSet:k,media:"(max-width: 767px)"}),e.jsx(p,{src:g,alt:"Cat with tongue"})]})}),e.jsx(i,{to:"/",children:e.jsxs(l,{children:["To main page",e.jsx(n,{iconName:"icon-pawprint",width:"24px",height:"24px",fill:"#54ADFF"})]})})]})]});export{b as default};
