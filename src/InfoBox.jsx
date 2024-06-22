import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({ info }) {
      let HOT_URL="https://images.unsplash.com/photo-1419833173245-f59e1b93f9ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";      

      let COLD_URL="https://images.unsplash.com/photo-1579847641267-5445b760b991?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

      let RAIN_URL="https://images.pexels.com/photos/459451/pexels-photo-459451.jpeg?cs=srgb&dl=pexels-pixabay-459451.jpg&fm=jpg";

    return (
        <div className='InfoBox'>
          <div className='cardContainer'>
            <Card sx={{ width: '600px' }}>
            <CardMedia
              sx={{ height: 140 }}
              image={
                info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
              }
              title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
         {info.city}
        </Typography>
        <Typography variant="body1" color="text.secondary" component={"span"}>
            <p>Temperature = {info.temp}&deg;C</p>
            <p>Humidity = {info.humidity}</p>
            <p>Min Temp = {info.tempMin}&deg;C</p>
            <p>Max Temp = {info.tempMax}&deg;C</p>
            <p>The weather can be described as <i>{info.weather}</i> and feels 
               like {info.feelsLike}&deg;C
            </p>
        </Typography>
      </CardContent>
     </Card>
     </div>
      </div>
    )
  }