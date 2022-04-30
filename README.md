# backTanjonaOlivia2021

##DOCUMENTATION DU PROJET BACKTEND GEESTION DES ASSIGNMENTS
	. Pour que ce projet fonctionne sur votre ordinateur, il faut cloner les sources sur github.
	.Lancez ensuite la commande « npm install » dans le projet afin d'installer les modules.
	. Après avoir installé les modules, vous pouvez lancer le backend de l'application en exécutant la commande "npm start"
	. Les fonctionnalités
		Ce projet est un API qui accède vers la base de donnée.
		Les liens api présent dans l'application :
			Méthode GET
				* api/assignments  : renvoie toutes les assignments (avec pagination) 
				* api/assignments/{id} : renvoie un assignment à partir d'une id donné
				* api/assignmentsRendu : renvoie toutes les assignments rendu (avec pagination) 
				* api/assignmentsNonRendu : renvoie toutes les assignments non rendu (avec pagination) 
			   
				* api/user/: retourne toutes les utilisateurs
				* api/user/:{id}: retourne un utilisateur par son username
				* api/roles : retourne toutes les roles des utilisateurs
				* api/matieres : retourne toutes les matieres
			
			Méthode DELETE
				* api/assignments/{id} : supprimer un assignment à partir de son id
			
			Méthode POST
				* api/assignments : ajout d'un assignment 
				* user/signIn : Authentification d'un utilisateur pour accéder à son compte
				* user/signUp : inscription utilisateur	
			
			Méthode PUT
				* api/assignments : Modification d'un assignment

	4-BIBLIOGRAPHIE
		Pour jwt node , decodage du token et le cryptage du mode passe :  j'ai utilisé des codes de mes anciens projets (Projet 2 émé année S5) 
