import { IAMClient, AttachGroupPolicyCommand } from '@aws-sdk/client-iam';

const iamClient = new IAMClient();

const params = {
    GroupName: 'RDSAdmins-Group',
    PolicyArn: 'arn:aws:iam::aws:policy/AmazonRDSFullAccess' // Corrected ARN syntax
};

const run = async () => { // Corrected function declaration syntax
    try {
        const data = await iamClient.send(new AttachGroupPolicyCommand(params)); // Added closing parenthesis
        console.log('Policy is attached to group', data); // Corrected log message
    } catch (err) {
        console.log(err);
    }
};

run();
