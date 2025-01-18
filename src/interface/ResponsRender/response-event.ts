export interface DataEvent {
    deploy: Deploy;
    cursor: string;
}

export interface Deploy {
    id:         string;
    commit:     Commit;
    status:     string;
    trigger:    string;
    createdAt:  string;
    updatedAt:  Date;
    finishedAt: Date;
}

export interface Commit {
    id:        string;
    message:   string;
    createdAt: Date;
}
