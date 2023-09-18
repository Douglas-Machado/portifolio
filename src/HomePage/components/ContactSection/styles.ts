import styled from "styled-components";

export const ContactMain = styled.section`
  margin: 0 auto;
  min-height: 600px;
  text-align: center;
`;

export const ContactForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
`;

export const UserInput = styled.input`
  width: 50%;
  height: 28px;
  border-radius: 4px;
  padding-left: 12px;
  font-family: "Nunito", sans-serif;
  font-size: 18px;

  &:focus {
    border: 0;
    outline: 2px solid orange;
  }
`;

export const UserMessage = styled.textarea`
  border-radius: 8px;
  width: 50%;
  min-height: 200px;
  padding-left: 8px;
  font-family: "Nunito", sans-serif;
  font-size: 18px;

  &:focus {
    border: 0;
    outline: 2px solid orange;
  }

  &::placeholder {
    font-size: 14px;
  }
`;
