import React, { useState } from "react";
import { useIntl, FormattedMessage } from "react-intl";

const Login = () => {
  const intl = useIntl();
  const [username, setUsername] = useState("");
  const [password, setPasword] = useState("");

  return (
    <div>
      <form>
        <div className="form-group">
          <label>
            <FormattedMessage id="Login.username" />
          </label>
          <input
            type="text"
            placeholder={intl.formatMessage({ id: "Login.username" })}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>
            <FormattedMessage id="Login.password" />
          </label>
          <input
            type="password"
            placeholder={intl.formatMessage({ id: "Login.password" })}
            value={password}
            onChange={(e) => setPasword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value={intl.formatMessage({ id: "Login.login" })}
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
