// Third party
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background_page_color: #FFFFFF;
    --item_active_color: #F2F2F2;
    --background_item_color: #F9F9F9;
    --send_search: #F8F8F8;
    --item_menu_color: #0F0F0F;
    --content_color: #2A2823;
    --divider_color: #E5E5E5;
    --notification_color: #CC0000;
    --item_side_menu_hover: #F2F2F2;

    /* Size top menu */
    --height_menu: 55px;

    /* Size width menu */
    --size_width_menu_expanded: 240px;
    --size_width_menu: 90px;
  }

  [data-theme='dark'] {
    --background_page_color: #0F0F0F;
    --item_active_color: #F2F2F2;
    --background_item_color: #272727;
    --item_menu_color: #F1F1F1;
    --send_search: #F8F8F8;
    --content_color: #2A2823;
    --divider_color: #E5E5E5;
    --notification_color: #CC0000;
    --item_side_menu_hover: #F2F2F2;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscal;
  }

  html, body, #root {
    height: 100%;
    background-color: var(--background_page_color);
    font-family: 'Roboto', Tahoma, Geneva, Verdana, sans-serif;
  }

  .cursor_pointer {
    cursor: pointer;
  }

  .divider {
    height: 1px;
    width: 100%;
    margin: 1rem 0;
    border-radius: 10px;
    background-color: var(--item_side_menu_hover);
  }
`

export const SizeIcons = 25