import {
  filter,
  mapTo,
} from 'rxjs/operators';

export default (action$) => action$.pipe(
  filter(({ action }) => action === 'some_action'),
  mapTo({ type: 'some_other_action '})
);
