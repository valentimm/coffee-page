import styled from 'styled-components';

export const Container = styled.div`
  .main{	
  display: flex;
  width: 100%;
  height: 34rem;
  align-items: center;
  justify-content: space-between;
  padding: 5.75rem 10rem;
  }
  .text{
    width: 36rem;
  }
  img{
    width: 29.75rem;
    height: 22.5rem;
  }
  .icons{ 
    display: grid;
    grid-template-columns: 1fr 1fr; 
    align-items: center;
    justify-content: space-between;
    margin-top: 4.125rem;
    line-height: 130%;
  }
  span{
    font-size: 1rem;
    line-height: 130%;
    align-items: center;
    gap: 0.5rem;
  }
`
