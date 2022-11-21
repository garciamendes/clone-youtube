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

  .content_search {
    display: flex;
    align-items: center;
    width: 40%;

    .input {
      display: flex;
      justify-content: space-between;
      border: 1px solid var(--divider_color);
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      padding-left: 1.2rem;
      height: 2.5rem;
      width: 87%;

      input {
        background: transparent;
        border: none;
        font-size: 1.2rem;
        padding-right: .5rem;
        width: 100%;
        outline: 0;
      }
    }

    .send_search {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
      border: 1px solid var(--divider_color);
      height: 2.5rem;
      width: 13%;
      padding-right: .3rem;
      background: var(--background_item_color);

      &:hover {
        background-color: var(--item_active_color);
      }
    }
  }
`

export const Logo = styled.img`
  width: 2rem;
`