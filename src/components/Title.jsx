import styled from "styled-components";

const TitleSectionF = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const TitleSection_H3 = styled.h3`
  font-size: 15px;
  font-weight: 600;
  color: #3e7e3e;
  text-transform: uppercase;
`;
const TitleSection_H2 = styled.h3`
  font-size: 34px;
  margin-bottom: 25px;
  line-height: 42px;
  font-weight: 800;
`;
const TitleSection_P = styled.p`
  font-size: 15px;
`;

const Title = ({ title, caption, text }) => {
  return (
    <TitleSectionF>
        <TitleSection_H3>{title}</TitleSection_H3>
        <TitleSection_H2>{caption}</TitleSection_H2>
        <TitleSection_P>{text}</TitleSection_P>
    </TitleSectionF>
  );
};

export default Title;
