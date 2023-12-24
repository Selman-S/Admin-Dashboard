import styles from "@/app/ui/login/login.module.css";
import LoginForm from "../ui/login/loginForm/loginForm";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.tooltip}>
        <div className={styles.tooltipText}>
                  <p>username: admin</p>
          <p>password: admin123</p>    

    </div>
    </div>
      <LoginForm/>
    </div>
  );
};

export default LoginPage;