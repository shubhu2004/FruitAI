import styled from "styled-components";

const Wrapper = styled.div`
  /* Full container styling */
  .about-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(135deg, #89f7fe, #66a6ff);
    padding: 20px;
  }

  /* Card-like section */
  .about-content {
    background-color: white;
    padding: 40px;
    border-radius: 20px;
    text-align: center;
    max-width: 400px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  }

  h1 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 20px;
  }

  p {
    font-size: 1rem;
    color: #666;
    margin-bottom: 30px;
    line-height: 1.6;
  }

  /* Button styling */
  button {
    background-color: #000;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 30px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  button:hover {
    background-color: #333;
  }
`;
export default Wrapper;
