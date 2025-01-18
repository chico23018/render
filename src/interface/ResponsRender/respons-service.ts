export interface ResponseRender {
    cursor:  string;
    service: Service;
}

export interface Service {
    autoDeploy:     string;
    branch:         string;
    createdAt:      Date;
    dashboardUrl:   string;
    id:             string;
    name:           string;
    notifyOnFail:   string;
    ownerId:        string;
    repo:           string;
    rootDir:        string;
    serviceDetails: ServiceDetails;
    slug:           string;
    suspended:      string;
    suspenders:     any[];
    type:           string;
    updatedAt:      Date;
}

export interface ServiceDetails {
    buildPlan:                  string;
    env:                        string;
    envSpecificDetails:         EnvSpecificDetails;
    healthCheckPath:            string;
    numInstances:               number;
    openPorts:                  null;
    plan:                       string;
    previews:                   Previews;
    pullRequestPreviewsEnabled: string;
    region:                     string;
    url:                        string;
}

export interface EnvSpecificDetails {
    dockerCommand:  string;
    dockerContext:  string;
    dockerfilePath: string;
}

export interface Previews {
    generation: string;
}
export interface Deploy {
    deploy: DeployClass;
    cursor: string;
}

export interface DeployClass {
    id:         string;
    commit:     Commit;
    status:     string;
    trigger:    string;
    createdAt:  Date;
    updatedAt:  Date;
    finishedAt: Date;
}

export interface Commit {
    id:        string;
    message:   string;
    createdAt: Date;
}
