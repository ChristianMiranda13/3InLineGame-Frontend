import { CSSProperties } from 'react';

// Types
type RecordType<K, J> = {
  [P in keyof K]: J;
};

// Functions
/**
 * createCssStyle: styles type on index file / intellesense active recommendations on typing styles
 * @param styles
 */
export const createCssStyle = <T>(styles: RecordType<T, CSSProperties>) => styles;
