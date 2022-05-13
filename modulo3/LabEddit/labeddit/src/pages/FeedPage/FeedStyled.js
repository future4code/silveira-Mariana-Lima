import styled from "styled-components";

export const Container = styled.div`
  border-radius: 2px black;
  display: grid;
  justify-items: center;
  margin-top: 10px;
  input {
    display: flex;
    align-items: center;
  }
  textarea {
    margin-top: 10px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const Card = styled.form`
  background: #f18c27;
  margin: 10px 0 10px;
  width: 70%;
  padding: 10px;
  text-decoration: none;
`;

export const Divcard = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.form`
  background-image: linear-gradient(
    45deg,
    #ff512f 0%,
    #f09819 51%,
    #ff512f 100%
  );
  padding: 15px 30px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  border-radius: 10px;
  display: block;
  border: 0px;
  font-weight: 700;
  box-shadow: 0px 0px 14px -7px #f09819;

  :hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }

  :active {
    transform: scale(0.95);
  }
`;
