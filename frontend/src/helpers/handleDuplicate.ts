/* eslint-disable no-underscore-dangle */
import { Reference } from '@apollo/client';

import { Post } from '../types';

export function handleDuplicateRef<T extends Reference>(
  firstArray: Array<T> | null,
  secondArray: Array<T> | null,
): Array<T> {
  if (!secondArray || !firstArray) {
    return secondArray || firstArray || [];
  }

  const firstArrayIds = firstArray.map(({ __ref }) => __ref);

  const filteredSecondArray = secondArray.filter(
    (item) => !firstArrayIds.includes(item.__ref),
  );

  return [...firstArray, ...filteredSecondArray];
}

export function handleDuplicatePost<T extends Post>(
  firstArray: Array<T> | null,
  secondArray: Array<T> | null,
): Array<T> {
  if (!secondArray || !firstArray) {
    return secondArray || firstArray || [];
  }

  const firstArrayIds = firstArray.map(({ id }) => id);

  const filteredSecondArray = secondArray.filter(
    (item) => !firstArrayIds.includes(item.id),
  );

  return [...firstArray, ...filteredSecondArray];
}
