import React, { useState, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import Loader from 'react-loader-spinner';

import { Container, Search, Filters } from './styles';
import Header from '../../components/Header';
import FilterButtons from '../../components/FilterButtons';
import HomeBookList from '../../components/HomeBookList';
import RandomBookList from '../../components/RandomBookList';
import generateRandomNumbers from '../../utils/generateRandomNumbers';

export default function Home() {
  let { group } = useParams();
  if (group) group = group.charAt(0).toUpperCase() + group.slice(1);
  const data = useSelector((state) => state.books.books);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [years, setYears] = useState([]);
  const [writers, setWriters] = useState([]);
  const [artists, setArtists] = useState([]);
  const [owners, setOwners] = useState([]);
  const randomBooks = useMemo(() => generateRandomNumbers(50), []);

  useEffect(() => {
    const y = [];
    const w = [];
    const a = [];
    const o = [];

    if (data) {
      data.map((item) => {
        if (!y.includes(item.year)) {
          y.push(item.year);
        }

        if (!w.includes(item.writer)) {
          w.push(item.writer);
        }

        if (!a.includes(item.artist)) {
          a.push(item.artist);
        }

        if (!o.includes(item.owner)) {
          o.push(item.owner);
        }

        return item;
      });

      setYears(y.sort().reverse());
      setWriters(w.sort());
      setArtists(a.sort());
      setOwners(o.sort());
      if (!filter) setFilter('Year');
      if (group) setFilter(group);
      setLoading(false);
    }
  }, [data]);

  function configFilteredData(filterSelected, dataToConfig) {
    setFilteredData([]);
    setSearch('');

    switch (filterSelected) {
      case 'Year':
        years.map((year) =>
          setFilteredData((filteredData) =>
            filteredData.concat({
              filter: year,
              books: dataToConfig.filter((book) => book.year === year),
            })
          )
        );
        break;
      case 'Writer':
        writers.map((writer) =>
          setFilteredData((filteredData) =>
            filteredData.concat({
              filter: writer,
              books: dataToConfig.filter((book) => book.writer === writer),
            })
          )
        );
        break;
      case 'Artist':
        artists.map((artist) =>
          setFilteredData((filteredData) =>
            filteredData.concat({
              filter: artist,
              books: dataToConfig.filter((book) => book.artist === artist),
            })
          )
        );
        break;
      case 'Owner':
        owners.map((owner) =>
          setFilteredData((filteredData) =>
            filteredData.concat({
              filter: owner,
              books: dataToConfig.filter((book) => book.owner === owner),
            })
          )
        );
        break;
      case 'Random':
        randomBooks.map((bookPos) =>
          setFilteredData((filteredData) =>
            filteredData.concat({
              ...dataToConfig[bookPos],
            })
          )
        );
        break;
      default:
    }
  }

  useEffect(() => {
    setFilteredData([]);
    configFilteredData(filter, data);
  }, [filter]);

  const filterList = (event) => {
    let items = data;

    items = items.filter((item) => {
      return (
        item.name.toLowerCase().search(event.target.value.toLowerCase()) !== -1
      );
    });
    configFilteredData(filter, items);
    setSearch(event.target.value);
  };

  return (
    <>
      <Header />
      <Container>
        <form>
          <SearchIcon />
          <Search
            type="text"
            placeholder="Search by book name"
            value={search}
            onChange={filterList}
          />
        </form>

        <Filters>
          <FilterButtons setFilter={setFilter} filter={filter} />
        </Filters>
        {loading ? (
          <Loader type="Grid" color="#777777" height={80} width={80} />
        ) : (
          <>
            {filter !== 'Random' ? (
              filteredData.map((bookRow) => (
                <>
                  {bookRow.books && bookRow.books.length > 0 ? (
                    <>
                      <h1>{bookRow.filter}</h1>
                      <HomeBookList data={bookRow.books} />
                    </>
                  ) : (
                    ''
                  )}
                </>
              ))
            ) : (
              <RandomBookList data={filteredData} />
            )}
          </>
        )}
      </Container>
    </>
  );
}
