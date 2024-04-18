import { IAMClient, CreateLoginProfileCommand } from "@aws-sdk/client-iam";

const iamClient = new IAMClient(); // Corrected parenthesis

const params = {
    Password: 'Mypassword1',
    PasswordResetRequired: false,
    UserName: 'test'
}; // Corrected object syntax

const run = async () => { // Corrected function declaration syntax
    try {
        const data = await iamClient.send(new CreateLoginProfileCommand(params)); // Corrected colon to semicolon
        console.log('User is created', data);
        return data;
    } catch(err) { // Corrected try-catch block syntax
        console.log(err);
    }
};

run();
