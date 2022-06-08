import { base_fontSize } from './theme';

export function pxToRem(px) {
	return px / base_fontSize + 'rem';
}
