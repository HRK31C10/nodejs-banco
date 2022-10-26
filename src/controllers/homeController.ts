import { Request, Response } from 'express';
import { Product } from '../models/Product';
import { User } from '../models/User';
import {sequelize} from '../instances/mysql'

export const home = async (req: Request, res: Response)=>{

    let usuarios = await User.findAll()

    res.render('pages/home', {
        usuarios
    });
};


/*
    try{
        await sequelize.authenticate()
        console.log("Conexão estabelecida com sucesso!")
    }catch(error){
        console.log("Deu ruim!", error)
    }
*/