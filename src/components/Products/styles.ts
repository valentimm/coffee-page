import styled from "styled-components";

export const ProductsContainer = styled.div`
.products{
    display: grid;
    grid-gap: 3rem;
    justify-content:flex-start;
    margin-left: 0rem;
    width: 100%;
    align-items: center;
    padding: 5.75rem 10rem;
  }
  .productsList{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr; 
    grid-gap: 5rem 11rem;
  }
  .product{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 16rem;
    height: 20rem;
    background-color: ${props => props.theme['base-card']};
    border-radius: 6px 36px;
    padding: 1.25rem;
  }
  .product img{
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -9rem;
  }
  .product a{
    color: ${props => props.theme['yellow-dark']};
    background-color: ${props => props.theme['yellow-light']};
    border-radius: 100px;
    font-size: 0.625rem;
    font-weight: 700;
    padding: 0.25rem 0.5rem;
    line-height: 130%;
  }
  .product h1{
    font-size: 1.25rem;
  }
  .product p{
    font-size: 0.875rem;
    color: ${props => props.theme['base-label']};
    text-align: center;
    margin-top: 0.5rem;
  }
  .buy{
    display: inline-flex;
    position: absolute;
    margin-top: 13rem;
    align-items: center;
    justify-content: space-between;
    width: 13rem;
    height: 2.375rem;
    line-height: 130%;
  }
  .buy h2{
    font-size: 0.875rem;
    color: ${props => props.theme['base-text']};
    font-weight: regular;
    font-family: 'Roboto', sans-serif;
    margin-top: 0rem;
  }
  .buy strong{
    font-size: 1.5rem;
    color: ${props => props.theme['base-text']};
    font-weight: extra-bold;
    font-family: 'Baloo 2', cursive;
  }
  .buy span{
    font-size: 1rem;
    color: ${props => props.theme['base-title']};
    background-color: ${props => props.theme['base-button']};
    border-radius: 6px;
  }
  .buy button {
    background-color: ${props => props.theme['purple-dark']};
    width: 2.375rem;
    height: 2.375rem;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
}
`