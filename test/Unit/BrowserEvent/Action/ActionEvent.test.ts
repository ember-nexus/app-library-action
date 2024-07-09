import { expect } from 'chai';

import { ActionEvent } from '../../../../src/BrowserEvent/Action';
import { validateUuidFromString } from '../../../../src/Type/Definition';

describe('ActionEvent tests', () => {
  test('ActionEvent returns correct type', () => {
    expect(ActionEvent.type).to.equal('ember-nexus-action');
  });

  it('should return null when no result was set', async () => {
    const uuid = validateUuidFromString('3c47a37c-6d6b-48d8-aac0-c6bc0d0ecc94');
    const deleteElementEvent = new ActionEvent(uuid);

    expect(deleteElementEvent.getElementId()).to.equal(uuid);
    expect(deleteElementEvent.getResult()).to.be.null;
  });

  it('should return promise when result was set', async () => {
    const uuid = validateUuidFromString('3c47a37c-6d6b-48d8-aac0-c6bc0d0ecc94');
    const deleteElementEvent = new ActionEvent(uuid);

    const promise = new Promise<void>((resolve): void => {
      resolve();
    });

    deleteElementEvent.setResult(promise);

    expect(deleteElementEvent.getElementId()).to.equal(uuid);
    expect(deleteElementEvent.getResult()).to.equal(promise);
  });
});
