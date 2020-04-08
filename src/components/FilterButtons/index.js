import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Container, Button, SelectedButton } from './styles';

export default function FilterButtons({ setFilter, filter }) {
  const [filterButtons, setFilterButtons] = useState([]);

  useEffect(() => {
    setFilterButtons([
      {
        id: 0,
        text: 'Year',
        selected: filter === 'Year',
      },
      {
        id: 1,
        text: 'Writer',
        selected: filter === 'Writer',
      },
      {
        id: 2,
        text: 'Artist',
        selected: filter === 'Artist',
      },
      {
        id: 3,
        text: 'Owner',
        selected: filter === 'Owner',
      },
      {
        id: 4,
        text: 'Random',
        selected: filter === 'Random',
      },
    ]);
  }, [filter]);

  function handleFilterButtonClick(buttonId, filterText) {
    setFilterButtons(
      filterButtons.map((filter) => {
        if (filter.id === buttonId) {
          filter.selected = true;
          setFilter(filterText);
        } else {
          filter.selected = false;
        }

        return filter;
      })
    );
  }

  return (
    <Container>
      {filterButtons &&
        filterButtons.length &&
        filterButtons.map((filter) =>
          filter.selected ? (
            <SelectedButton
              key={filter.id}
              onClick={() => handleFilterButtonClick(filter.id, filter.text)}
            >
              {filter.text}
            </SelectedButton>
          ) : (
            <Button
              key={filter.id}
              onClick={() => handleFilterButtonClick(filter.id, filter.text)}
            >
              {filter.text}
            </Button>
          )
        )}
    </Container>
  );
}

FilterButtons.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};
