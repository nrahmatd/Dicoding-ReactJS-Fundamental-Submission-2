import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { showFormattedDate, extractHTMLContent } from '../utils';
import { archiveNote, deleteNote, getNote, unarchiveNote } from '../utils/network-data';
import DetailNotePageAction from './DetailNotePageAction';

function DetailPageNote() {
    const [note, setNote] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    const onArchive = function() {
        if (note.archived) {
            unarchiveNote(id).then((data) => {
                if (!data.error) {
                    navigate('/archives');
                }
            })
            .catch(() => {
                alert("Failed");
            })
        } else {
            archiveNote(id).then((data) => {
                if (!data.error) {
                    navigate('/');
                }
            })
            .catch(() => {
                alert("Failed");
            })
        }
    }

    const onDelete = function() {
        deleteNote(id).then((data) => {
            if (!data.error) {
                navigate('/');
            }
        })
        .catch(() => {
            alert("Failed");
        })
    }

    useEffect(() => {
        getNote(id).then((data) => {
            if (!data.error) {
                setNote(data.data)
            }
        }).catch(() => {
            alert("Error");
        })
    }, [])

    return (
        <section className="detail-page">
            <>
                <h3 className="detail-page__title">
                    { note.title }
                </h3>
                <p className="detail-page__createdAt">
                    { showFormattedDate(note.createdAt) }
                </p>
                <p className="detail-page__body">
                    { extractHTMLContent(note.body) }
                </p>
            </>
            <DetailNotePageAction
                isArchived={note.archived || false }
                onArchive={onArchive}
                onDelete={onDelete}
            />
        </section>
    );
}

export default DetailPageNote;