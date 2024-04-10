import { TestBed } from '@angular/core/testing';

import { DbAccess } from './db-access.service';

describe('DbAccessService', () => {
  let service: DbAccess;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbAccess);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
