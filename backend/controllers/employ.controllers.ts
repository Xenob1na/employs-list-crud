import { RequestHandler } from "express";

import { Employ } from "../models/employ.model";

export const createEmploy: RequestHandler = async (req, res, next) => {
    let employs = await Employ.create({...req.body});
    return res.status(201).json({message: "Employ created", data: employs});
}

export const deleteEmploys: RequestHandler = async (req, res, next) => {
    const { id } = req.params;

    const deletedEmploys: Employ | null = await Employ.findByPk(id);
    await Employ.destroy({ where: { id } });
    return res.status(200).json({message: "Employ deleted", data: deletedEmploys});
}

export const getAllemploys: RequestHandler = async (req, res, next) => {
    const allEmploys: Employ[] = await Employ.findAll();
    return res.status(200).json({message: "All employs", data: allEmploys});
}

export const getEmploysById: RequestHandler = async (req, res, next) => {
    const { id } = req.params;

    const employs: Employ | null = await Employ.findByPk(id);
    return res.status(200).json({message: "Employ", data: employs});
}

export const updateEmploys: RequestHandler = async (req, res, next) => {
    const { id } = req.params;
    
    await Employ.update({...req.body}, { where: { id } });
    const updatedEmploys: Employ | null = await Employ.findByPk(id);
    return res.status(200).json({message: "Employ updated", data: updatedEmploys});
}