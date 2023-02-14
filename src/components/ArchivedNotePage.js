import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import NoteList from './NoteList';
import NoteListEmpty from './NoteListEmpty';
import HomePageAction from './HomePageAction';
import { useInput } from '../hooks/AppHooks';
import { getArchivedNotes } from '../utils/network-data';

function ArchivePage() {
    const [isDataLoaded, setIsDataLoaded] = useState(false); 
    const [notes, setNotes] = useState([]);
    const [search, setSearch] = useInput('')

    const getNotes = () => {
        getArchivedNotes().then((data) => {
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
                setNotes(
                    getArchivedNotes().filter((note) => note.title.toLowerCase().includes(search.toLowerCase()))
                )
            }
        } 
    }, [search])

    return (
        <>
            <h2>Catatan Arsip</h2>
            <SearchBar search={search} onSearch={setSearch} />
            { notes.length > 0 && <NoteList notes={notes} /> }
            { notes.length === 0 && <NoteListEmpty /> }
            <HomePageAction />
        </>
    );
}

export default ArchivePage;