/*
## ========= ========= ========= ========= ========= ========= ========= ========= =========
## CreateMessage
## ========= ========= ========= ========= ========= ========= ========= ========= =========

{
  "version" : "2017-02-28",
  "operation" : "PutItem",
  "key" : {
      "conversationId" : $util.dynamodb.toDynamoDBJson($ctx.args.input.conversationId) ,
      "createdAt" : $util.dynamodb.toDynamoDBJson("$util.time.nowEpochMilliSeconds()")
  },
  "attributeValues" : {
    
      "content": $util.dynamodb.toDynamoDBJson($ctx.args.input.content),
     "sender": $util.dynamodb.toMapJson($ctx.args.input.sender),
      "receiver": $util.dynamodb.toMapJson($ctx.args.input.receiver)
      
  }
}

## ========= ========= ========= ========= ========= ========= ========= ========= =========


*/