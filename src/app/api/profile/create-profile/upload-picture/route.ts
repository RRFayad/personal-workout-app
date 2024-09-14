import { NextApiRequest, NextApiResponse } from "next";
import multer from "multer";
import path from "path";
import fs from "fs";
import { Request, Response } from "express";

// Set up multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(process.cwd(), "public/uploads");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const fileExtension = path.extname(file.originalname);
    cb(null, `${uniqueSuffix}${fileExtension}`);
  },
});

const upload = multer({ storage });
const uploadMiddleware = upload.single("profilePicture");

// Extend NextApiRequest to include `file` property for multer
interface NextApiRequestWithFile extends NextApiRequest {
  file: Express.Multer.File; // Add the `file` property
}

// Disable body parsing for this API route
export const config = {
  api: {
    bodyParser: false,
  },
};

// API route handler
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  uploadMiddleware(req as NextApiRequestWithFile, res as Response, (err) => {
    if (err) {
      return res
        .status(500)
        .json({ errors: { _form: ["File upload failed"] } });
    }

    // Now `req.file` is recognized by TypeScript
    const filePath = req.file ? `/uploads/${req.file.filename}` : null;

    return res.status(200).json({ filePath });
  });
}
