import { Button, Card, CardContent, CardActions, Container, Grid, Typography } from '@mui/material';
import { programContent } from '../../../contents';
import { Title } from '../..';

const renderPrograms = programContent.map((programContent) => {
  return (
    <Grid key={programContent.key} item md={12}>
      <Card>
        <CardContent>
          <Typography variant="h6">{programContent.title}</Typography>
          <Typography variant="body1">{programContent.desc}</Typography>
        </CardContent>
        <CardActions>
          <Button>Learn more</Button>
        </CardActions>
      </Card>
    </Grid>
  );
});

export const Programs = () => {
  return (
    <Container sx={{ paddingTop: '50px', paddingBottom: '25px' }}>
      <Title title="Our Programs" />
      <Grid container rowSpacing={2} sx={{ paddingTop: '25px' }}>
        {renderPrograms}
      </Grid>
    </Container>
  );
};
