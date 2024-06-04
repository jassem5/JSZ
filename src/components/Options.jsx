export const Options = () => {
  return (
    <div className="container">
      <div class="header">
        <h1>Bienvenue cher étudiant</h1>
        <p>Choisissez ce que vous souhaitez faire ...</p>
        <div class="options">
          <div class="option">
            <button>Demande de stage</button>
          </div>
          <div class="option">
            <button>Modifier la demande</button>
          </div>
          <div class="option">
            <button>Télécharger la demande</button>
          </div>
        </div>
      </div>

      <div class="login-right">
        <img src="images/stage.png" alt="stage" />
      </div>
    </div>
  );
};
