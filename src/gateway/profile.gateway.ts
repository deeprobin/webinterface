export class ProfileGateway {
    async getId(): Promise<number> {
        return null;
    }

    async getUsername(): Promise<string> {
        return null;
    }

    async getCreatedAt(): Promise<Date> {
        return null;
    }

    async getLastLogin(): Promise<Date> {
        return null;
    }

    async rename(newUsername: string): Promise<void> {
        return null;
    }

    async changePassword(newPassword: string): Promise<void> {
        // encode as UTF-8
        const passwordBuffer = new TextEncoder().encode(newPassword);  
        
        // client-side hashing
        const digest = crypto.subtle.digest("SHA-512", passwordBuffer);
        
        // TODO: send request
    }
}