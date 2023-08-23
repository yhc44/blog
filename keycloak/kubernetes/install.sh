#!/bin/bash
helm install keycloak codecentric/keycloakx -n keycloak --set replicas=2 --values values.yaml