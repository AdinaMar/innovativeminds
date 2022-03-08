import { VscActivateBreakpoints } from 'react-icons/vsc'
import {AiOutlineUsergroupDelete} from 'react-icons/ai'
import {FiEdit} from 'react-icons/fi'

export const COLUMNS =   [
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Email',
      accessor: 'email',
    },
    {
      Header: 'Gender',
      accessor: 'gender',
    },
    {
    Header:'Role',
    accessor: 'role',
},
    {
      Header: 'Nationality',
      accessor: 'nationality',
    },
    {
      Header: 'Birth Date',
      accessor: 'birthdate',
    },
    {
    Header: '',
    id: 'buttons',
    Cell: () => <div className='icons'> <FiEdit/> <VscActivateBreakpoints/>  <AiOutlineUsergroupDelete/> </div>
    }
   
  ]