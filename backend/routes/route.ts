import { Router } from "express";

import {
  createEmploy,
  deleteEmploys,
  getAllemploys,
  getEmploysById,
  updateEmploys,
} from "../controllers/employ.controllers";

const router = Router();

router.get("/employs", getAllemploys);
router.get("/employs/:id", getEmploysById);
router.post("/employs", createEmploy);
router.put("/employs/:id", updateEmploys);
router.delete("/employs/:id", deleteEmploys);

export default router;