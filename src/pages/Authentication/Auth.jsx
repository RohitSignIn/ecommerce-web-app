import axios from "axios";
import Auth from "../../components/Auth/Auth";

import { useState } from "react";
import { addUser, loginUser } from "../../APIs/api";
import { useCookies } from "react-cookie";

function Login({ setAuthPage }) {
  const [cookies, setCookie] = useCookies();

  if (cookies.auth) return;

  const [page, setPage] = useState("Login");

  async function handleForm(data) {
    if (page == "Signup") {
      const res = await axios.post(addUser, data, { withCredentials: true });
      if (res?.data?.id) {
        setPage("Login");
      }
    } else {
      const res = await axios.post(loginUser, data, { withCredentials: true });
      if (res.data.success) {
        setAuthPage(true);
        setCookie("auth", res.data.auth);
        setCookie("user_id", res.data.user_id);
        setCookie("email", res.data.email);
        setCookie("username", res.data.username);
      }
    }
  }

  return (
    <>
      {page == "Login" && (
        <Auth
          page={"Login"}
          setPage={setPage}
          setAuthPage={setAuthPage}
          handleForm={handleForm}
        />
      )}
      {page == "Signup" && (
        <Auth
          page={"Signup"}
          setPage={setPage}
          setAuthPage={setAuthPage}
          handleForm={handleForm}
        />
      )}
    </>
  );
}

export default Login;
