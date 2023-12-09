import { InjectionToken, WritableSignal } from '@angular/core';

export interface EntityViewService {
  entityType: WritableSignal<string>;
  tableData?: WritableSignal<string[]>;
  banners?: WritableSignal<string[]>;
  filters?: WritableSignal<string[]>;
  sideNavOptions?: WritableSignal<string[]>;
}
export const ENTITY_VIEW_SIGNAL_STORE = new InjectionToken<EntityViewService>(
	'Entity View Store',
);

export const ENTITY_TYPE = new InjectionToken<string>(
	'',
);

