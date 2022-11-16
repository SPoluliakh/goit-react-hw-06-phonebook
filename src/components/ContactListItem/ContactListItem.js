import PropTypes from 'prop-types';
import { ListItem, ListItemText, ListItemBtn } from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../Redux/contactSlice';

const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <>
      <ListItem>
        <ListItemText>
          {name}: {number}
        </ListItemText>
        <ListItemBtn type="button" onClick={() => dispatch(deleteContact(id))}>
          Delet
        </ListItemBtn>
      </ListItem>
    </>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
