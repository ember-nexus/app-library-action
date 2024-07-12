import { validateUuidFromString } from '@ember-nexus/web-sdk/Type/Definition';
import { expect } from 'chai';

import { CreateElementFromTemplateEvent } from '../../../../src/BrowserEvent/Action';

describe('CreateElementFromTemplateEvent tests', () => {
  test('CreateElementFromTemplateEvent returns correct type', () => {
    expect(CreateElementFromTemplateEvent.type).to.equal('ember-nexus-action-create-element-from-template');
  });

  it('should return null when no result was set', async () => {
    const uuid = validateUuidFromString('3c47a37c-6d6b-48d8-aac0-c6bc0d0ecc94');
    const deleteElementEvent = new CreateElementFromTemplateEvent(uuid);

    expect(deleteElementEvent.getElementId()).to.equal(uuid);
    expect(deleteElementEvent.getResult()).to.be.null;
  });

  it('should return promise when result was set', async () => {
    const uuid = validateUuidFromString('3c47a37c-6d6b-48d8-aac0-c6bc0d0ecc94');
    const deleteElementEvent = new CreateElementFromTemplateEvent(uuid);

    const promise = new Promise<void>((resolve): void => {
      resolve();
    });

    deleteElementEvent.setResult(promise);

    expect(deleteElementEvent.getElementId()).to.equal(uuid);
    expect(deleteElementEvent.getResult()).to.equal(promise);
  });
});
