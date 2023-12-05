/* eslint-disable no-undef */
const { Brand } = require('../models/brand');

class BrandController {
	async index() {
		return await Brand.findAll();
	}
	
	async show(id) {
		return await Brand.findOne({ 
			where: {
				id: id
			}
		});
	}
	
	async store(brandDTO) {
		const brand = await Brand.create(brandDTO);
		
		brand.save();
		
		return brand;
	}
	
	async update(id, brandDTO) {
		const brand = await Brand.findOne({ 
			where: {
				id: id
			}
		});
		console.log(brand);
		if (!brand) {
			throw Error("Brand not found!");
		}
		
		brand.name = brandDTO.name;
		
		brand.save();
		
		return brand;
	}
	
	async destroy(id) {
		const brand = await Brand.findOne({ 
			where: {
				id: id
			}
		});
		
		if (!brand) {
			throw Error("Brand not found!");
		}
		
		brand.destroy();
	}
}

module.exports = { BrandController };