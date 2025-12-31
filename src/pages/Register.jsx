import AuthForm from "../components/AuthForm"



const Register = () => {
    const link={
        direction:"/",
        text:"login"
    }
    const inputs=[
        {
            type:"text",
            placeholder:"Name"
        },
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
      <AuthForm title="Create an account"subtitle="Enter your details below" inputs={inputs}
      submit="Create Account" text="Already have account?" link={link}/>

    </div>
  )
}

export default Register
