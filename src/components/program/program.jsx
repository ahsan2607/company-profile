import {
  Button,
  Card,
  CardContent,
  CardActions,
  Container,
  Grid,
  Typography
} from "@mui/material";

import programContent from "./program.content";
import Title from '../title/title';

export default function Programs() {
  const renderPrograms = programContent.map((programContent) => {
    return (
      <Grid item md={12}>
        <Card>
          <CardContent>
            <Typography variant="h6">
              {programContent.title}
            </Typography>
            <Typography variant="body1">
              {programContent.desc}
            </Typography>
          </CardContent>
          <CardActions>
            <Button>
              Learn more
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  });
  return (
    <>
      <Container className="py-l">
        <Title title="Our Programs" />
        <Grid container rowSpacing={2}>
          {renderPrograms}
        </Grid>
      </Container>
    </>
  );
}