
import { DataEvent } from "../interface/ResponsRender/response-event";

export class EventoData {

    static mapperResponseToEntityEvento(responseEvent: DataEvent) {
        return {
            id: responseEvent.deploy.id,
            message: responseEvent.deploy.commit.message,
            createdAt: responseEvent.deploy.createdAt,
            cursor: responseEvent.cursor,
            status: responseEvent.deploy.status,
        }
    }
}