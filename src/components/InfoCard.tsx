import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

type TInfoCard = {
  title: string;
  icon: any;
  children: string;
};

const InfoCard = ({ title, icon, children }: TInfoCard) => {
  return (
    
    <Card sx={{ maxWidth: 350, boxShadow: 'none', margin: '0 auto' }}>
      <CardContent>
        <Stack direction={{ md: 'row' }} spacing={2}>
          {icon &&
            <img width="50" height="50" src={icon} alt={title} loading="lazy" />
          }
          <Stack spacing={1}>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              fontWeight="bold"
              textAlign="start"
            >
              {title}
            </Typography>
            <Typography
              variant="body1"
              component="p"
              color="text.secondary"
              textAlign="start"
            >
              {children}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};



export default InfoCard;
