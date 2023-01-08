import { SSMClient, PutParameterCommand, GetParameterCommand } from "@aws-sdk/client-ssm";

const client = new SSMClient()

// {
//   const command = new PutParameterCommand({
//     Name: 'param1',
//     Value: 'param1-value',
//     Type: 'String',
//   })
  
//   const result = await client.send(command)
//   console.log(result)
// }

{
  const command = new GetParameterCommand({
    Name: 'param1'
  })
  let result = await client.send(command)
  console.log(result)
}