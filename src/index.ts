import express, {Request, Response} from "express";
const app = express();
const PORT = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello Incubator!!!');
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});