// client/src/components/Public/PostCard.tsx
import React from 'react';
import {
  Card,
  CardActionArea,
  CardMedia,
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
  date?: string;
  imageUrl?: string;
}

const PostCard: React.FC<PostCardProps> = ({
  id,
  title,
  author,
  snippet,
  date,
  imageUrl
}) => (
  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
    <CardActionArea component={Link} to={`/posts/${id}`} sx={{ flexGrow: 1 }}>
      {/* Görsel yoksa placeholder */}
      {imageUrl ? (
        <CardMedia
          component="img"
          height="140"
          image={imageUrl}
          alt={title}
        />
      ) : (
        <CardMedia
          component="div"
          sx={{
            height: 140,
            backgroundColor: 'action.hover',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'text.disabled'
          }}
        >
          No Image
        </CardMedia>
      )}

      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        {date && (
          <Typography variant="caption" color="text.secondary">
            {new Date(date).toLocaleDateString()}
          </Typography>
        )}
        <Typography variant="body2" sx={{ mt: 1 }}>
          {snippet}
        </Typography>
      </CardContent>
    </CardActionArea>

    <CardActions>
      <Button size="small" component={Link} to={`/posts/${id}`}>
        Read More
      </Button>
      <Typography variant="caption" sx={{ ml: 'auto', pr: 1 }}>
        {author}
      </Typography>
    </CardActions>
  </Card>
);

export default PostCard;
