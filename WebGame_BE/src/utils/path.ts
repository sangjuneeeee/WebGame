import path from "path";

export const directoryPath = path.dirname(require.main?.filename ?? "");
