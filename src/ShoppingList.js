import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

export default function ShoppingList() {
  const [items, setItems] = useState([]);

  function onRemoveItem(itemToRemove) {
    const newItems = items.filter((item) => {
      return item !== itemToRemove;
    });
    setItems(newItems);
  }

  function onSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.item;
    const newItems = [...items, input.value];
    setItems(newItems);
    form.reset();
  }

  return (
    <>
      <h3 className='mb-4'>
        Add a List of Items you are looking to go shop for in the Market
      </h3>
      <Form onSubmit={onSubmit}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Control type='text' name='item' placeholder='Add a new item' />
        </Form.Group>
        <Button type='submit'>Add New Item</Button>
      </Form>

      <ul>
        {items.map((item, index) => (
          <Item onRemoveItem={onRemoveItem} key={item + index} item={item} />
        ))}
      </ul>
    </>
  );
}

function Item({ item, onRemoveItem }) {
  return (
    <li>
      {item}
      <button className='delete' onClick={() => onRemoveItem(item)}>
        x
      </button>
    </li>
  );
}
