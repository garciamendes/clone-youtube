// Third party
import styled from 'styled-components'

// Local
import { ILoadingProps, IMenuExpanded } from './types'

export const ContainerLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .container_children_layout {
    display: flex;
    height: calc(100% - var(--height_menu));
  }
`

export const ContainerSideMenu = styled.div<IMenuExpanded>`
  display: flex;
  height: 100%;
  min-width: ${props => props.isMenuExpanded ? 'var(--size_width_menu_expanded)' : 'var(--size_width_menu)'};
`

export const ContainerTopMenu = styled.div<ILoadingProps>`
  position: relative;
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

    .more_info_menu {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50px;
      height: 35px;
      width: 35px;
      transition: .24s all;

      &:hover {
        background: var(--item_side_menu_hover);
      }
    }
  }

  &::after {
    content: "";
    height: 4px;
    opacity: 1;
    pointer-events: none;
    position: absolute;
    right: 0px;
    width: ${props => props.percentLoading}%;
    z-index: 2050;
    top: 0;
    left: 0;
    background: var(--notification_color);
  }
`

export const Logo = styled.img`
  width: 2rem;
`

export const ContainerSideMenuItems = styled.div`
  width: 100%;
  height: 100%;

  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-top: .4rem;

    li {
      display: flex;
      align-items: center;
      justify-content: center;

      & .content_item {
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 70px;
        width: 70px;
        color: var(--content_color);
        border-radius: 15px;
        text-decoration: none;
        transition: .24s all;

        &:hover {
          background: var(--item_side_menu_hover);
        }

        &.active {
          background: var(--item_side_menu_hover);
        }

        & > span {
          margin-top: 0.2rem;
          font-size: 11px;
        }
      }
    }
  }
`

export const ContainerSideMenuItemsExpanded = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;

  ul {
    display: flex;
    flex-direction: column;
    width: 90%;
    padding-top: .4rem;

    li {
      display: flex;
      flex-direction: column;

      & .content_item {
        cursor: pointer;
        display: flex;
        align-items: center;
        height: 44px;
        width: 100%;
        color: var(--content_color);
        padding-left: 1rem;
        border-radius: 15px;
        text-decoration: none;
        transition: .24s all;

        &:hover {
          background: var(--item_side_menu_hover);
        }

        &.active {
          background: var(--item_side_menu_hover);
        }

        & > span {
          margin-left: 1rem;
          font-size: 1rem;
        }
      }
    }
  }
`