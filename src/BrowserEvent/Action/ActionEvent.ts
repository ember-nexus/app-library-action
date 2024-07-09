import { Uuid } from '../../Type/Definition';
import { EventIdentifier } from '../../Type/Enum';
import { customEventDefaultInit } from '../../Type/Partial';

type ActionEventDetails = {
  elementId: Uuid;
  result: Promise<void> | null;
};

/**
 * The ActionEvent corresponds to the ActionEndpoint.
 *
 * Browser event can be emitted by code that does not have direct access to the Ember Nexus Web SDK instance.
 *
 * @see [Web SDK: Delete element event](https://ember-nexus.github.io/web-sdk/#/browser-events/element/delete-element)
 */
class ActionEvent extends CustomEvent<ActionEventDetails> {
  public static type = EventIdentifier.Action;

  /**
   * Creates a new ActionEvent.
   *
   * @param elementId The Uuid of the element which should be deleted.
   */
  constructor(elementId: Uuid) {
    super(ActionEvent.type, {
      ...customEventDefaultInit,
      detail: {
        elementId: elementId,
        result: null,
      },
    });
  }

  /**
   * Returns the Uuid of the element which should be deleted.
   */
  getElementId(): Uuid {
    return this.detail.elementId;
  }

  /**
   * Returns null by default or a promise if the event is handled.
   */
  getResult(): Promise<void> | null {
    return this.detail.result;
  }

  /**
   * Used to set the result of the event.
   *
   * @param result
   */
  setResult(result: Promise<void>): void {
    this.detail.result = result;
  }
}

export { ActionEvent, ActionEventDetails };
