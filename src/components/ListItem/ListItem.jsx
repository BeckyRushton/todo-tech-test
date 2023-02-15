import "./ListItem.scss";
import binIcon from "../../assets/images/bin-icon.png";

const ListItem = (props) => {
  const { text } = props;
  return (
    <div className="todoItem">
      <input type="checkbox" />
      <p>{text}</p>
      <img src={binIcon} alt="bin" />
    </div>
  );
};

export default ListItem;
