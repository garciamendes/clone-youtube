// React
import React from 'react'

// Third party
import {
  MagnifyingGlass
} from 'phosphor-react'

// Local
import { ContainerSearch } from './styles'

export const SearchBar = () => {
  return (
    <ContainerSearch>
      <div className='input'>
        <input type='text' placeholder='Pesquisar' />
      </div>
      <div className='send_search'>
        <MagnifyingGlass size={20} />
      </div>
    </ContainerSearch>
  )
}