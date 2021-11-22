/**
 * @TODO Coverage < 100% -> dette
 * Can not mock FUSE library
 */
import React from 'react';

import SearchForm from '../../components/search-form';
import SearchResults from '../../components/search-results';
import { useSearch } from '../../hooks/use-search.hook';

const SearchComponent = React.memo((): JSX.Element => {
  const { onFormChange, results, searchTerm } = useSearch();

  return (
    <div className="row mb-8" id="identity-provider-search">
      <SearchForm
        label="Je recherche mon administration"
        onChange={onFormChange}
      />
      <SearchResults results={results} term={searchTerm} />
    </div>
  );
});

SearchComponent.displayName = 'SearchComponent';

export default SearchComponent;