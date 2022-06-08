import { pxToRem } from './helpers';

export const base_fontSize = 16;

export const colors = {
	dark: '#121a3e',
	emblem: '#fc0',
	active: '#ff0',
	text: '#2c3e50',
	text_dark: 'black',
};

export const gap = {
	original: '8px',
	general: '16px',
	section: '24px',
};

export const radius = {
	project: '5px',
};

export const fontSize = {
	general: pxToRem(22),
	warning: pxToRem(16),
};

export const width = {
	max_width: '400px',
};

export const media = {
	Tablet: `@media (min-width: ${width.tablet})`,
	Desktop: `@media (min-width: ${width.desktop})`,
	Max_Width: `@media (min-width: ${width.max_width})`,
};
