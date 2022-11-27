// Third party
import styled from 'styled-components'

export const ContainerLayout = styled.div`
  display: flex;
  flex-direction: column;
  background: red;

  .container_children_layout {
    display: flex;
  }
`

export const ContainerSideMenu = styled.div`
display: flex;
background: blue;
`

export const ContainerTopMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 1rem;
  height: var(--height_menu);
  background: var(--background_page_color);

  .content_menu_logo {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`

export const Logo = styled.img`
  width: 2rem;
`