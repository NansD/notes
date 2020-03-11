---
title: Lambda training
date: "2020-03-11T15:15:00.284Z"
description: "Notes taken during AWS lambda education"
---
# Learn AWS Lambda and see real world example with serverless

https://serverless.com/ 

## What is lambda
functions
limited by time
run on demand
scaling is automated -> that's why we call it "Serverless"

## Pricing
- pay per request
- pay per compute time

## AWS Lambda integrations
- API Gateway -> to build a REST API
- Kinesis -> processing data in streams
- DynamoDB -> Managed NoSQL database
- ...

## Example : Thumbnail creation
"Database Trigger-like" behavior for S3
New image in S3 -> trigger -> AWS Lambda function creates a thumbnail and push it to S3

/!\ the handler is the name of function that will be called in lambda

