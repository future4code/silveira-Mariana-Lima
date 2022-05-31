import styled from "styled-components";

export const Container = styled.div`
  font-size: 20px;
`;
export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  input {
    margin: 10px;
  }
  h3 {
    display: flex;
    justify-content: center;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-image: linear-gradient(#ff512f 0%, #f09819 51%, #ff512f 100%);
`;

export const Button = styled.form`
  background-image: linear-gradient(
    45deg,
    #ff512f 0%,
    #f09819 51%,
    #ff512f 100%
  );
  margin-top: 10px;
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
    /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }

  :active {
    transform: scale(0.95);
  }
`;
