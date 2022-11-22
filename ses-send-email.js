import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2"
import * as dotenv from "dotenv"
dotenv.config()

import { fromIni } from "@aws-sdk/credential-providers"

let sesClient = new SESv2Client({
  region: "ap-northeast-1",
  credentials: process.env.AWS_SDK_PRPFILE ? fromIni({ profile: process.env.AWS_SDK_PRPFILE }) : undefined,
})

let cmd = new SendEmailCommand({
  FromEmailAddress: "zhuzidian+ses@gmail.com",
  Destination: {
    ToAddresses: [
      "zhuzidian+to@gmail.com",
    ],
    CcAddresses: [
      "zhuzidian+cc@gmail.com",
    ],
  },
  Content: {
    Simple: {
      Subject: {
        Charset: "utf-8",
        Data: "subject1",
      },
      Body: {
        Text: {
          Charset: "utf-8",
          Data: "body1",
        }
      }
    }
  }
})

let result = await sesClient.send(cmd);
console.log(result)