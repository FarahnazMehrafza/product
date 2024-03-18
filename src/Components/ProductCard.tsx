import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { ProductType } from "../types/product";

export default function ProductCard({
  id,
  image,
  title,
  description,
  price,
  category,
}: ProductType) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={image} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {category}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`product/${id}`}>
          <Button size="small">View Details</Button>
        </Link>
      </CardActions>
    </Card>
  );
}