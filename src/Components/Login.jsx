import './Form.css'
import Swap from './Swap.jsx'

const Login=({setswap,swap})=>{
  return(
    <div className="wrapper">
      <Swap setswap={setswap} swap={swap}></Swap>

      <form action="#">
        <div className="input-box">
          <input type="email" placeholder="Enter your email" required />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Create password" required />
        </div>
        
        <div className="policy">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">Remember me</label>
        </div>
        <div className="input-box button">
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
    )
}
export default Login;