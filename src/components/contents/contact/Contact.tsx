import { Card, CardContent, Container, Grid, Typography } from '@mui/material';
import { contactContent } from '../../../contents';
import { Title } from '../..';

const renderContacts = contactContent.map((contactContent) => {
  return (
    <Grid key={contactContent.key} item md={12}>
      <Card>
        <CardContent>
          <Typography variant="h6">{contactContent.name}</Typography>
          <Typography variant="body1">{contactContent.cont}</Typography>
        </CardContent>
        {/* <CardActions>
          <Button>Learn more</Button>
        </CardActions> */}
      </Card>
    </Grid>
  );
});

export const Contacts = () => {
  return (
    <Container sx={{ paddingTop: '50px', paddingBottom: '25px' }}>
      <Title title="Our Contacts" />
      <Grid container rowSpacing={2} sx={{ paddingTop: '25px' }}>
        {renderContacts}
      </Grid>
    </Container>
  );
};
