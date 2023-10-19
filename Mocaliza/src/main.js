    import express from 'express';
    const app = express();
    const port = 8000;

    app.get('/',(req, res) =>{
        res.json({
            data: Date.now()
        });
    });

    app.listen(port, () => {
        console.log(`O servidor foi iniciado na porta ${port}!`);
    });

