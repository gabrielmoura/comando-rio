import {deleteFile, writeFile} from "./FileSystem";

export async function write(data: unknown) {
    const path:string = process.env.FILENAME??'./data.json';
    await deleteFile(path)
    await writeFile(path, JSON.stringify(data, null, 2));
}