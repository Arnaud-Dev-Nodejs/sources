import { lastValueFrom } from 'rxjs';
import { mocked } from 'ts-jest/utils';

import { Test, TestingModule } from '@nestjs/testing';

import { ConfigService } from '@fc/config';
import { LoggerService } from '@fc/logger';
import { TracksProtocol } from '@fc/microservices';
import { IOidcIdentity } from '@fc/oidc';

import { TracksResponseException } from '../exceptions';
import { TracksService } from './tracks.service';

jest.mock('rxjs');

describe('TracksService', () => {
  let service: TracksService;

  const lastValueFromMock = mocked(lastValueFrom);

  const loggerServiceMock = {
    debug: jest.fn(),
    setContext: jest.fn(),
    trace: jest.fn(),
  } as unknown as LoggerService;

  const identityMock = {} as IOidcIdentity;

  const configMock = {
    get: jest.fn(),
  };

  const brokerMock = {
    close: jest.fn(),
    connect: jest.fn(),
    send: jest.fn(),
  };

  const messageMock = {
    pipe: jest.fn(),
  };

  const pipeMock = {};
  const brokerResponseMock = 'brokerResponseMock';

  beforeEach(async () => {
    jest.resetAllMocks();
    jest.restoreAllMocks();

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TracksService,
        LoggerService,
        ConfigService,
        {
          provide: 'TracksBroker',
          useValue: brokerMock,
        },
      ],
    })
      .overrideProvider(ConfigService)
      .useValue(configMock)
      .overrideProvider(LoggerService)
      .useValue(loggerServiceMock)
      .compile();

    service = module.get<TracksService>(TracksService);

    configMock.get.mockReturnValueOnce({
      payloadEncoding: 'base64',
      requestTimeout: 200,
    });

    brokerMock.send.mockReturnValue(messageMock);
    messageMock.pipe.mockReturnValue(pipeMock);
    lastValueFromMock.mockResolvedValue(brokerResponseMock);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getList', () => {
    it('should return a promise', async () => {
      // When
      const result = service.getList(identityMock);
      // Then
      expect(result).toBeInstanceOf(Promise);
      await result;
    });

    it('should call config.get', async () => {
      // When
      await service.getList(identityMock);
      // Then
      expect(configMock.get).toHaveBeenCalledTimes(1);
      expect(configMock.get).toHaveBeenCalledWith('TracksBroker');
    });

    it('should call broker.send with the user identity', async () => {
      // When
      await service.getList(identityMock);
      // Then
      expect(brokerMock.send).toHaveBeenCalledTimes(1);
      expect(brokerMock.send).toHaveBeenCalledWith(
        TracksProtocol.Commands.GET,
        {
          identity: identityMock,
        },
      );
    });

    it('should reject when the rabbitmq response has failed', async () => {
      // Given
      const rejectedValueMock = 'rejectedValueMock';
      lastValueFromMock.mockRejectedValueOnce(rejectedValueMock);
      // When / Then
      await expect(service.getList(identityMock)).rejects.toThrow(
        TracksResponseException,
      );
    });

    it('should resolve when the rabbitmq response is successful', async () => {
      // Given
      const resolvedValueMock = 'resolvedValueMock';
      lastValueFromMock.mockResolvedValueOnce(resolvedValueMock);
      // When
      const result = await service.getList(identityMock);
      // Then
      expect(result).toEqual(resolvedValueMock);
    });
  });
});
