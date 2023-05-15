import { application } from "./application";

const app = application();
const port = 8080;

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
