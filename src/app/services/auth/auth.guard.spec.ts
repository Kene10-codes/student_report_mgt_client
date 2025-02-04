import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  it('should be defined', () => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    expect(new AuthGuard(routerSpy)).toBeDefined();
  });
});
