import PropTypes from 'prop-types'
import Button from './Button';




const Header = ({title, onAdd, showAdd}) => {
    return (
        <header className='header'>
           <h1>{title}</h1> 
           <Button color={showAdd ? 'rgb(27, 27, 46)' : 'green'} text={showAdd  ? 'Close' : 'Add New Task'} onClick={onAdd}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Organizer',
  }
export default Header
