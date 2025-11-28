cd frontend

npm install

npm run dev

mvn spring-boot:run

docker login

docker compose build

docker tag cicd-news-backend:latest bhanuteja110/cicd-news-backend:latest

docker tag cicd-news-frontend:latest bhanuteja110/cicd-news-frontend:latest

kubectl apply -f k8s/backend-deployment.yaml

kubectl apply -f k8s/frontend-deployment.yaml

kubectl apply -f k8s/ingress.yaml

kubectl get svc

kubectl get ingress
