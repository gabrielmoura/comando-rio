import {deleteFile, writeFile} from "./FileSystem";

export async function write(data: unknown) {
    const path = process.env.FILENAME
    await deleteFile(path)
    await writeFile(path, JSON.stringify(data, null, 2));
}