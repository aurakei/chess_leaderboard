import { Client } from 'pg';
import connect from '../lib/db';

jest.mock('pg', () => {
  const mClient = {
    connect: jest.fn(),
    end: jest.fn(),
  };
  return { Client: jest.fn(() => mClient) };
});

describe('Database Connection', () => {
  let client;

  beforeAll(async () => {
    client = await connect();
  });

  afterAll(() => {
    client.end(); // Close the connection after tests
  });

  it('should call Client.connect', async () => {
    expect(Client).toHaveBeenCalled();
    expect(client.connect).toHaveBeenCalled();
  });

  it('should connect successfully to PostgreSQL', async () => {
    expect(client.connect).toHaveBeenCalledTimes(1);
    console.log = jest.fn(); // Mock console.log to capture output
    await connect();
    expect(console.log).toHaveBeenCalledWith('Connected to PostgreSQL');
  });

  it('should throw an error if connection fails', async () => {
    const errorMessage = 'Failed to connect';
    client.connect.mockRejectedValueOnce(new Error(errorMessage));

    await expect(connect()).rejects.toThrow(errorMessage);
  });
});
