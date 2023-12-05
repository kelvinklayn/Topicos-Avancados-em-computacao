/* eslint-disable no-undef */
const express = require('express');
const bodyParser = require('body-parser');

const { Database } = require('./configs/sequelize');
const { CategoryController } = require('./controllers/category-controller.js');
const { BrandController } = require('./controllers/brand-controller.js');

const db = Database.getInstance();

const app = express();
const categoryController = new CategoryController();
const brandController = new BrandController();

app.use(bodyParser.json());

app.get('/api/categories', async (req, res) => {
	const categories = await categoryController.index();
	
	res.json({
		data: categories
	});
});

app.get('/api/categories/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	const category = await categoryController.show(id);
	
	res.json({
		data: category,
	});
});

app.post('/api/categories', async (req, res) => {
	const categoryDto = {
		name: req.body.name,
		active: true,
	};
	
	const category = await categoryController.store(categoryDto);
	
	res.status(201);
	res.json({
		data: category
	});
});

app.delete('/api/categories/:id', async (req, res) => {
    const id = parseInt(req.param.id);

    try {
        await categoryController.destroy(id);

        res.status(204);
        res.end();
    } catch (e) {
        res.status(404);
        res.json({
            error: e,
        });
    }
});

app.put('/api/categories/:id', async (req, res) => {
    const id = parseInt(req.params.id); // Fix: Extract id from req.params
    const categoryDto = {
        name: req.body.name,
        active: req.body.active,
    };

    try {
        const category = await categoryController.update(id, categoryDto);

        res.json({
            data: category,
        });
    } catch (e) {
        res.status(404);
        res.json({
            error: e,
        });
    }
});

app.get('/api/brands', async (req, res) => {
	const brands = await brandController.index();
	
	res.json({
		data: brands
	});
});

app.get('/api/brands/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	const brand = await brandController.show(id);
	
	res.json({
		data: brand,
	});
});

app.post('/api/brands', async (req, res) => {
	const brandDTO = {
		name: req.body.name,
	};
	
	console.log(req.body);
	const brand = await brandController.store(brandDTO);
	
	res.status(201);
	res.json({
		data: brand
	});
});

app.delete('/api/brands/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        await brandController.destroy(id);

        res.status(204);
        res.end();
    } catch (e) {
        res.status(404);
        res.json({
            error: e,
        });
    }
});

app.put('/api/brands/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const brandDTO = {
        name: req.body.name,
    };

    try {
        const brand = await brandController.update(id, brandDTO);

        res.json({
            data: brand,
        });
    } catch (e) {
        res.status(404);
        res.json({
            error: e,
        });
    }
});

app.listen(8000, async () => {
	
	
	await db.sync();
	console.log('Server is running on port 8000!');
});
