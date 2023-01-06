import styled from "styled-components";

export const Wrapper = styled.div `
  width: 100vw;
  margin: 0px auto;
  height: 936px;
  padding: 0px 187px 232px 57px;
  text-align: left;
  background-color: rgba(0, 0, 0, 0.5);
  background-image: url(${"https://picsum.photos/200/300"});
  background-repeat: no-repeat;
  background-size: cover;
`

export const LogoWrapper = styled.div `
  display: flex;
  margin: 50px 0px 350px 0px;
`

export const Pic = styled.img `
  width: 35px;
  height: 35px;
  margin-right: 9px;
`

export const Logo = styled.img `
  width: 100px;
  height: 40px;
`

export const TitleStyle = styled.h1 `
  font-family: ${p => p.theme.fonts.body};
  color: ${p => p.theme.colors.primaryBackgroundButton};
  margin-bottom: 30px;
`

export const TextStyle = styled.h2 `
  font-family: ${p => p.theme.fonts.body};
  color: ${p => p.theme.colors.primaryBackgroundButton};
  margin-top: 10px;
`

export const SubTextStyle = styled.p `
  font-family: ${p => p.theme.fonts.body};
  color: ${p => p.theme.colors.primaryBackgroundButton};
  margin-top: 0px auto;
`





