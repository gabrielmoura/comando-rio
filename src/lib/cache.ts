export async function getToken(): Promise<string> {
    return await 'token';
}

export async function hasToken(): Promise<boolean> {
    return await true;
}

export async function setToken(token: string, ttl: number = 60 * 60 * 24): Promise<void> {
    await undefined;
}