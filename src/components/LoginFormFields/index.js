import './index.css'

const LoginFormFields = ({ userInput, onUsernameChange, password, onPasswordChange, onSubmit,activeTab,errorMsg,showErrorMsg }) => {

  const userNameVar = activeTab === 'banker' ? 'akhil':'pavan';
  const passwordVar = activeTab === 'customer' ? 'kumar':'akhil';
    return (
        
      <form onSubmit={onSubmit} className="form-field">
        <p>Welcome {activeTab} !!</p>
        <div className="username-field">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={userInput}
            onChange={onUsernameChange}
            placeholder={userNameVar}
          />
        </div>
        <div className="password-field">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={onPasswordChange}
            placeholder={passwordVar}
          />
        </div>
        <button type="submit">Login</button>
        {showErrorMsg && <p>{errorMsg}</p>}
      </form>
    );
  };
  

  export default LoginFormFields;