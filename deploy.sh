#!/bin/bash

# Set your GCP Project ID and desired region
PROJECT_ID="booming-order-393721"
APP_NAME="felisa-frontend"
REGION="us-central1"

# Build the Docker image and tag it with the Google Container Registry URL
gcloud builds submit --tag gcr.io/$PROJECT_ID/$APP_NAME .

# Deploy the Docker image to Google Cloud Run
gcloud run deploy felisa-frontend \
  --image gcr.io/$PROJECT_ID/$APP_NAME \
  --platform managed \
  --region $REGION \
  --allow-unauthenticated

