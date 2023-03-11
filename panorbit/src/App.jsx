import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { populateUsers, selectUser, signOut } from "./Redux/Users/actions";
import Pages from "./Containers/Pages/Pages";
function App() {
  const dispatch = useDispatch();
  const { usersList } = useSelector((state) => state);

  const getUserList = async () => {
    try {
      let res = await axios.get("https://panorbit.in/api/users.json");
      res?.data?.users && dispatch(populateUsers(res?.data?.users));
      console.log("list ", usersList);
    } catch (error) {
      console.log("error ", error.message);
    }
  };
  useEffect(() => {
    getUserList();
  }, []);
  return (
    <div className="App">
      <Pages />
    </div>
  );
}

export default App;
