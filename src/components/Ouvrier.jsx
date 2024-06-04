export const Ouvrier = () => {
  return (
    <form action="#" onsubmit="return validateForm()">
      <div class="form-group">
        <h1>Identification de l’étudiant(e) :</h1>
      </div>
      <div class="form-group">
        <label for="nom">Nom de l'étudiant(e):</label>
        <textarea id="nom" name="nom" rows="1" readonly>
          Texte pré-rempli
        </textarea>
      </div>
      <div class="form-group">
        <label for="prenom">Prénom de l'étudiant(e):</label>
        <textarea id="prenom" name="prenom" rows="1" readonly>
          Texte pré-rempli
        </textarea>
      </div>
      <div class="form-group">
        <label for="cin">N°CIN :</label>
        <textarea id="cin" name="cin" rows="1" readonly>
          Texte pré-rempli
        </textarea>
      </div>
      <div class="form-group">
        <label for="niveau_etude">Niveau d'étude :</label>
        <textarea id="niveau_etude" name="niveau_etude" rows="1" readonly>
          Texte pré-rempli
        </textarea>
      </div>
      <div class="form-group">
        <label for="specialite">Spécialité :</label>
        <textarea id="specialite" name="specialite" rows="1" readonly>
          Texte pré-rempli
        </textarea>
      </div>
      <div class="form-group">
        <h1>Identification de l'entreprise:</h1>
      </div>
      <div class="form-group">
        <label for="raison_sociale">Raison Sociale :</label>
        <input type="text" id="raison_sociale" name="raison_sociale" required />
      </div>
      <div class="form-group">
        <label for="adresse">Adresse :</label>
        <input type="text" id="adresse" name="adresse" required />
      </div>
      <div class="form-group">
        <label for="service_accueil">Service d'accueil du stagiaire :</label>
        <input
          type="text"
          id="service_accueil"
          name="service_accueil"
          required
        />
      </div>
      <div class="form-group">
        <label for="responsable">Responsable à contacter :</label>
        <input type="text" id="responsable" name="responsable" required />
      </div>
      <div class="form-group">
        <label for="tel">Tél :</label>
        <input type="text" id="tel" name="tel" required />
      </div>
      <div class="form-group">
        <label for="fax">Fax :</label>
        <input type="text" id="fax" name="fax" required />
      </div>
      <div class="form-group">
        <label for="theme">Thème :</label>
        <textarea id="theme" name="theme" required></textarea>
      </div>
      <button type="submit">Envoyer</button>
    </form>
  );
};
