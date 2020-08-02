import React from 'react';
 
class SignUp extends React.Component {
  render() {
    return (
      <form>
        <h1>SignUp</h1>
        <div>
          <input type="text" name="username" placeholder="Username" />
          <label htmlFor="username">Create Username</label>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
          <label htmlFor="password">Create Password</label>
        </div>
        <input type="submit" value="SignUp" />
      </form>
    );
  }
}
 
export default SignUp;