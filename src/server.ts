import app, { init } from "./app.js";

init().then(() => {
    app.listen(process.env.PORT || 4000, () => {
        console.log(`Server started on http://localhost:${process.env.PORT}`);
    })
});