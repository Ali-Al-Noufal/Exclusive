import AuthForm from "../components/AuthForm"


const Login = () => {
      const link={
        direction:"/register",
        text:"register"
    }
    const inputs=[
        {
            type:"email",
            placeholder:"Email"
        },
        {
            type:"password",
            placeholder:"Password"
        }
    ]
  return (
    <div>
      <AuthForm title="Log in to Exclusive" subtitle="Enter your details below" 
      inputs={inputs} submit="Login" text="Don't have an account?" link={link}/>
    </div>
  )
}

export default Login
