import { IAMClient, CreatePolicyCommand } from "@aws-sdk/client-iam";

const client = new IAMClient();
const currentDate = new Date();
const currentDateString = currentDate.toISOString().split('T')[0];
const startTime = `${currentDateString}T01:00:00Z`;
const endTime = `${currentDateString}T03:00:00Z`;

const policyDocument = {
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::testbucketforj",
      "Condition": {
        "DateGreaterThan": { "aws:CurrentTime": startTime },
        "DateLessThan": { "aws:CurrentTime": endTime }
      }
    }
  ]
};

async function createIAMPolicy() {
  try {
    const command = new CreatePolicyCommand({
      PolicyName: 'JavaScriptWindowAccessPolicy',
      PolicyDocument: JSON.stringify(policyDocument)
    });
    const response = await client.send(command);
    console.log('IAM Conditional Policy Created');
  } catch (err) {
    console.error('Error: ', err);
  }
}

createIAMPolicy();
