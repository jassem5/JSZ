export const Pfe = () => {
  return (
    <form>
      <h2>ARTICLE 1</h2>
      <h3 class="label">I- L'entreprise d'accueil</h3>
      <p class="label">Nom :</p>
      <input class="input" type="text" name="nom_entreprise" required />
      <p class="label">Sise à :</p>
      <input class="input" type="text" name="adresse_entreprise" required />
      <p class="label">Représentée par :</p>
      <input class="input" type="text" name="nom_representant" required />
      <p class="label">En qualité de :</p>
      <input class="input" type="text" name="qualite_representant" required />
      <p class="label">Téléphone :</p>
      <input class="input" type="text" name="telephone_entreprise" required />
      <p class="label">Fax :</p>
      <input class="input" type="text" name="fax_entreprise" required />
      <p class="label">Adresse :</p>
      <input class="input" type="text" name="adresse_entreprise" required />
      <p class="label">Télécopie :</p>
      <input class="input" type="text" name="telecopie_entreprise" required />
      <p class="label">E-mail :</p>
      <input class="input" type="email" name="email_entreprise" required />
      <p class="label">Site Web :</p>
      <input class="input" type="text" name="site_web_entreprise" required />
      <p class="label">Nature de l'activité de l'entreprise :</p>
      <input class="input" type="text" name="activite_entreprise" required />
      <h3 class="label">II- Le stagiaire</h3>
      <label class="label" for="nom">
        Nom de l'étudiant(e) :
      </label>
      <textarea id="nom" name="nom" rows="1" readonly>
        Texte pré-rempli
      </textarea>
      <label class="label" for="prenom">
        Prénom de l'étudiant(e) :
      </label>
      <textarea id="prenom" name="prenom" rows="1" readonly>
        Texte pré-rempli
      </textarea>
      <p class="label">E-mail :</p>
      <input class="input" type="email" name="email_etudiant" required />
      <p class="label">Téléphone :</p>
      <input class="input" type="text" name="telephone_etudiant" required />
      <label class="label" for="date_de_naissance">
        Date de naissance :
      </label>
      <input class="input" type="date" name="date_de_naissance" required />
      <p class="label">Lieu de naissance :</p>
      <input class="input" type="text" name="lieu_de_naissance" required />
      <label class="label" for="cin">
        N°CIN :
      </label>
      <textarea id="cin" name="cin" rows="1" readonly>
        Texte pré-rempli
      </textarea>
      <label class="label" for="niveau_etude">
        Niveau d'étude :
      </label>
      <textarea id="niveau_etude" name="niveau_etude" rows="1" readonly>
        Texte pré-rempli
      </textarea>
      <label class="label" for="specialite">
        Spécialité :
      </label>
      <textarea id="specialite" name="specialite" rows="1" readonly>
        Texte pré-rempli
      </textarea>
      <h2>ARTICLE 2 : Durée et déroulement du stage</h2>
      <div class="selection">
        <p>Le stage est :</p>
        <p class="choix">
          <input
            type="radio"
            name="type_stage"
            value="presentiel_total"
            id="presentiel_total"
            required
          />
          <label for="presentiel_total">Présentiel total</label>
        </p>
        <p class="choix">
          <input
            type="radio"
            name="type_stage"
            value="presentiel_partiel"
            id="presentiel_partiel"
            required
          />
          <label for="presentiel_partiel">Présentiel partiel</label>
        </p>
      </div>
      <p>
        Il commencera le <input type="date" name="date_debut" required /> et se
        terminera le <input type="date" name="date_fin" required />
      </p>
      <p>
        La durée hebdomadaire maximale de présence du stagiaire dans
        l'entreprise sera de
        <input type="number" name="duree_hebdomadaire" required /> heures.
      </p>
      <p>
        Le stagiaire sera accueilli auprès du service de
        <input type="text" name="service_accueil" required />
      </p>
      <h2>Fiche d'offre de projet de fin d'études</h2>
      <label class="label">Intitulé du projet :</label>
      <textarea class="input" name="intitule_projet" required></textarea>
      <label class="label">Mots clés :</label>
      <textarea class="input" name="mots_cles" required></textarea>
      <label class="label">Problématique :</label>
      <textarea class="input" name="problematique" required></textarea>
      <label class="label">
        Description du traivail à réaliser par l'étudiant(e) :
      </label>
      <textarea class="input" name="description" required></textarea>
      <label class="label">
        Outils logiciels ou matériels sur lesquels traivaillera le stagiaire :
      </label>
      <textarea class="input" name="problematique" required></textarea>
      <h3>Tuteur entreprise :</h3>
      <label class="label" for="nom_tuteur_entreprise">
        Nom du tuteur entreprise :
      </label>
      <input
        class="input"
        type="text"
        id="nom_tuteur_entreprise"
        name="nom_tuteur_entreprise"
        required
      />

      <label class="label" for="prenom_tuteur_entreprise">
        Prénom du tuteur entreprise :
      </label>
      <input
        class="input"
        type="text"
        id="prenom_tuteur_entreprise"
        name="prenom_tuteur_entreprise"
        required
      />

      <label class="label" for="fonction_tuteur_entreprise">
        Fonction :
      </label>
      <input
        class="input"
        type="text"
        id="fonction_tuteur_entreprise"
        name="fonction_tuteur_entreprise"
        required
      />

      <label class="label" for="telephone_tuteur_entreprise">
        Téléphone :
      </label>
      <input
        class="input"
        type="tel"
        id="telephone_tuteur_entreprise"
        name="telephone_tuteur_entreprise"
        required
      />

      <label class="label" for="telecopie_tuteur_entreprise">
        Télécopie :
      </label>
      <input
        class="input"
        type="tel"
        id="telecopie_tuteur_entreprise"
        name="telecopie_tuteur_entreprise"
      />

      <label class="label" for="courriel_tuteur_entreprise">
        Courriel :
      </label>
      <input
        class="input"
        type="email"
        id="courriel_tuteur_entreprise"
        name="courriel_tuteur_entreprise"
        required
      />
      <h3>Tuteur pédagogique :</h3>
      <label class="label" for="nom_tuteur_pedagogique">
        Nom et prénom du tuteur pédagogique :
      </label>
      <input
        class="input"
        type="text"
        id="nom_tuteur_pedagogique"
        name="nom_tuteur_pedagogique"
        required
      />

      <label class="label" for="prenom_tuteur_pedagogique">
        Prénom du tuteur pédagogique :
      </label>
      <input
        class="input"
        type="text"
        id="prenom_tuteur_pedagogique"
        name="prenom_tuteur_pedagogique"
        required
      />

      <label class="label" for="grade_tuteur_pedagogique">
        Grade :
      </label>
      <input
        class="input"
        type="text"
        id="grade_tuteur_pedagogique"
        name="grade_tuteur_pedagogique"
        required
      />

      <label class="label" for="telephone_tuteur_pedagogique">
        Téléphone :
      </label>
      <input
        class="input"
        type="tel"
        id="telephone_tuteur_pedagogique"
        name="telephone_tuteur_pedagogique"
        required
      />
      <label class="label" for="courriel_tuteur_pedagogique">
        Courriel :
      </label>
      <input
        class="input"
        type="email"
        id="courriel_tuteur_pedagogique"
        name="courriel_tuteur_pedagogique"
        required
      />

      <button type="submit" class="bouton">
        Envoyer
      </button>
    </form>
  );
};
