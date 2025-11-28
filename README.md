cd frontend

npm install

npm run dev

mvn spring-boot:run

docker login

docker compose build

docker tag cicd-health-backend:latest bhanuteja110/cicd-health-backend:latest

docker tag cicd-health-frontend:latest bhanuteja110/cicd-health-frontend:latest

kubectl apply -f k8s/backend-deployment.yaml

kubectl apply -f k8s/frontend-deployment.yaml

kubectl apply -f k8s/ingress.yaml

kubectl get svc

kubectl get ingress
