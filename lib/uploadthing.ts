import {
  generateUploadButton,
  generateUploadDropzone,
} from "@uploadthing/react";

import type { FileRouter } from "uploadthing/server";

export const UploadButton = generateUploadButton<FileRouter>();
export const UploadDropzone = generateUploadDropzone<FileRouter>();
