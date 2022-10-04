import {unlink, writeFile as write} from 'node:fs/promises';

export async function deleteFile(path: string) {
    try {
        await unlink(path);
        console.log(`successfully deleted ${path}`);
    } catch (error) {
        console.error('there was an error:', error.message);
    }
}

export async function writeFile(path: string, data: string) {
    try {
        await write(path, data);
        console.log(`successfully created ${path}`);
    } catch (error) {
        console.error('there was an error:', error.message);
    }

}