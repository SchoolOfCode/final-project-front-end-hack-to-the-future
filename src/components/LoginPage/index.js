import IntroductionMain from "../IntroductionMain";
import Profile from "./Profile";
import css from "./LoginPage.module.css";
function LoginPage() {
  return (
    <div className={css.container}>
      <IntroductionMain />
    </div>
  );
}

export default LoginPage;
