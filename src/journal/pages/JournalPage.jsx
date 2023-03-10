import { AddOutlined } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../view"

export const JournalPage = () => {
  return (
    <JournalLayout>
      <NothingSelectedView />
      {/* <NoteView /> */}

    <IconButton
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
