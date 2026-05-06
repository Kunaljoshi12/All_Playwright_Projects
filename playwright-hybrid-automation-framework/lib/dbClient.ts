import mysql from 'mysql2/promise';
import * as dotenv from 'dotenv';

// Load environment variables from your .env file
dotenv.config();

export async function getTestDataFromDB() {
    try {
        const connection = await mysql.createConnection({
            // Using process.env to pull values from your .env file
            host: process.env.DB_HOST || '127.0.0.1',
            user: process.env.DB_USER || 'root',
            password: process.env.DB_PASSWORD, // Successfully pulls 'Pass@1234kj'
            database: process.env.DB_NAME || 'playwright_automation',
            port: 3306
        });

        // Query to fetch active test cases
        const [rows] = await connection.execute(
            'SELECT test_case_name, input_value FROM test_inputs WHERE is_active = TRUE'
        );
        
        await connection.end();
        return rows as any[];

    } catch (error: any) {
        // Detailed error logging specifically for your ASUS TUF 15 environment
        console.error("Database Connection Error!");
        console.error(`Message: ${error.message}`);
        console.error(`Code: ${error.code}`);
        
        // Help identify if it's still a password issue
        if (error.code === 'ER_ACCESS_DENIED_ERROR') {
            console.error("💡 Tip: Double-check your .env password ends in 'kj' and matches the DB Client extension.");
        }
        
        throw error;
    }
}