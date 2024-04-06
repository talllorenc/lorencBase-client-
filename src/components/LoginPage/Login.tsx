import { LoginForm } from "../AuthForm/LoginForm";

const Login = () => {
  return (
    <section className="container">
      <div className="py-12 sm:py-16 lg:py-20">
        <h1 className="text-center text-6xl font-bold">LOGIN</h1>
        <div className="mt-8 max-w-2xl mx-auto">
          <LoginForm />
        </div>
      </div>
    </section>
  );
};
export default Login;
