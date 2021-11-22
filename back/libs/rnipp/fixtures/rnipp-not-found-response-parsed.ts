export const rnippNotFoundResponseParsed = {
  IdentificationsIndividusCitoyens: {
    $: {
      'xmlns:n1': 'http://www.altova.com/samplexml/other-namespace',
      'xmlns:ds': 'http://www.w3.org/2000/09/xmldsig',
      'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
      'xmlns:io': 'http://xml.insee.fr/schema/outils',
      'xmlns:ie': 'http://xml.insee.fr/schema',
      'xmlns:ec': 'http://xml.insee.fr/schema/etat-civil',
      'xmlns:el': 'http://xml.insee.fr/schema/electoral',
      'xsi:schemaLocation':
        'http://xml.insee.fr/schema/electoral http://xml.insee.fr/schema/electoral/brpp-client-identification.xsd',
      uriDemande:
        'http://identification-etat-civil.insee.net/individus?rechercheType=S&nom=ong&prenoms=william&dateNaissance=19870729&sexe=m&codeLieuNaissance=93051',
      dateValidite: '2015-04-16',
    },
    TypeReponseIdentification: ['8'],
  },
};
