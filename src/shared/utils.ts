import {
    BadGatewayException,
    BadRequestException,
    ConflictException,
    ForbiddenException,
    GatewayTimeoutException,
    GoneException,
    HttpVersionNotSupportedException,
    ImATeapotException,
    InternalServerErrorException,
    NotFoundException,
    NotImplementedException,
    PayloadTooLargeException,
    PreconditionFailedException,
    RequestTimeoutException,
    ServiceUnavailableException,
    UnauthorizedException,
    UnprocessableEntityException,
    UnsupportedMediaTypeException,
} from '@nestjs/common';

export function handlerGeneralException(e: any, message?: string): void {
    let messageToReturn = e.message;
    if (message) messageToReturn = message;

    let finalStatus = e?.status ? e?.status : e?.response?.statusCode;

    if (!finalStatus) finalStatus = 500;

    switch (finalStatus) {
        case 400:
            throw new BadRequestException(messageToReturn);
        case 403:
            throw new ForbiddenException(messageToReturn);
        case 412:
            throw new PreconditionFailedException(messageToReturn);
        case 401:
            throw new UnauthorizedException(messageToReturn);
        case 404:
            throw new NotFoundException(messageToReturn);
        case 408:
            throw new RequestTimeoutException(messageToReturn);
        case 409:
            throw new ConflictException(messageToReturn);
        case 410:
            throw new GoneException(messageToReturn);
        case 505:
            throw new HttpVersionNotSupportedException(messageToReturn);
        case 413:
            throw new PayloadTooLargeException(messageToReturn);
        case 415:
            throw new UnsupportedMediaTypeException(messageToReturn);
        case 422:
            throw new UnprocessableEntityException(messageToReturn);
        case 418:
            throw new ImATeapotException(messageToReturn);
        case 501:
            throw new NotImplementedException(messageToReturn);
        case 502:
            throw new BadGatewayException(messageToReturn);
        case 503:
            throw new ServiceUnavailableException(messageToReturn);
        case 504:
            throw new GatewayTimeoutException(messageToReturn);
        default:
            throw new InternalServerErrorException(messageToReturn);
    }
}

export const getErrorMessage = (err) => {
    return err instanceof Error ? err.message : JSON.stringify(err);
};

export const getTimeNow = () => {
    const today = new Date();
    const date =today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    return date + ' ' + time;
};
