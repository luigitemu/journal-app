import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote, startDeleting } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppbar } from './NotesAppbar'


export const NoteScreen = () => {

    const { active: note } = useSelector(state => state.notes);
    const dispatch = useDispatch();
    const [formValues, handleInputChange, reset] = useForm(note);
    const { id, body, title, url } = formValues;
    const activeId = useRef(note.id);


    useEffect(() => {
        if (note.id !== activeId.current) {
            reset(note);
            activeId.current = note.id;
        }

    }, [note, reset]);

    useEffect(() => {
        console.log(formValues);
        dispatch(activeNote(id, { ...formValues }));

    }, [formValues, dispatch, id, url]);

    const handleDelete = () => {

        // console.log('me borran ', note.id);
        dispatch(startDeleting(note.id))
    }


    return (
        <div className="notes__main-content animate__animated animate__fadeIn animate__faster">

            <NotesAppbar />

            <div className="notes__content">

                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    name="title"
                    value={title}
                    onChange={handleInputChange}
                />

                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                    name="body"
                    value={body}
                    onChange={handleInputChange}
                ></textarea>
                {

                    url &&
                    (<div className="notes__image">
                        <img
                            src={url}
                            alt="imagen"
                        />
                    </div>)
                }

            </div>

            <button
                className="btn btn-danger"
                onClick={handleDelete}
            >
                Delete
            </button>
        </div>

    )
}