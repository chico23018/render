import { ResponseRender } from "../interface/ResponsRender/respons-service";

export class Service {

    static mapperResponseToEntityService(responseService: ResponseRender) {
        return {
            id: responseService.service.id,
            cursor: responseService.cursor,
            name: responseService.service.name,
            url: responseService.service.serviceDetails.url,
            ownerId: responseService.service.ownerId
        }

    }
}