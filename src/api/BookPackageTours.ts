import { StepFunctions } from 'aws-sdk';

export const handler = async (event: any) => {
    const stepFunctions = new StepFunctions();
    const executionData = await stepFunctions.startExecution({
        stateMachineArn: `${process.env.SAGA_COORDINATOR_ARN}`,
        input: event.body,
    }).promise();
    return {
        statusCode: 200,
        body: JSON.stringify({
            executionArn: executionData.executionArn, 
            startDate: executionData.startDate 
        })
    }

}