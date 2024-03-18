//import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Home: React.FC = () => {
  return (
    <div>
      Welcome Home 
    </div>
  );
};

export default Home;
interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  price: string;
  rating: number;
}



const  ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  description,
  price,
  rating,
}) => {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={image} title={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {rating}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
//