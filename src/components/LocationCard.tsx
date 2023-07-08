import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

type TLocationCard = {
  img: string;
  name: string;
  address: string;
  map: string;
  phones: string[];
};

const LocationCard = ({img, name, address, map, phones}: TLocationCard) => {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt={name} height="240" image={img} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          <Typography variant="body1" component="span" fontWeight="bold">
            Dirección:{' '}
          </Typography>
          {address}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          <Typography variant="body1" component="span" fontWeight="bold">
            Ubicacion:{' '}
          </Typography>
          <Link href={map} variant="body1" target="_blank">
            Ver en Google Maps
          </Link>
        </Typography>
        <Typography variant="body1" color="text.secondary">
          <Typography variant="body1" component="span" fontWeight="bold">
            Teléfonos:{' '}
          </Typography>
          {phones.join(', ')}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default LocationCard;
