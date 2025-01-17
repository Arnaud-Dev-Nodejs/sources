/* istanbul ignore file */

/**
 * Not yet implemented
 */
 import './error.scss';

import classnames from 'classnames';
import { useMediaQuery } from 'react-responsive';

const ErrorPage = () => {
  const gtTablet = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <div>
      <h1
        className={classnames('is-blue-agentconnect is-bold px16', {
          'text-center': gtTablet,
          'text-left': !gtTablet,
        })}
      >
        Une erreur est survenue lors de la connexion.
      </h1>
      <div
        className="content-error my32 px16 fr-text-lg"
      >
        <p className="mb32">Description de l’erreur :</p>
        <p className="mb32">
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
          ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        </p>
        <p className="mb32">Que faire ? </p>
        <p className="mb32">
          Fermez l’onglet de votre navigateur et reconnectez-vous en cliquant
          sur le bouton AgentConnect.
        </p>
        <p className="mb32">
          Contactez le support de votre service si le problème persiste.
        </p>
        <div className="bg-blue-france-100 p24">
          <p>
            Informations à nous transmettre dans le mail pour faciliter la prise
            en charge de votre demande :
          </p>
          <p>
            <strong>Code d’erreur :</strong> 04515
          </p>
          <p>
            <strong>ID :</strong> 2558632862785
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
