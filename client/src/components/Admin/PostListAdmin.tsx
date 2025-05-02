// client/src/components/Admin/PostListAdmin.tsx
import React, { useEffect, useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Button
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';

interface Post {
  _id: string;
  title: string;
  author: string;
  createdAt: string;
}

const PostListAdmin: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const navigate = useNavigate();

  const fetchPosts = async () => {
    const res = await api.get<Post[]>('/posts');
    setPosts(res.data);
  };

  const handleDelete = async (id: string) => {
    await api.delete(`/posts/${id}`);
    setPosts(posts.filter(p => p._id !== id));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Author</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map(p => (
            <TableRow key={p._id}>
              <TableCell>{p.title}</TableCell>
              <TableCell>{p.author}</TableCell>
              <TableCell>
                <Button onClick={() => navigate(`/admin/edit/${p._id}`)}>
                  Edit
                </Button>
                <Button color="error" onClick={() => handleDelete(p._id)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PostListAdmin;
