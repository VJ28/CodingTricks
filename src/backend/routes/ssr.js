import express from "express";
import { ssrTemplate } from "../utils/renderSSRPage";
const router = express.Router();

router.get("/", async (req, res) => {
    ssrTemplate(req,res);
});

router.get("/ask", async (req, res) => {
    ssrTemplate(req,res);
});

router.get("/contactUs", async (req, res) => {
    ssrTemplate(req,res);
});

router.get("/adminPage", async (req, res) => {
    ssrTemplate(req,res);
});

export default router;
