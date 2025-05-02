// client/src/components/Admin/Postform.tsx
import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

interface PostFormProps {
  initialData?: {
    title: string;
    content: string;
    author: string;
  };
  onSubmit: (data: { title: string; content: string; author: string }) => void;
}

const Postform: React.FC<PostFormProps> = ({ initialData, onSubmit }) => {
  const [title, setTitle] = useState(initialData?.title || '');
  const [content, setContent] = useState(initialData?.content || '');
  const [author, setAuthor] = useState(initialData?.author || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, content, author });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 600 }}
    >
      <TextField
        label="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <TextField
        label="Content"
        multiline
        rows={6}
        value={content}
        onChange={e => setContent(e.target.value)}
        required
      />
      <TextField
        label="Author"
        value={author}
        onChange={e => setAuthor(e.target.value)}
        required
      />
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </Box>
  );
};

export default Postform;
