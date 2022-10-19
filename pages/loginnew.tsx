import React from "react";

const Loginnew = () => {
  return (
    <div>
      <form method="POST" action="/api/auth/login">
        <input
          style={{ border: "1px solid red" }}
          type="text"
          name="username"
          id=""
          defaultValue="admin"
        />
        <br />
        <input
          style={{ border: "1px solid red" }}
          type="password"
          name="password"
          defaultValue="admin"
        />
        <br />
        <input
          style={{ background: "black", color: "white", padding: "10px" }}
          type="submit"
          value="Login"
        />
      </form>
    </div>
  );
};

export default Loginnew;
