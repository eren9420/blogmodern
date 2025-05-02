// client/src/components/Public/PostCard.tsx
import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button
} from '@mui/material';
import { Link } from 'react-router-dom';

interface PostCardProps {
  id: string;
  title: string;
  author: string;
  snippet: string;
}

const PostCard: React.FC<PostCardProps> = ({
  id,
  title,
  author,
  snippet
}) => (
  <Card sx={{ mb: 2 }}>
    <CardContent>
      <Typography variant="h5">{title}</Typography>
      <Typography variant="subtitle2" color="textSecondary">
        by {author}
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        {snippet}
      </Typography>
    </CardContent>
    <CardActions>
      <Button component={Link} to={`/posts/${id}`} size="small">
        Read More
      </Button>
    </CardActions>
  </Card>
);

export default PostCard;
