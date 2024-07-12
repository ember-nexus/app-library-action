import { validateUuidFromString } from '@ember-nexus/web-sdk/Type/Definition';
import { expect } from 'chai';

import { CreateElementEvent } from '../../../../src/BrowserEvent/Action';

describe('CreateElementEvent tests', () => {
  test('CreateElementEvent returns correct type', () => {
    expect(CreateElementEvent.type).to.equal('ember-nexus-action-create-element');
  });

  it('should return null when no result was set', async () => {
    const uuid = validateUuidFromString('3c47a37c-6d6b-48d8-aac0-c6bc0d0ecc94');
    const deleteElementEvent = new CreateElementEvent(uuid);

    expect(deleteElementEvent.getElementId()).to.equal(uuid);
    expect(deleteElementEvent.getResult()).to.be.null;
  });

  it('should return promise when result was set', async () => {
    const uuid = validateUuidFromString('3c47a37c-6d6b-48d8-aac0-c6bc0d0ecc94');
    const deleteElementEvent = new CreateElementEvent(uuid);

    const promise = new Promise<void>((resolve): void => {
      resolve();
    });

    deleteElementEvent.setResult(promise);

    expect(deleteElementEvent.getElementId()).to.equal(uuid);
    expect(deleteElementEvent.getResult()).to.equal(promise);
  });
});
