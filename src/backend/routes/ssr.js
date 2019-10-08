import express from "express";
import { ssrTemplate } from "../utils/renderSSRPage";
const router = express.Router();

router.get("/", async (req, res) => {
    ssrTemplate(req,res);
});

router.get("/blogs", async (req, res) => {
    ssrTemplate(req,res);
});

router.get("/ask", async (req, res) => {
    ssrTemplate(req,res);
});

router.get("/contactus", async (req, res) => {
    ssrTemplate(req,res);
});

router.get("/adminPage", async (req, res) => {
    ssrTemplate(req,res);
});

export default router;
