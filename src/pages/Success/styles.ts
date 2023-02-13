import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  padding: 5.75rem 15rem;
  max-height: 10rem;
#main{
  display: flex;
  align-items: center;
  gap: 22rem;
}
h1 {
  font-size: 2rem;
  font-weight: 800;
  color: ${props => props.theme['yellow-dark']};
  padding: 0.25rem;
}
h2 {
  font-size: 1.25rem;
  font-weight: 400;
  color: ${props => props.theme['base-subtitle']};
  padding: 0.25rem;
}
#infoCompiled {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 1rem;
  border-radius: 6px 36px;
  border: 1px solid ${props => props.theme['purple']};
  width: 30rem;

}
#pin {
  display: flex;
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
  background: ${props => props.theme['purple']};
  align-items: center;
  justify-content: center;
}
#timer {
  display: flex;
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
  background: ${props => props.theme['yellow']};
  align-items: center;
  justify-content: center;
}
#cash {
  display: flex;
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
  background: ${props => props.theme['yellow-dark']};
  align-items: center;
  justify-content: center;
}
span {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: 400;
}
a {
  display: block;
}
`
