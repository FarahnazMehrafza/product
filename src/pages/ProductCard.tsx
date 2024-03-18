import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { RatingType } from "./ProductDetails";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: number;
  category: string;
  rating: RatingType;
}

export default function ProductCard({
  image,
  title,
  description,
  category,
  price,
  rating
}: ProductCardProps) {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia sx={{ height: 100 }} image={image} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: {price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Category: {category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Ratings: {rating.count} {rating.rate}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}