import { EnvironmentLoaderService } from './environment-loader.service';

describe('EnvironmentService', () => {
  let env: NodeJS.ProcessEnv;
  beforeEach(async () => {
    env = { ...process.env };
  });

  it('should be defined', () => {
    expect(EnvironmentLoaderService).toBeDefined();
  });

  it('should have loadEnvironment function', () => {
    expect(new EnvironmentLoaderService().loadEnvironment).toBeInstanceOf(
      Function,
    );
  });
});

describe('new EnvironmentService().loadEnvironment', () => {
  let env: NodeJS.ProcessEnv;

  beforeEach(async () => {
    env = { ...process.env };
  });

  it('should return a default value for NODE_ENV', () => {
    env.NODE_ENV = 'mock';
    const actual = new EnvironmentLoaderService(env).loadEnvironment();
    expect(actual.NODE_ENV).toBe('mock');
  });

  it('should preserve existing NODE_ENV', () => {
    env.NODE_ENV = 'mock';
    const actual = new EnvironmentLoaderService(env).loadEnvironment();
    expect(actual.NODE_ENV).toBe('mock');
  });

  it('should return a default value for PORT', () => {
    const actual = new EnvironmentLoaderService(env).loadEnvironment();
    expect(actual.PORT).toBe('3000');
  });

  it('should preserve existing PORT', () => {
    env.PORT = '50505';
    const actual = new EnvironmentLoaderService(env).loadEnvironment();
    expect(actual.PORT).toBe('50505');
  });

  it('should return a default value for PROTECTED_ENVIRONMENTS', () => {
    const actual = new EnvironmentLoaderService(env).loadEnvironment();
    expect(actual.PROTECTED_ENVIRONMENTS).toBe('staging;production;');
  });

  it('should preserve PROTECTED_ENVIRONMENTS', () => {
    env.PROTECTED_ENVIRONMENTS = 'mock';
    const actual = new EnvironmentLoaderService(env).loadEnvironment();
    expect(actual.PROTECTED_ENVIRONMENTS).toBe('mock');
  });

  it('should return default value for SYNCHRONIZE', () => {
    const actual = new EnvironmentLoaderService(env).loadEnvironment();
    expect(actual.SYNCHRONIZE).toBe('false');
  });

  it('should return true in SYNCHRONIZE if the environment is not protected', () => {
    env.SYNCHRONIZE = 'true';
    const actual = new EnvironmentLoaderService(env).loadEnvironment();
    expect(actual.SYNCHRONIZE).toBe('true');
  });

  it('should return a false SYNCHRONIZE if the environment is protected', () => {
    env.SYNCHRONIZE = 'true';
    env.PROTECTED_ENVIRONMENTS = 'test';
    const actual = new EnvironmentLoaderService(env).loadEnvironment();
    expect(actual.SYNCHRONIZE).toBe('false');
  });

  it('should preserve any custom environment variables', () => {
    env.CUSTOM = 'TEST_MOCK_VARIABLE';
    const actual = new EnvironmentLoaderService(env).loadEnvironment();
    expect(actual.CUSTOM).toBe('TEST_MOCK_VARIABLE');
  });

  it('should preserve system environment variables', () => {
    const actual = new EnvironmentLoaderService(env).loadEnvironment();
    expect(actual.HOME).toBeDefined();
  });

  it('should return values represented by strings and not other primitives', () => {
    const actual = new EnvironmentLoaderService(env).loadEnvironment();
    Object.getOwnPropertyNames(actual).forEach(prop => {
      expect(typeof prop).toBe('string');
    });
  });
});
