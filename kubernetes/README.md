# Kubernetes deployments

### Deploy the Kubernetes dashboard

First you must create the service account from the `service-account.yaml` file

** NOTE: All commands in the example assume that you are in this directory **
```
kubectl create -f service-account.yaml
```

Then you can create the dashboard

```
kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/master/src/deploy/recommended/kubernetes-dashboard.yaml
```

### Deploying the deployment yaml

You can deploy this to your docker-for-mac application with the following command:

```
kubectl create -f deployment.yaml
```

