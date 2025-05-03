import React from 'react';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Chip,
} from '@mui/material';
import { Link } from 'react-router-dom';

interface PostCardProps {
  id: string;
  title: string;
  snippet: string;
  author: string;
  imageUrl?: string;
  date?: string;
  tags?: string[];
}

const PostCard: React.FC<PostCardProps> = ({
  id,
  title,
  snippet,
  author,
  imageUrl,
  date,
  tags,
}) => (
  <Card
    sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform 0.2s',
      '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 },
    }}
  >
    <CardActionArea component={Link} to={`/posts/${id}`}>  
      {imageUrl && (
        <CardMedia component="img" height="200" image={imageUrl} alt={title} />
      )}
      <CardContent>
        {date && (
          <Typography variant="overline" color="textSecondary">
            {date}
          </Typography>
        )}
        <Typography gutterBottom variant="h6" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {snippet}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions sx={{ mt: 'auto', px: 2, pb: 2 }}>
      {tags?.map((tag) => (
        <Chip key={tag} label={tag} size="small" sx={{ mr: 1 }} />
      ))}
      <Button size="small" component={Link} to={`/posts/${id}`} sx={{ ml: 'auto' }}>
        Read More
      </Button>
    </CardActions>
  </Card>
);

export default PostCard;