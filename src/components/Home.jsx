import { Link, NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <div class="container" id="home">
        <div class="login-left">
          <div class="login-header">
            <h1>Bienvenue</h1>
            <p>Connectez-vous pour continuer ...</p>
          </div>
          <form action="" class="login-form" autocomplete="off">
            <div class="login-content">
              <div class="form-item">
                <label for="cin">C.I.N</label>
                <input
                  type="cin"
                  name="cin"
                  id="cin"
                  placeholder="Entrez votre n° C.I.N"
                  required
                />
              </div>
              <button onClick="">Se connecter</button>
            </div>
          </form>
        </div>
        <div class="login-right">
          <img src="images/stage.png" alt="stage" />
        </div>
      </div>
    </div>
  );
};
