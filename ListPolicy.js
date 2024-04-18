import { IAMClient, ListPoliciesCommand } from "@aws-sdk/client-iam"; // Corrected import statement

const iamClient = new IAMClient();

const params = {
    Scope: 'Local'
}; // Corrected object syntax

const run = async () => { // Corrected function declaration syntax
    try {
        const results = await iamClient.send(new ListPoliciesCommand(params));
        console.log(results);
        return results;
    } catch (err) {
        console.log(err);
    }
};

run();
