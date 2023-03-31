import { AddOutlined } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { useDispatch } from "react-redux"
import { startNewNote } from "../../store/journal"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../view"

export const JournalPage = () => {

  const dispatch = useDispatch();

  const onCLickNewNote = () => {
    dispatch( startNewNote() );
  }

  return (
    <JournalLayout>
      <NothingSelectedView />
      {/* <NoteView /> */}

    <IconButton
      onClick={onCLickNewNote}
      size='large'
      sx={{
        color: 'white',
        backgroundColor: 'error.main',
        ':hover': {backgroundColor: 'error.main', opacity: 0.8 },
        position: 'fixed',
        right: 50,
        bottom: 50
      }}
    >

      <AddOutlined sx={{ fontSize: 35 }} />

    </IconButton>

    </JournalLayout>
  )
}
