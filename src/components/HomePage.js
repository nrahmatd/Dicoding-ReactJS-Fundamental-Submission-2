import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import NoteList from './NoteList';
import NoteListEmpty from './NoteListEmpty';
import HomePageAction from './HomePageAction';
import { useInput } from '../hooks/AppHooks';
import { getActiveNotes } from '../utils/network-data';

function HomePage() {
    const [isDataLoaded, setIsDataLoaded] = useState(false); 
    const [notes, setNotes] = useState([]);
    const [search, setSearch] = useInput('')

    const getNotes = () => {
        getActiveNotes().then((data) => {
            if (!data.error) {
                setNotes(data.data);
                setIsDataLoaded(true);
            }
        })
        .catch(() => {
            alert("Error get data");
        })
    }

    useEffect(() => {
        if (!isDataLoaded) {
            getNotes();
        }

        if (isDataLoaded) {
            if (search !== '') {
                let filteredNotes = [...notes];
                setNotes(
                    filteredNotes.filter((note) => note.title.toLowerCase().includes(search.toLowerCase()))
                );
            }
        }
    }, [search])

    return (
        <>
            <h2>Catatan Aktif</h2>
            <SearchBar search={search} onSearch={setSearch} />
            { notes.length > 0 && <NoteList notes={notes} /> }
            { notes.length === 0 && <NoteListEmpty /> }
            <HomePageAction />
        </>
    );
}

export default HomePage;