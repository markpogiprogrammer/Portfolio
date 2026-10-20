/**
 * Single source of truth for the resume asset.
 *
 * Previously the path was hard-coded in four places across three components,
 * which is how the site ended up serving a stale filename. Import from here
 * instead of retyping it.
 *
 * The file this points to must live at `public/Quiazon - Resume.pdf`.
 */
export const RESUME_FILE = "Quiazon - Resume.pdf";

/** Path used for href / iframe src. Spaces are valid and the browser encodes them. */
export const RESUME_URL = `/Quiazon - Resume.pdf`;

/** Friendly filename the browser saves the download as. */
export const RESUME_DOWNLOAD_NAME = RESUME_FILE;