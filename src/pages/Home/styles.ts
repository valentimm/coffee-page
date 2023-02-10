import styled from 'styled-components';
import blur from '../../assets/blur-background.svg';

export const Container = styled.div`
  .main{	
  display: flex;
  width: 100%;
  height: 34rem;
  align-items: center;
  justify-content: space-between;
  padding: 5.75rem 10rem;
  background: url(${blur}) no-repeat;
  background-size: cover;
  }
  .text{
    width: 39rem;
  }
  img{
    width: 29.75rem;
    height: 22.5rem;
  }
  h2{
    margin-top: 1rem;
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
    display: inline-flex;
    align-items: center;
    padding: 0.5rem;
  }
  #cart{
    background-color: ${props => props.theme['yellow-dark']};
    color: ${props => props.theme['white']};
    border-radius: 9999px;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #package{
    background-color: ${props => props.theme['base-text']};
    color: ${props => props.theme['white']};
    border-radius: 9999px;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #timer{
    background-color: ${props => props.theme['yellow']};
    color: ${props => props.theme['white']};
    border-radius: 9999px;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #coffee{
    background-color: ${props => props.theme['purple']};
    color: ${props => props.theme['white']};
    border-radius: 9999px;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  
`
