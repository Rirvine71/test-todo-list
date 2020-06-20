import React from "react";
import "./ListItems.css";
import DeleteIcon from "@material-ui/icons/Delete";

function ListItems(props) {
  const items = props.items;
  const listItems = items.map((item) => {
    return (
      <div className="list" key={item.key}>
        <p>
          <input
            type="checkbox"
        />
          <input
            type="text"
            id={item.key}
            value={item.text}
            onChange={(e) => {
              props.setUpdate(e.target.value, item.key);
            }}
          />
          <span>
            <DeleteIcon
              className="deleteIcon"
              onClick={() => props.deleteItem(item.key)}
            />
          </span>
        </p>
      </div>
    );
  });
  return <div>{listItems}</div>;
}
export default ListItems;
