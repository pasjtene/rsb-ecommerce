import '../Login.css'
import { useDispatch } from 'react-redux'
import { authActions } from '../store/auth-slice'

const Auth = () => {
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
    
        console.log("Form submitted")

        dispatch(authActions.login())
    }

    return (
        <div>
            <main className="form-signin form-signin-size w-100 m-auto">
                <form onSubmit={handleSubmit}>
                    <h1 className="h3 mb-3 fw-normal">Login</h1>
                    <div className="form-floating">
                    <input type="email" className="form-control"  placeholder="name@example.com"
                        
                    />
                    <label className="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                    <input type="password" className="form-control"  
                            placeholder="Password"
                        
                    />
                    <label className="floatingPassword">Password</label>
                    </div>
                    <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me"/> Login
                    </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
                </form>
            </main>
        </div>
    )
}

export default Auth