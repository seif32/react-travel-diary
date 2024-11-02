import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/FakeAuthContext";
import Button from "./Button";
import styles from "./User.module.css";

function User() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleClick() {
    logout();
    navigate("/");
  }

  return (
    <div className={styles.user}>
      <img src={user.avatar} alt={user.name} />
      <span>Welcome, {user.name}</span>
      <Button onClick={handleClick}>Logout</Button>
    </div>
  );
}

export default User;
