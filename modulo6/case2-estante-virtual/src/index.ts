import { CompetitionRouter } from "./router/CompetitionRouter";
import { ResultRouter } from "./router/resultRouter";
import { app } from "./services/app";

app.use("/competition", CompetitionRouter);
app.use("/result", ResultRouter);