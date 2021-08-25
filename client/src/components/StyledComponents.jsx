import styled from 'styled-components'

const Banana = styled.button`
background-color: green;
font-size: 45px
`

const NotABanana = styled.p`
color: yellow;
`

export default function StyledComponents() {

  return (<>
    <Banana>Styled Components</Banana>
    <NotABanana>This is not a banana</NotABanana>
    </>)
}